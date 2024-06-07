import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { FlexboxGrid, Input } from "rsuite";
import "rsuite/FlexboxGrid/styles/index.css";
import "rsuite/Input/styles/index.css";
import "../../style/theme.less";

export default function String() {
  const { colorMode } = useColorMode();
  return (
    <FlexboxGrid
      align="middle"
      justify="space-between"
      style={{ width: 360 }}
      className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
    >
      <FlexboxGrid.Item
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        String
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        style={{ width: 300 }}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <Input
          autoComplete="off"
          spellCheck={false}
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
