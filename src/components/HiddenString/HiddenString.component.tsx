import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { FlexboxGrid, Input, InputGroup } from "rsuite";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import "rsuite/FlexboxGrid/styles/index.css";
import "rsuite/Input/styles/index.css";
import "rsuite/InputGroup/styles/index.css";
import "../../style/theme.less";

export default function HiddenString() {
  const { colorMode } = useColorMode();
  const [visible, setVisible] = React.useState(false);
  const handleChange = () => {
    setVisible(!visible);
  };

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
        Hidden String
      </FlexboxGrid.Item>
      <FlexboxGrid.Item
        style={{ width: 300 }}
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <InputGroup
          inside
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        >
          <Input
            type={visible ? "text" : "password"}
            className={
              colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
            }
          />
          <InputGroup.Button
            onClick={handleChange}
            className={
              colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
            }
          >
            {visible ? <EyeIcon /> : <EyeSlashIcon />}
          </InputGroup.Button>
        </InputGroup>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
}
