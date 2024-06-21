# Role and Permissions

EcoFlowJS allows the **admin users** to set limits based on the role and and permissions corresponding to the role.

:::tip[NOTES]

- By default EcoFlowJS provides **`Admin`** role with all permissions.

- We recommend you to create custom role/roles for your users.
  :::

## Accessing role and permissions

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/role-permission.png',
    dark: '/img/assets/role-permission-dark.png',
  }}
/>

To access the role and permissions:

1. Click on **Advanced** on the left side panel of the main navigation of your EcoFLowJS application.
2. Click on **Roles** from the sub section.

### Creating a role

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/role-create-permission.png',
    dark: '/img/assets/role-create-permission-dark.png',
  }}
/>

To create a new role:

1. Access the Role and Permissions. For more information about how to access the role and permissions see [here](#accessing-role-and-permissions).
2. Click on **New Role** to create a new role.
3. Fill up the role details:

| Fields             | Descriptions                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| Name               | Name of the role you desire to set.                                                                            |
| With permission of | Permission to copy from a specific role. <br /> 💡If you want to copy permission of some role just specify it. |

### Role Modifications

1. Access the Role and Permissions. For more information about how to access the role and permissions see [here](#accessing-role-and-permissions).
2. Click on **`Role Name`** you want to modify.
3. Set the permission you want to assign for the role just by clicking the toggle button on the right side of the permission panel.
4. Click on the **Save** button to save the permission for the role.

:::note
If you want to revert back to the state before modification just click on the **Reset** button.
:::

### Role Deletions

1. Access the Role and Permissions. For more information about how to access the role and permissions see [here](#accessing-role-and-permissions).
2. Click on **`Role Name`** you want to modify.
3. Scroll down to the bottom of the permission panel.
4. Click on the **Delete** button to remove the role.

:::caution
Removing a role will also remove users thats comes under the role and users roles will also be updated accordingly.
:::
