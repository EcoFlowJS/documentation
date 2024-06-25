import { SidebarConfig } from "@docusaurus/plugin-content-docs/src/sidebars/types.js";

const userDocsSidebar: SidebarConfig = [
  {
    type: "category",
    label: "Getting Started",
    collapsed: false,
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
    ],
  },
  {
    type: "category",
    label: "Admin Panel",
    collapsed: false,
    items: [
      {
        type: "doc",
        id: "user-docs/admin-panel/accessing-admin-panel",
        label: "Accessing admin panel",
      },
      {
        type: "doc",
        id: "user-docs/admin-panel/dashboard",
        label: "Dashboard",
      },
      {
        type: "doc",
        id: "user-docs/admin-panel/user-profile",
        label: "User Profile",
      },
      {
        type: "doc",
        id: "user-docs/admin-panel/packages-management",
        label: "Package Management",
      },
      {
        type: "doc",
        id: "user-docs/admin-panel/role-permissions",
        label: "Role Permissions",
      },
      {
        type: "doc",
        id: "user-docs/admin-panel/user-management",
        label: "User Management",
      },
      {
        type: "doc",
        id: "user-docs/admin-panel/server-configuration",
        label: "Server configuration",
      },
      {
        type: "doc",
        id: "user-docs/admin-panel/server-environment",
        label: "Server Environment",
      },
      {
        type: "doc",
        id: "user-docs/admin-panel/backup-restore",
        label: "Backup and Restore",
      },
      {
        type: "doc",
        id: "user-docs/admin-panel/export-import",
        label: "Export Import Project",
      },
    ],
  },
  {
    type: "category",
    label: "Schema Editor",
    collapsed: false,
    items: [
      {
        type: "doc",
        id: "user-docs/schema-editor/accessing-schema-editor",
        label: "Accessing schema editor",
      },
      {
        type: "doc",
        id: "user-docs/schema-editor/dashboard",
        label: "Dashboard",
      },
      {
        type: "doc",
        id: "user-docs/schema-editor/db-connections",
        label: "Database connections",
      },
      {
        type: "doc",
        id: "user-docs/schema-editor/table-creations",
        label: "Database Table Structure",
      },
      {
        type: "doc",
        id: "user-docs/schema-editor/db-records",
        label: "Database Records",
      },
    ],
  },
  {
    type: "category",
    label: "Flow Editor",
    collapsed: false,
    items: [
      {
        type: "doc",
        id: "user-docs/flow-editor/accessing-flow-editor",
        label: "Accessing flow editor",
      },
      {
        type: "doc",
        id: "user-docs/flow-editor/editor-settings",
        label: "Editor settings",
      },
      {
        type: "doc",
        id: "user-docs/flow-editor/nodes-and-configurations",
        label: "Nodes and Configurations",
      },
      {
        type: "doc",
        id: "user-docs/flow-editor/flow-and-deploy",
        label: "Flow and Deployment",
      },
    ],
  },
];

export default userDocsSidebar;
