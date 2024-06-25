# Database Connection

EcoFlowJS allows you to connect to multiple databases at the same time and use them individually in your APIs.

## Supported Drivers

| Database   | Minimum | Recommended |
| ---------- | ------- | ----------- |
| MongoDB    | 5.0.27  | 7.0.11      |
| MySQL      | 5.7.8   | 8.0         |
| PostgreSQL | 11.0    | 14.0        |
| SQLite     | 3       | 3           |

:::tip[note]
User can also use other drivers like **SUPABASE**, **FIREBASE**, etc. via installing packages to the application.
:::

:::caution[note]
We are currently working on the **SUPABASE** and **FIREBASE** packages and will be launch as soon as it is ready to be installed.
:::

## Create a new database connection.

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/DB-create-connection.png',
    dark: '/img/assets/DB-create-connection-dark.png',
  }}
/>

To create a new database connection:

1. Click the **New Connection** button.
2. Prove a **Name** for the database connection.
3. Select the database connection **Driver**.
4. Provides the database connection details.
5. Click the **Confirm** button to validate and save the connection.

:::info[note]
**Name** must be unique for each database connection.
:::

## Edit the database connection.

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/DB-edit-drop.png',
    dark: '/img/assets/DB-edit-drop-dark.png',
  }}
/>

To Edit a new database connection:

1. **Hover** on the database connection you want to edit.
2. To **Edit** the database connection click the **edit** button.
3. Select the database connection **Driver**.
4. Provides the database connection details.

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/DB-connection-edit.png',
    dark: '/img/assets/DB-connection-edit-dark.png',
  }}
/>

5. Click the **Confirm** button to validate and update the connection.

:::info[note]
**Name** of the database connection can't be changed or modified.
:::

## Drop the database connection.

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/DB-edit-drop.png',
    dark: '/img/assets/DB-edit-drop-dark.png',
  }}
/>

To Edit a new database connection:

1. **Hover** on the database connection you want to drop
2. To **Drop** the database connection click the **drop** button.
3. **Confirm** and wait for it to get removed.

To manage the database **Tables/Collection** and its its **Records**, see the documentation of **Tables/Collection** [here](./table-creations) and the documentation of **Records** [here](./db-records).
