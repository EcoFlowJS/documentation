import { Editor } from "@monaco-editor/react";
import React from "react";
import { FlexboxGrid, Heading, Panel } from "rsuite";
import { useColorMode } from "@docusaurus/theme-common";
import "rsuite/FlexboxGrid/styles/index.css";
import "rsuite/Heading/styles/index.css";
import "rsuite/Panel/styles/index.css";
import "../../style/theme.less";

export default function Code() {
  const { colorMode } = useColorMode();
  return (
    <FlexboxGrid
      align="middle"
      className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
    >
      <FlexboxGrid.Item
        colspan={24}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <Heading
          style={{ padding: "5px 10px" }}
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        >
          Code
        </Heading>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        colspan={24}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <Panel
          bodyFill
          bordered
          style={{
            backgroundColor: "#1e1e1e",
            padding: "10px 0",
            overflow: "visible",
          }}
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        >
          <Editor
            options={{
              showUnused: true,
              minimap: { enabled: false },
              fontSize: 16,
            }}
            wrapperProps={{ fontSize: 20 }}
            height={200}
            language="json"
            theme="vs-dark"
            defaultValue="{}"
          />
        </Panel>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
