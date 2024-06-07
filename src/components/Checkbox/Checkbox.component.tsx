import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { FlexboxGrid, Checkbox as RsuiteCheckbox } from "rsuite";
import "rsuite/FlexboxGrid/styles/index.css";
import "rsuite/Checkbox/styles/index.css";
import "../../style/theme.less";

export default function Checkbox() {
  const { colorMode } = useColorMode();
  return (
    <FlexboxGrid
      align="middle"
      justify="space-between"
      style={{ width: 200 }}
      className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
    >
      <FlexboxGrid.Item
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        Checkbox
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <RsuiteCheckbox />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
