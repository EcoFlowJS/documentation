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
        label: "Backup Restore",
      },
      {
        type: "doc",
        id: "user-docs/admin-panel/export-import",
        label: "Export Import",
      },
    ],
  },
];

export default userDocsSidebar;
