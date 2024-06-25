# Database Table Structure

EcoflowJS allow you to design your own table structure in your application without worrying about schema changes and configuration.

:::tip[note]
Table structure is supported for **MYSQL**, **POSTGRESQL** and **SQLite**.
:::

## Create Table

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/DB-Dashboard-individual.png',
    dark: '/img/assets/DB-Dashboard-individual-dark.png',
  }}
/>

To create a new table follow the steps below:

1. From the Schema Editor Dashboard, **Click** the database connection you want to connect and configure.
2. Click on **Add Table** to create a new table.

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/DB-create-table.png',
    dark: '/img/assets/DB-create-table-dark.png',
  }}
/>

3. Enter the **Name** you desire. If you want copy structured of a table select the table.
4. Click on **Create** to create the table.

## Rename Table

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/DB-Dashboard-individual.png',
    dark: '/img/assets/DB-Dashboard-individual-dark.png',
  }}
/>

To rename a table follow the steps below:

1. From the Schema Editor Dashboard, **Click** the database connection you want to connect and configure.
2. Click on **Rename Table** to open rename modal.
3. Enter the **New Table Name** you want to set.
4. Click on **Confirm** to commit the changes.

## Drop Table

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/DB-Dashboard-individual.png',
    dark: '/img/assets/DB-Dashboard-individual-dark.png',
  }}
/>

To drop a table follow the steps below:

1. From the Schema Editor Dashboard, **Click** the database connection you want to connect and configure.
2. Click on **Drop Table** to open rename modal.
3. Enter the **Table Name** and click on **Confirm** to commit the changes.

## Manage table structure

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/DB-Dashboard-individual.png',
    dark: '/img/assets/DB-Dashboard-individual-dark.png',
  }}
/>

To manage a table follow the steps below:

1. From the Schema Editor Dashboard, **Click** the database connection you want to connect and configure.
2. Click on **Table** you want to manage the structure of.

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/DB-table-structure.png',
    dark: '/img/assets/DB-table-structure-dark.png',
  }}
/>

3. Click on **Database Structure** to manage the structure of the table.
4. Design your database structure.

_Supported structure data types_

| Data Type | Description                                   |
| --------- | --------------------------------------------- |
| TEXT      | Small or long text like string                |
| NUMBER    | Numbers (integer, decimal,floating point)     |
| BOOLEAN   | yes or no, true or false                      |
| DATE      | A date picker with hours, minutes and seconds |
| JSON      | Data in JSON format                           |

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/DB-table-structure-design.png',
    dark: '/img/assets/DB-table-structure-design-dark.png',
  }}
/>

5. Click on **Save** to commit the changes.

:::tip[notes]
All tables contains a default table structure **\_id** as **primary key** and **autoincrement**.
:::
