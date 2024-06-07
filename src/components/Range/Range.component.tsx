import React, { useState } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { FlexboxGrid, InputGroup, InputNumber } from "rsuite";
import "rsuite/FlexboxGrid/styles/index.css";
import "rsuite/InputGroup/styles/index.css";
import "rsuite/InputNumber/styles/index.css";
import "../../style/theme.less";

export default function Range() {
  const { colorMode } = useColorMode();
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");

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
        Range
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        style={{ width: 300 }}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <InputGroup
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        >
          <InputNumber
            autoComplete="off"
            spellCheck={false}
            value={startValue}
            onChange={(start) => {
              if (start)
                setStartValue(() => {
                  setEndValue((endValue) =>
                    endValue
                      ? Number(start) > Number(endValue)
                        ? Number(start).toString()
                        : endValue
                      : ""
                  );
                  return start.toString();
                });
            }}
            className={
              colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
            }
          />
          <InputGroup.Addon
            className={
              colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
            }
          >
            to
          </InputGroup.Addon>
          <InputNumber
            min={startValue ? Number(startValue) : undefined}
            autoComplete="off"
            spellCheck={false}
            value={endValue}
            onChange={(endValue) => {
              if (endValue) setEndValue(endValue.toString());
            }}
            className={
              colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
            }
          />
        </InputGroup>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
