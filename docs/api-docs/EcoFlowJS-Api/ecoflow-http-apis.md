---
sidebar_position: 1
---

# EcoFlowJS HTTP API

## Response Types

The response type is a object with the following properties:

```ts
interface ApiResponse {
  /**
   * Flag indicating the presence of an error.
   */
  error?: boolean;

  /**
   * Flag indicating the success status.
   */
  success?: boolean;

  /**
   * Response payload data for the response.
   */
  payload?: any;
}
```

## Endpoints

**_Available Endpoints :_**

| Method | Endpoints            | Description                        |
| :----- | :------------------- | :--------------------------------- |
| `POST` | `/directoriesStatus` | Fetch directory and sub-directory. |

## Initialize Endpoints

**_Available Endpoints :_**

| Method | Endpoints      | Description                                |
| :----- | :------------- | :----------------------------------------- |
| `GET`  | `/init/status` | Initializes the status of the application. |

## Authentication Endpoints

**_Available Endpoints :_**

| Method   | Endpoints                | Description                           |
| :------- | :----------------------- | :------------------------------------ |
| `GET`    | `/users/isAuthenticated` | Checks if a user is authenticated.    |
| `PATCH`  | `/users/refreshToken`    | Refreshing user authentication token. |
| `POST`   | `/users/login`           | User login authentication.            |
| `DELETE` | `/users/logout`          | Logging out a user.                   |

## Admin Endpoints

**_Available Endpoints :_**

### Configuration Endpoints

| Method | Endpoints                 | Description                                              |
| :----- | :------------------------ | :------------------------------------------------------- |
| `GET`  | `/admin/config`           | Retrieve configurations.                                 |
| `GET`  | `/admin/config/:configID` | Retrieve a specific configuration based on the configID. |
| `PUT`  | `/admin/config`           | Updates the configuration settings.                      |

### Environment Endpoints

| Method | Endpoints                             | Description                                                                    |
| :----- | :------------------------------------ | :----------------------------------------------------------------------------- |
| `GET`  | `/admin/environment/envs`             | Retrieve environment information.                                              |
| `GET`  | `/admin/environment/env/:envID`       | retrieve environment details based on the environment Name as ID.              |
| `GET`  | `/admin/environment/userEnvs`         | Retrieve user environments.                                                    |
| `GET`  | `/admin/environment/userEnv/:envID`   | Retrieve a user environment based on the environment Name as ID.               |
| `GET`  | `/admin/environment/systemEnvs`       | Retrieve system environment variables.                                         |
| `GET`  | `/admin/environment/systemEnv/:envID` | retrieving system environment information based on the environment Name as ID. |
| `POST` | `/admin/environment/envs`             | Committing new environments.                                                   |

### User Endpoints

| Method  | Endpoints                          | Description                                                        |
| :------ | :--------------------------------- | :----------------------------------------------------------------- |
| `GET`   | `/admin/users/usernames`           | Retrieving usernames of all users.                                 |
| `GET`   | `/admin/users/usernames/:isSystem` | Retrieve usernames based on whether they are system users or not.. |
| `GET`   | `/admin/users/:userID`             | Retrieving details of a specific user.                             |
| `POST`  | `/admin/users`                     | The endpoint for creating a new user.                              |
| `PATCH` | `/admin/users/:userID`             | Updating a user with a specific userID.                            |
| `PATCH` | `/admin/users/:userID/ToggleUser`  | Toggles the user enable/disable for the specified user ID.         |

## Schema Editor Endpoints

**_Available Endpoints :_**

### Connection Endpoints

| Method   | Endpoints                            | Description                                                |
| :------- | :----------------------------------- | :--------------------------------------------------------- |
| `GET`    | `/schema/connections`                | Retrieves the list of available connections.               |
| `POST`   | `/schema/connection`                 | Creating a new connection.                                 |
| `PATCH`  | `/schema/connection`                 | The endpoint for updating a connection.                    |
| `DELETE` | `/schema/connection/:ConnectionName` | Delete a connection based on the ConnectionName parameter. |

### Connection Configuration Endpoints

