import React from "react";
import { FlexboxGrid, Toggle as RsuiteToggle } from "rsuite";
import { useColorMode } from "@docusaurus/theme-common";
import "rsuite/FlexboxGrid/styles/index.css";
import "rsuite/Toggle/styles/index.css";
import "../../style/theme.less";

export default function Toggle() {
  const { colorMode } = useColorMode();
  return (
    <FlexboxGrid
      align="middle"
      className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
    >
      <FlexboxGrid.Item
        style={{ width: 60 }}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        Toggle
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <RsuiteToggle
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
