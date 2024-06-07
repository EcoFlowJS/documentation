import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { FlexboxGrid, SelectPicker as RsuiteSelectPicker } from "rsuite";
import "rsuite/FlexboxGrid/styles/index.css";
import "rsuite/SelectPicker/styles/index.css";
import "../../style/theme.less";

export default function SelectPicker() {
  const { colorMode } = useColorMode();
  return (
    <FlexboxGrid
      align="middle"
      justify="space-between"
      style={{ width: 420 }}
      className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
    >
      <FlexboxGrid.Item
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        Select Picker
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        style={{ width: 300 }}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <RsuiteSelectPicker
          block
          data={["hello", "world", "yes", "No"].map((val) => ({
            value: val,
            label: val,
          }))}
          menuClassName={
            colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
          }
        />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