| Method | Endpoints                      | Description                                                |
| :----- | :----------------------------- | :--------------------------------------------------------- |
| `GET`  | `/schema/connectionConfigs`    | Retrieves the list of available connection configurations. |
| `GET`  | `/schema/connectionConfig/:id` | Retrieves the connection configuration by ID.              |

### Connection Collection Endpoints

| Method   | Endpoints                                                            | Description                                                                            |
| :------- | :------------------------------------------------------------------- | :------------------------------------------------------------------------------------- |
| `GET`    | `/schema/collectionsORtables/:connectionName`                        | Retrieves the collections or tables for a specific connection.                         |
| `POST`   | `/schema/collectionsORtables/:connectionName`                        | Creating collections or tables for a given connection.                                 |
| `PATCH`  | `/schema/collectionsORtables/:connectionName`                        | Renaming collections or tables for a specific connection.                              |
| `DELETE` | `/schema/collectionsORtables/:connectionName/:collectionOrTableName` | Deleting a collection or table based on the connection name and collection/table name. |

### Connection Collection Table Endpoints

| Method | Endpoints                                                    | Description                                                             |
| :----- | :----------------------------------------------------------- | :---------------------------------------------------------------------- |
| `GET`  | `/schema/tableColumn/:connectionName/:collectionORtableName` | Retrieving information about the columns of a table in a database.      |
| `POST` | `/schema/tableColumn/:connectionName/:collectionORtableName` | Saving table columns to a specific collection or table in the database. |

### Connection Collection Data Endpoints

| Method   | Endpoints                                                                    | Description                                                            |
| :------- | :--------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| `GET`    | `/schema/DatabaseData/:connectionName/:collectionORtableName`                | Retrieving data from a specific database collection or table.          |
| `POST`   | `/schema/DatabaseData/:connectionName/:collectionORtableName/insert`         | Inserting data into a specific collection/table in the database.       |
| `PATCH`  | `/schema/DatabaseData/:connectionName/:collectionORtableName/update`         | Updating database data for a specific connection and collection/table. |
| `DELETE` | `/schema/DatabaseData/:connectionName/:collectionORtableName/delete/:dataID` | Deleting data from a specific collection or table in the database.     |

## Server Endpoints

**_Available Endpoints :_**

| Method | Endpoints          | Description                                                                                        |
| :----- | :----------------- | :------------------------------------------------------------------------------------------------- |
| `GET`  | `/server/isOnline` | Checking if the server is online.                                                                  |
| `POST` | `/server`          | Handles the server close and restart functionality based on the mode provided in the request body. |

## Setup Endpoints

**_Available Endpoints :_**

### Black Setup Endpoints

| Method | Endpoints                 | Description                                                                                                                                    |
| :----- | :------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| `POST` | `/setup/blank/validateDB` | Checking if the database connection is valid.                                                                                                  |
| `POST` | `/setup/blank`            | Processes the setup for a blank context by creating user credentials, updating database configuration, and restarting the server if necessary. |

### Import Setup Endpoints

| Method | Endpoints       | Description                                                                    |
| :----- | :-------------- | :----------------------------------------------------------------------------- |
| `POST` | `/setup/import` | Upload the import configuration zip and processes the setup of the application |

## Role Endpoints

**_Available Endpoints :_**

| Method   | Endpoints   | Description                       |
| :------- | :---------- | :-------------------------------- |
| `GET`    | `/role`     | Fetches all roles.                |
| `GET`    | `/role/:id` | Fetches role for the ID provided. |
| `POST`   | `/role`     | Creating a new role.              |
| `PATCH`  | `/role`     | Updating a role.                  |
| `DELETE` | `/role/:id` | Remove a role by its ID.          |

## Users Endpoints

**_Available Endpoints :_**

| Method  | Endpoints | Description                  |
| :------ | :-------- | :--------------------------- |
| `GET`   | `/users`  | Retrieves users information. |
| `PATCH` | `/users`  | Updating user information.   |

## Users Permissions Endpoints

