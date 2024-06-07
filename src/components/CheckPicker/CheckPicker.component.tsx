import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { FlexboxGrid, CheckPicker as RsuiteCheckPicker } from "rsuite";
import "rsuite/FlexboxGrid/styles/index.css";
import "rsuite/CheckPicker/styles/index.css";
import "../../style/theme.less";

export default function CheckPicker() {
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
        Check Picker
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        style={{ width: 300 }}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <RsuiteCheckPicker
          block
          data={["hello", "world", "yes", "No"].map((val) => ({
            value: val,
            label: val,
          }))}
          style={{ width: 300 }}
          menuClassName={
            colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
          }
        />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
