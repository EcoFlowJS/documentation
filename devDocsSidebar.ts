import { SidebarConfig } from "@docusaurus/plugin-content-docs/src/sidebars/types.js";

const devDocsSidebar: SidebarConfig = [
  {
    type: "doc",
    id: "dev-docs/getting-started",
    label: "Getting Started",
    customProps: {
      icon: "entypo:rocket",
    },
  },
  {
    type: "doc",
    id: "dev-docs/cli",
    label: "Command-line Usage",
    customProps: {
      icon: "clarity:terminal-solid",
    },
  },
  {
    type: "doc",
    id: "dev-docs/upgrade",
    label: "Upgrading EcoFlowJS",
    customProps: {
      icon: "eos-icons:package-upgrade",
    },
  },
  {
    type: "doc",
    id: "dev-docs/cloning",
    label: "Clone Project",
    customProps: {
      icon: "fluent-mdl2:clone-to-desktop",
    },
  },
  {
    type: "category",
    collapsed: false,
    label: "API Reference",
    description: "API Reference",
    customProps: {
      icon: "icon-park-outline:api",
    },
    link: {
      type: "generated-index",
      description: "API Reference",
    },
    items: [
      {
        type: "autogenerated",
        dirName: "dev-docs/api-docs",
      },
    ],
  },
  {
    type: "category",
    collapsed: false,
    label: "Creating Nodes",
    customProps: {
      icon: "gravity-ui:nodes-left",
    },
    link: {
      type: "doc",
      id: "dev-docs/creating-nodes/creating-nodes",
    },
    items: [
      "dev-docs/creating-nodes/creating-your-first-node",
      "dev-docs/creating-nodes/node-manifest",
      "dev-docs/creating-nodes/input-types",
      "dev-docs/creating-nodes/controllers",
      "dev-docs/creating-nodes/Packaging",
    ],
  },
  {
    type: "category",
    collapsed: false,
    label: "Contributing",
    customProps: {
      icon: "mynaui:user-octagon",
    },
    link: {
      type: "doc",
      id: "dev-docs/contributing/contributing",
    },
    items: ["dev-docs/contributing/guide"],
  },
  {
    type: "doc",
    id: "dev-docs/support",
    label: "Support",
    customProps: {
      icon: "mdi:support",
    },
  },
  {
    type: "doc",
    id: "dev-docs/Feedback",
    label: "Feedback",
    customProps: {
      icon: "codicon:feedback",
    },
  },
  {
    type: "doc",
    id: "dev-docs/SECURITY",
    label: "Security Policy",
    customProps: {
      icon: "material-symbols:security-rounded",
    },
  },
  {
    type: "doc",
    id: "dev-docs/License",
    label: "License",
    customProps: {
      icon: "tabler:license",
    },
  },
  {
    type: "doc",
    id: "dev-docs/authors",
    label: "Authors",
    customProps: {
      icon: "oui:user",
    },
  },
];

export default devDocsSidebar;
