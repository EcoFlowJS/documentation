import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { FlexboxGrid, InputNumber } from "rsuite";
import "rsuite/FlexboxGrid/styles/index.css";
import "rsuite/InputNumber/styles/index.css";
import "../../style/theme.less";

export default function Number() {
  const { colorMode } = useColorMode();
  return (
    <FlexboxGrid
      align="middle"
      justify="space-between"
      style={{ width: 380 }}
      className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
    >
      <FlexboxGrid.Item
        style={{ width: 60 }}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        Number
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        style={{ width: 300 }}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <InputNumber
          autoComplete="off"
          spellCheck={false}
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
