import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useColorMode } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import { Button, Heading, Stack, Text } from "rsuite";
import "rsuite/Button/styles/index.css";
import "rsuite/Heading/styles/index.css";
import "rsuite/Stack/styles/index.css";
import "rsuite/Text/styles/index.css";
import "./style.less";
import IconWrapper from "../components/IconWrapper/IconWrapper";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";

function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  const { colorMode } = useColorMode();
  return (
    <Stack
      className="wrapper-body"
      justifyContent="center"
      direction="column"
      spacing={30}
    >
      <Stack.Item>
        <Stack justifyContent="center" direction="column" spacing={15}>
          <Stack.Item>
            <Heading level={1}>{`${siteConfig.title}'s Documentation`}</Heading>
          </Stack.Item>
          <Stack.Item>
            <Text muted>
              Install and start building RESTful APIs in a minute.
            </Text>
          </Stack.Item>
        </Stack>
      </Stack.Item>

      <Stack.Item>
        <Stack spacing={30}>
          <Stack.Item>
            <Link to="/dev-docs/get-started">
              <Button
                appearance="primary"
                color="cyan"
                size="lg"
                style={{
                  minWidth: 150,
                  backgroundColor: colorMode === "dark" ? "#FEFEF9" : "#292929",
                  color: colorMode === "light" ? "#FEFEF9" : "#292929",
                  fontSize: "1rem",
                }}
                startIcon={
                  <div
                    style={{
                      color: colorMode === "light" ? "#FEFEF9" : "#E05554",
                      fontSize: "1rem",
                    }}
                  >
                    <IconWrapper icon={HiMiniRocketLaunch} />
                  </div>
                }
              >
                Get Started
              </Button>
            </Link>
          </Stack.Item>
          <Stack.Item>
            <Link to="https://github.com/EcoFlowJS/eco-flow" target="_blank">
              <Button
                appearance="primary"
                size="lg"
                style={{
                  minWidth: 150,
                  backgroundColor:
                    colorMode === "light" ? "#120E0F" : "#FFFFFF",
                  color: colorMode === "dark" ? "#120E0F" : "#FFFFFF",
                  fontSize: "1rem",
                }}
                startIcon={
                  <div style={{ fontSize: "1rem" }}>
                    <IconWrapper icon={SiGithub} />
                  </div>
                }
              >
                Github
              </Button>
            </Link>
          </Stack.Item>
        </Stack>
      </Stack.Item>
    </Stack>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <Homepage />
    </Layout>
  );
}
