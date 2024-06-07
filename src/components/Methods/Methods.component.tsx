import React from "react";
import { FlexboxGrid, SelectPicker } from "rsuite";
import "rsuite/SelectPicker/styles/index.css";
import "rsuite/FlexboxGrid/styles/index.css";
import "../../style/theme.less";
import { useColorMode } from "@docusaurus/theme-common";

export default function Methods() {
  const { colorMode } = useColorMode();
  return (
    <FlexboxGrid
      align="middle"
      justify="space-between"
      style={{ width: 380 }}
      className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
    >
      <FlexboxGrid.Item
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        Method
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        style={{ width: 300 }}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <SelectPicker
          block
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
          data={["GET", "POST", "PUT", "PATCH", "DELETE"].map((val) => ({
            value: val,
            label: val,
          }))}
        />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
