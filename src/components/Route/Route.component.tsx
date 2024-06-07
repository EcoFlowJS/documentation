import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import "rsuite/Input/styles/index.css";
import "rsuite/InputGroup/styles/index.css";
import "rsuite/FlexboxGrid/styles/index.css";
import "../../style/theme.less";
import { FlexboxGrid, Input, InputGroup } from "rsuite";

export default function Route() {
  const { colorMode } = useColorMode();
  return (
    <FlexboxGrid
      align="middle"
      justify="space-between"
      className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      style={{ width: 400 }}
    >
      <FlexboxGrid.Item
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        API End point
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <InputGroup
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        >
          <InputGroup.Addon
            className={
              colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
            }
          >
            /
          </InputGroup.Addon>
          <Input
            className={
              colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
            }
            type="text"
            autoComplete="off"
            spellCheck={false}
            style={{ width: 250 }}
          />
        </InputGroup>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
