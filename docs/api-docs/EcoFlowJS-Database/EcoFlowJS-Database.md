# Database

Database is responsible for managing database connections and configurations.

## Drivers

- [`Knex`](./Drivers/KnexDriver)
- [`Mongoose`](./Drivers/MongooseDriver)

## API Reference

### Initializes connections

**initConnection()** ⇒ `Promise<void>`

Initializes the connection by setting up the system connection and adding saved configurations.

_Example Basic usage:_

```ts
const { database } = ecoflow;

await database.initConnection();
```

### Fetch Database Config

**getDatabaseConfig([ConnectionName])** ⇒ `Promise<DatabaseConnectionConfig[]>`

Retrieves the database configuration based on the provided connection name.
If no connection name is provided, returns all database connection configurations.

**Return:** A promise that resolves to an array of database connection configurations.

_Example Basic usage:_

```ts
const { database } = ecoflow;

const dbConfigs = await database.getDatabaseConfig();

console.log(dbConfigs);
```

**_Available arguments :_**

| Parameter        | Type     | Description                                                        |
| :--------------- | :------- | :----------------------------------------------------------------- |
| [ConnectionName] | `string` | The name of the database connection to retrieve configuration for. |

### Fetch Database Connection

**getDatabaseConnection(name)** ⇒ `any`

Retrieves a database connection by name.

**Return:** The database connection associated with the given name.

**_Available arguments :_**

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| name      | `string` | The name of the database connection to retrieve. |

### Validate Connection

**validateConnection(driver, connection)** ⇒ `Promise<boolean>`

Validates a database connection using the specified driver and connection configuration.

**Return:** A promise that resolves to true if the connection is successful, false otherwise.

**_Available arguments :_**

| Parameter  | Type               | Description                                    |
| :--------- | :----------------- | :--------------------------------------------- |
| driver     | `DB_Drivers`       | The database driver to use for the connection. |
| connection | `ConnectionConfig` | The configuration object for the connection.   |

### Add Database Connection

**addDatabaseConnection(name, driver, connection, [isSystem])** ⇒ `Promise<[boolean, string]>`

Asynchronously adds a database connection with the given parameters.

**Return:** A promise that resolves to a tuple containing a boolean status and a message string.

**_Available arguments :_**

| Parameter  | Type `(Default)`    | Description                                         |
| :--------- | :------------------ | :-------------------------------------------------- |
| name       | `string`            | The name of the database connection.                |
| driver     | `DB_Drivers`        | The driver for the database connection.             |
| connection | `ConnectionConfig`  | The configuration details for the connection.       |
| [isSystem] | `boolean` `(false)` | Indicates if the connection is a system connection. |

### Remove Database Connection

**removeDatabaseConnection(name)** ⇒ `Promise<[boolean, String]>`

Asynchronously removes a database connection with the given name.

**Return:** A promise that resolves to a tuple containing a boolean status and a message string.

**_Available arguments :_**

| Parameter | Type     | Description                                    |
| :-------- | :------- | :--------------------------------------------- |
| name      | `string` | The name of the database connection to remove. |

### Update Database Connection

**removeDatabaseConnection(name, driver, connection)** ⇒ `Promise<[boolean, String]>`

Updates the database connection with the given name, driver, and connection configuration.

**Return:** A promise that resolves to a tuple containing a boolean status and a message string.

**_Available arguments :_**

| Parameter  | Type               | Description                                    |
| :--------- | :----------------- | :--------------------------------------------- |
| name       | `string`           | The name of the database connection to update. |
| driver     | `DB_Drivers`       | The driver type of the database connection.    |
| connection | `ConnectionConfig` | The new connection configuration to update.    |

### Driver is Knex

**isKnex(connection)** ⇒ [`connection is DriverKnex`](./Drivers/KnexDriver)

Checks if the given connection is an instance of DriverKnex.

**Return:** True if the connection is an instance of DriverKnex, false otherwise.

**_Available arguments :_**

| Parameter  | Type  | Description              |
| :--------- | :---- | :----------------------- |
| connection | `any` | The connection to check. |

### Driver is Mongoose

**isMongoose(connection)** ⇒ [`connection is DriverMongoose`](./Drivers/MongooseDriver)

Checks if the given connection is an instance of DriverMongoose.

**Return:** True if the connection is an instance of DriverMongoose, false otherwise.

**_Available arguments :_**

| Parameter  | Type  | Description              |
| :--------- | :---- | :----------------------- |
| connection | `any` | The connection to check. |

### Connection Lists

**connectionList()** ⇒ `ConnectionList[]`

Returns a list of connections in the form of ConnectionList objects.

Filters out connections that start with an underscore.

**Return:** An array of ConnectionList objects containing connection name and driver information.

### Connection count

**counntConnections()** ⇒ `number`

Get the number of connections in the connection list.

**Return:** The number of connections in the connection list.

## Static Methods

### Format Knex DateTime

**formatKnexDateTime(dateTime)** ⇒ `string`

Formats a given Date object into a string in the format 'YYYY-MM-DD HH:mm:ss'.

**Return:** A formatted string representing the date and time.

**_Available arguments :_**

| Parameter | Type   | Description                |
| :-------- | :----- | :------------------------- |
| dateTime  | `Date` | The Date object to format. |

## TypeScript Properties

### `DatabaseConnection`

```ts
/**
 * Represents a database connection that can be either a DriverKnex or a DriverMongoose.
 */
type DatabaseConnection = DriverKnex | DriverMongoose;
```

### `DB_Drivers`

```ts
/**
 * Defines a custom type DB_Drivers which can be either KnexDB_Driver or "MONGO".
 */
type DB_Drivers = KnexDB_Driver | "MONGO";
```

### `ConnectionConfig`

```ts
interface ConnectionConfig {
  /** The connection string to connect to the database. */
  connectionString?: string;

  /** The host of the database server. */
  host?: string;

  /** The port number of the database server. */
  port?: number;

  /** The username for authentication. */
  user?: string;

  /** The password for authentication. */
  password?: string;

  /** The name of the database to connect to. */
  database?: string;

  /** Whether to use SSL for the connection. */
  ssl?: boolean;

  /** The filename of the database for SQLite */
  filename?: string;

  /** */
  flags?: Array<any>;

  /** Mongoose connection options */
  mongooseOptions?: MongooseOptions;
}
```

### `DatabaseConnectionConfig`

```ts
interface DatabaseConnectionConfig {
  /** The name of the database connection. */
  name: string;

  /** The driver to use for the connection. */
  driver?: DB_Drivers;

  /** The configuration for the connections. */
  connections?: ConnectionConfig;
}
```

### `ConnectionList`

```ts
interface ConnectionList {
  /** The name of the connection. */
  connectionsName: string;

  /** The driver used for the connection. */
  driver: DB_Drivers;
}
```
