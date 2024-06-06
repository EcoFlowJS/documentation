import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "EcoFlowJS",
  tagline: "Build your RestFul-APIs with the minimal code possible!",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: process.env.SITE_URL || "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "EcoFlowJS", // Usually your GitHub org/user name.
  projectName: "eco-flow", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          exclude: ["./docs/references/*"],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "EcoFlowJS",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "EcoFlowJSDocs",
          position: "left",
          label: "Documentation",
        },
        { to: "/docs/api-docs", label: "API Reference", position: "left" },
        {
          href: "https://github.com/EcoFlowJS/eco-flow",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          label: "Slack",
          href: "https://join.slack.com/t/ecoflowjs/shared_invite/zt-2jpm9657q-dmugTuLg_udxo9jTtnwZjA",
        },
        {
          label: "Discord",
          href: "https://discord.gg/arvbpxDUHb",
        },
        {
          label: "GitHub",
          href: "https://github.com/EcoFlowJS/eco-flow",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EcoFLowJS, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.oneDark,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
