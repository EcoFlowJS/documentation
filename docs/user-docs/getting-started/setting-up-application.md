# Setting up the Application

This steps show how to configure the application once you have successfully installed the application.

:::info[NOTE]
If you have launched the application is the Authenticated Environment you may skip the steps on this page.
This Step will only works for the Secure Environment.

To start the application in the Secure Environment use:

```bash
ecoflow --auth
```

:::

## Begin Setup

### Welcome to EcoFlowJS

The welcome screen and basic Terms and Conditions.

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/setup-welcome.png',
    dark: '/img/assets/setup-welcome-dark.png',
  }}
/>

Click on the `Accept and Continue` button to accept the terms and conditions and proceed to the next step.

### Project Types

There are three types of projects available.

- **Blank**: Create a blank project to house your files, plan your work, and collaborate on code, among other things.
- **Create from template**: Create a project pre-populated with the necessary files to get you started quickly.
- **Import project**: Migrate your data from an exported project file.

:::note
_`Create from template`_ is still under development and will available in a future release.
:::

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/setup-project-type.png',
    dark: '/img/assets/setup-project-type-dark.png',
  }}
/>

_Select your project type and click next to proceed to the further steps._

### User Creation or Import selections

If you have selected **Blank** for your project then proceed to the following steps for creation of a default admin user for the application

:::note
The default admin user is a `non-deleteable` user and also the default user for the `CLI admin commands`.
:::

#### User Creation

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/setup-user-creation.png',
    dark: '/img/assets/setup-user-creation-dark.png',
  }}
/>

_Fill up the default admin user details and click next to proceed to the further steps._

| Fields   | Description                       |
| -------- | --------------------------------- |
| Name     | Name of the user.                 |
| Username | Username for the user.            |
| Password | Password for the user             |
| Email    | **Optional:** Email for the user. |

#### Import selections

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/setup-import.png',
    dark: '/img/assets/setup-import-dark.png',
  }}
/>

_Select the exported zip file and click next for the final confirmation._

### Database Configuration

This database configuration is just for the application itself. By default the database is SQLite but can be changed by toggling the button

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/setup-DB-Selector.png',
    dark: '/img/assets/setup-DB-Selector-dark.png',
  }}
/>

#### _Supported Database Drivers:_

| Database   | Minimum | Recommended |
| ---------- | ------- | ----------- |
| MongoDB    | 5.0.27  | 7.0.11      |
| MySQL      | 5.7.8   | 8.0         |
| PostgreSQL | 11.0    | 14.0        |
| SQLite     | 3       | 3           |

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/setup-DB-options.png',
    dark: '/img/assets/setup-DB-options-dark.png',
  }}
/>

_Select your preferred database driver base and configurations accordingly._

Once configured click next for the final overview of your configuration and finish the setup process.

### Finalize

Finalize your configuration by checking the configuration details and confirming it by clicking the finish button.

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/setup-finish.png',
    dark: '/img/assets/setup-finish-dark.png',
  }}
/>

<br/><br/>

:::note
Once clicked the finish button wait for the application to configure with the provided details and for install the default packages.

Once the server is fully configured it will `restart` and redirect to the `sign in` page.
:::
