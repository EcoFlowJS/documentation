import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { FlexboxGrid, RadioGroup, Radio as RsuiteRadio } from "rsuite";
import "rsuite/FlexboxGrid/styles/index.css";
import "rsuite/Radio/styles/index.css";
import "../../style/theme.less";

export default function Radio() {
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
        Radio
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        style={{ width: 300 }}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <RadioGroup
          name="radio-group"
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        >
          {["hello", "world", "yes", "No"].map((value, key) => (
            <RsuiteRadio
              key={key}
              value={value}
              className={
                colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
              }
            >
              {value}
            </RsuiteRadio>
          ))}
        </RadioGroup>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