| Method | Endpoints                  | Description                                      |
| :----- | :------------------------- | :----------------------------------------------- |
| `GET`  | `/users/permissions`       | Retrieve user permissions.                       |
| `GET`  | `/users/permissions/:mode` | Fetches permissions based on the mode specified. |

## Users Roles Endpoints

| Method | Endpoints      | Description                                                   |
| :----- | :------------- | :------------------------------------------------------------ |
| `GET`  | `/users/roles` | Retrieves user roles and fetches role names for each role ID. |

## Module Package Endpoints

**_Available Endpoints :_**

| Method   | Endpoints                              | Description                                                                       |
| :------- | :------------------------------------- | :-------------------------------------------------------------------------------- |
| `GET`    | `/module`                              | Fetching all modules.                                                             |
| `GET`    | `/module/id/:moduleID`                 | Fetching a module based on the provided module ID.                                |
| `GET`    | `/module/installPackages`              | Fetching the list of installed modules                                            |
| `GET`    | `/module/installPackages/id/:name`     | Fetches the description of an installed module based on the provided module name. |
| `GET`    | `/module/searchPackagesCounts`         | Fetches the count of available search packages.                                   |
| `GET`    | `/module/searchPackages/:packageName`  | Searching packages in the npm repository by package name.                         |
| `POST`   | `/module/installPackages`              | Installing packages in the application.                                           |
| `POST`   | `/module/installPackages/import`       | Importing packages and installing packages in the application.                    |
| `PATCH`  | `/module/installPackages`              | Upgrades or downgrades a package based on the provided package name and version.  |
| `DELETE` | `/module/installPackages/:packageName` | Removes a package from the application based on the provided package name.        |

### Module Nodes Endpoints

| Method | Endpoints                  | Description                                   |
| :----- | :------------------------- | :-------------------------------------------- |
| `GET`  | `/module/nodes`            | Retrieves all nodes data.                     |
| `GET`  | `/module/nodes/id/:nodeId` | Retrieves nodes data based on the ID provided |

## Flow Editor Endpoints

**_Available Endpoints :_**

| Method | Endpoints             | Description                                                                 |
| :----- | :-------------------- | :-------------------------------------------------------------------------- |
| `GET`  | `/flows`              | Retrieves all the flows description.                                        |
| `GET`  | `/flows/id/:flowName` | Retrieves the flows description for a given flow name from the flow editor. |
| `GET`  | `/flows/settings`     | Retrieves the settings of the flow editor.                                  |
| `POST` | `/flows/settings`     | Updating the settings of the flow editor.                                   |
| `POST` | `/flows/deploy`       | Deploys the flow configuration of the flow editor.                          |

## Dashboard Endpoints

**_Available Endpoints :_**

| Method | Endpoints           | Description                                           |
| :----- | :------------------ | :---------------------------------------------------- |
| `GET`  | `/dashboard/status` | Retrieves the information to display on the dashboard |

## Backup Restore Endpoints

**_Available Endpoints :_**

| Method   | Endpoints                         | Description                                                         |
| :------- | :-------------------------------- | :------------------------------------------------------------------ |
| `GET`    | `/backupRestore`                  | Fetch the information for backup.                                   |
| `GET`    | `/backupRestore/backup`           | Fetch the backed file names that are saved of the server directory. |
| `POST`   | `/backupRestore/backup`           | Generate backup file, save on the server directory and download it. |
| `POST`   | `/backupRestore/restore`          | Upload a zip containing backed details and restore accordingly.     |
| `DELETE` | `/backupRestore/backup/:fileName` | Delete a backed file that is saved on the server directory.         |

## Export Endpoints

**_Available Endpoints :_**

| Method | Endpoints  | Description                                                                       |
| :----- | :--------- | :-------------------------------------------------------------------------------- |
| `GET`  | `/exports` | Exports the project with all information like: `configurationsENV variables, etc` |

## Audit Logs Endpoints

**_Available Endpoints :_**

| Method | Endpoints          | Description                                  |
| :----- | :----------------- | :------------------------------------------- |
| `GET`  | `/auditLogs`       | Fetches audit logs for the 1st page.         |
| `GET`  | `/auditLogs/:page` | Fetches audit logs based on the page number. |
