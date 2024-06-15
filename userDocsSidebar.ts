import { SidebarConfig } from "@docusaurus/plugin-content-docs/src/sidebars/types.js";

const userDocsSidebar: SidebarConfig = [
  {
    type: "category",
    label: "Getting Started",
    items: [
      {
        type: "doc",
        id: "user-docs/getting-started/welcome",
        label: "Getting Started",
      },
      {
        type: "doc",
        id: "user-docs/getting-started/guide-fundamentals",
        label: "Fundamentals Guides",
      },
      {
        type: "doc",
        id: "user-docs/getting-started/setting-up-application",
        label: "Setting up application",
      },
      {
        type: "doc",
        id: "user-docs/getting-started/setting-up-the-admin-panel",
        label: "Setting up the admin panel",
      },
    ],
  },
];

export default userDocsSidebar;
