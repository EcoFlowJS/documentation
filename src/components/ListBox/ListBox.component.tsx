import React, { useState, KeyboardEvent } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import {
  Divider,
  FlexboxGrid,
  IconButton,
  Input,
  InputGroup,
  List,
  Panel,
  Text,
} from "rsuite";
import "rsuite/Divider/styles/index.css";
import "rsuite/FlexboxGrid/styles/index.css";
import "rsuite/IconButton/styles/index.css";
import "rsuite/Input/styles/index.css";
import "rsuite/InputGroup/styles/index.css";
import "rsuite/List/styles/index.css";
import "rsuite/Panel/styles/index.css";
import "rsuite/Text/styles/index.css";
import "../../style/theme.less";
import IconWrapper from "../IconWrapper/IconWrapper";
import { FaXmark } from "react-icons/fa6";

export default function ListBox() {
  const { colorMode } = useColorMode();

  const [listBoxListInputValue, setParameterValue] = useState("");
  const [listBoxListValues, setListBoxLists] = useState<string[]>([]);

  const handleParameterAddition = () =>
    setListBoxLists((listBoxListValues) => {
      if (
        listBoxListValues.includes(listBoxListInputValue.trim()) ||
        /\s/g.test(listBoxListInputValue.trim()) ||
        listBoxListInputValue.trim().length === 0
      )
        return listBoxListValues;
      setParameterValue("");
      return [...listBoxListValues, listBoxListInputValue.trim()];
    });

  const handleParameterAdditionKeyDown = (
    event: KeyboardEvent<HTMLInputElement>
  ) => (event.key === "Enter" ? handleParameterAddition() : null);

  const handleParameterRemoval = (id: number) =>
    setListBoxLists((listBoxListValues) => {
      listBoxListValues.splice(id, 1);
      return [...listBoxListValues];
    });

  return (
    <Panel
      bordered
      header="ListBox"
      style={{ marginTop: 10 }}
      className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
    >
      <FlexboxGrid
        justify="center"
        align="middle"
        className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
      >
        <FlexboxGrid.Item
          colspan={24}
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        >
          <InputGroup
            className={
              colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
            }
          >
            <Input
              autoComplete="off"
              spellCheck={false}
              placeholder="ListBox"
              onChange={setParameterValue}
              value={listBoxListInputValue}
              onKeyDown={handleParameterAdditionKeyDown}
              className={
                colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
              }
            />
            <InputGroup.Button
              onClick={handleParameterAddition}
              className={
                colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
              }
            >
              Insert
            </InputGroup.Button>
          </InputGroup>
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          colspan={24}
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        >
          <Divider
            className={
              colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
            }
          />
        </FlexboxGrid.Item>
        <FlexboxGrid.Item
          colspan={22}
          className={colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"}
        >
          {listBoxListValues.length === 0 ? (
            <FlexboxGrid
              justify="center"
              className={
                colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
              }
            >
              <Text
                muted
                className={
                  colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
                }
              >
                No ListBox available
              </Text>
            </FlexboxGrid>
          ) : (
            <List
              bordered
              style={{
                overflow: "auto",
                maxHeight: 300,
                wordBreak: "break-word",
              }}
              className={
                colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
              }
            >
              {listBoxListValues.map((value, key) => (
                <List.Item
                  key={key}
                  index={key}
                  className={
                    colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
                  }
                >
                  <FlexboxGrid
                    justify="space-between"
                    align="middle"
                    className={
                      colorMode === "dark" ? "rs-theme-dark" : "rs-theme-light"
                    }
                  >
                    <FlexboxGrid.Item
                      colspan={20}
                      className={
                        colorMode === "dark"
                          ? "rs-theme-dark"
                          : "rs-theme-light"
                      }
                    >
                      {value}
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item
                      className={
                        colorMode === "dark"
                          ? "rs-theme-dark"
                          : "rs-theme-light"
                      }
                    >
                      <IconButton
                        appearance="subtle"
                        color="red"
                        icon={<IconWrapper icon={FaXmark} />}
                        onClick={() => handleParameterRemoval(key)}
                        className={
                          colorMode === "dark"
                            ? "rs-theme-dark"
                            : "rs-theme-light"
                        }
                      />
                    </FlexboxGrid.Item>
                  </FlexboxGrid>
                </List.Item>
              ))}
            </List>
          )}
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Panel>
  );
}
