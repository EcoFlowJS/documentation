# DriverKnex

DriverKnex represents a class that implements the DriverKnex interface for interacting with a database using Knex.js.

## API Reference

:::tip
_Knex.js official guide can be found **[here](https://knexjs.org/guide/)**_
:::

### Create Connection

**createConnection(config)** ⇒ `Promise<void>`

Creates a database connection using the provided configuration.

**Return:** A promise that resolves once the connection is established.

**_Available arguments :_**

| Parameter | Type       | Description                                           |
| :-------- | :--------- | :---------------------------------------------------- |
| config    | `DBConfig` | The configuration object for the database connection. |

### SchemaBuilder

**schemaBuilder** ⇒ `Knex.SchemaBuilder`

Getter method that returns the Knex SchemaBuilder associated with the connection.

**Return:** The Knex SchemaBuilder object for the connection.

### QueryBuilder

**queryBuilder([tableName], [options])** ⇒ `Knex.QueryBuilder`

Builds a query using Knex for the specified table name and options.

**Return:** A Knex query builder object.

**_Available arguments :_**

| Parameter   | Type                                                  | Description                                      |
| :---------- | :---------------------------------------------------- | :----------------------------------------------- |
| [tableName] | `Knex.TableDescriptor \| Knex.AliasDict \| undefined` | The name of the table or an alias dictionary.    |
| [options]   | `object`                                              | Additional options for the query, such as 'only' |

### RawBuilder

**rawBuilder(value, [binding])** ⇒ `Knex.Raw<any>`

Builds a raw Knex query using the provided value and optional binding.

**Return:** A raw Knex query object.

**_Available arguments :_**

| Parameter | Type                                                                | Description                                                                  |
| :-------- | :------------------------------------------------------------------ | :--------------------------------------------------------------------------- |
| value     | `Knex.Value \| string`                                              | The value to be used in the raw query or string to be used in the raw query. |
| [binding] | `Knex.RawBinding \| (readonly Knex.RawBinding[] \| Knex.ValueDict)` | Optional binding for the raw query                                           |

### RefBuilder

**refBuilder(value)** ⇒ `Knex.Ref<string, { [x: string]: string }>`

Builds a reference to a column in a table using the provided value.

**Return:** A reference to a column in a table.

**_Available arguments :_**

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| value     | `string` | The value to build the reference with. |

### Column Info

**getColumnInfo(name)** ⇒ `Promise<any>`

Asynchronously retrieves column information for a given table name using the query builder.

**Return:** A promise that resolves with the column information.

**_Available arguments :_**

| Parameter | Type     | Description                                               |
| :-------- | :------- | :-------------------------------------------------------- |
| name      | `string` | The name of the table to retrieve column information for. |

### List Tables

**listTables()** ⇒ `Promise<string[]>`

Asynchronously lists tables based on the dialect of the database client.

**Return:** A Promise that resolves to an array of strings representing table names.

### Knex FunctionHelper

**functionHelper** ⇒ `Knex.FunctionHelper`

Get the Knex FunctionHelper from the connection object.

**Return:** The Knex FunctionHelper object.

### Fetch Client

**client** ⇒ `KnexDB_Driver`

Get the database client type based on the connection configuration.

**Return:** The database client type (MYSQL, PGSQL, SQLite).

### Instance of Knex

**knex** ⇒ `Knex`

Get the instance of Knex for performing database operations.

**Return:** The instance of Knex for database operations.

## TypeScript Properties

### `KnexDB_Driver`

```ts
/**
 * Defines a custom type for specifying the driver type for Knex database connections.
 * The driver can be one of the following: "MYSQL", "PGSQL", or "SQLite".
 */
type KnexDB_Driver = "MYSQL" | "PGSQL" | "SQLite";
```

### `DBConfig`

```ts
interface DBConfig extends Knex.Config {
  /** The type of database client to be used, can be "mysql", "pg", "sqlite3", or a custom client type. */
  client?: "mysql" | "pg" | "sqlite3" | typeof Client;
}
```

### `DatabaseTableTypes`

```ts
/**
 * Defines the possible types for a database table column.
 * It can be one of the following types: "string", "integer", "boolean", "json", "datetime".
 */
type DatabaseTableTypes =
  | "string"
  | "integer"
  | "boolean"
  | "json"
  | "datetime";
```

### `DatabaseTableAlias`

```ts
/**
 * Represents the possible types for a database table alias.
 * Can be one of: "Text", "Number", "Boolean", "Json", "Date".
 */
type DatabaseTableAlias = "Text" | "Number" | "Boolean" | "Json" | "Date";
```

### `DatabaseColumnInfo`

```ts
interface DatabaseColumnInfo {
  /** The name of the column. */
  name: string;

  /** The type of the column. */
  type: DatabaseTableTypes;

  /** The alias of the column. */
  alias: DatabaseTableAlias;

  /** Additional data related to the column. */
  actualData?: {
    /** The type of the column's actual data. */
    type?: DatabaseTableTypes;

    /** The data model for creating/editing the column. */
    columnData?: DatabaseCreateEditModel;
  };
}
```

### `DatabaseCreateEditModel`

```ts
interface DatabaseCreateEditModel {
  /** The name of the column in the database. */
  columnName: string;

  /** The text format of the column. */
  textFormat: "varchar" | "text" | null;

  /** The number format of the column. */
  numberFormat: "int" | "bigInt" | "dec" | "float" | null;

  /** The date and time format of the column. */
  dateTimeFormat: "date" | "time" | "datetime" | null;

  /** The default value for the column. */
  defaultValue: any;

  /** Indicates if the column value should not be not null. */
  notNull: boolean;
}
```
