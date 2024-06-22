# Server Environments

EcoFLowJS provides users the benefits of setting up the environment variables from the admin panel and load all the environment variables automatically during runtime.

## Accessing the server environment panel

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/server-environment.png',
    dark: '/img/assets/server-environment-dark.png',
  }}
/>

To access the server environment panel:

1. Click on **Settings** on the left side panel of the main navigation of your EcoFLowJS application.
2. Click on **Environments** from the sub section.

### System Environments

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/system-env-variable.png',
    dark: '/img/assets/system-env-variable-dark.png',
  }}
/>

To access the system environments panel:

1. Access the server environment panel. For more information about how to access the server environment panel see [here](#accessing-the-server-environment-panel).
2. Click on **System Environments** on the left side panel of the system environments panel.

:::tip[NOTES]

- System Environments value can only be edited only.
- No new variables can be added or its name can't be modify.
  :::

### User Environments

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/user-env-variables.png',
    dark: '/img/assets/user-env-variables-dark.png',
  }}
/>

To access the user environments panel:

1. Access the server environment panel. For more information about how to access the server environment panel see [here](#accessing-the-server-environment-panel).
2. Click on **Users Environments** on the left side panel of the user environments panel.

### Create user environment variable

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/user-env-variables-panel.png',
    dark: '/img/assets/user-env-variables-panel-dark.png',
  }}
/>

To create or modify a user environment variable:

1. Access the server environment panel. For more information about how to access the server environment panel see [here](#accessing-the-server-environment-panel).
2. Click on **Users Environments** on the left side panel of the user environments panel.
3. Click on **New Env** to add new env.

:::note
You can add multiple env variables at once by clicking the **New Env** button.
:::

4. Click on the **save** button to save the state of the env variables.
5. Click on the **Commit** button to commit the changes of the env variables.

:::caution
Refresh the page or navigate to the other page without committing leads to lost state of the user environment.
:::
