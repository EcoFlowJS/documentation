# SchemaEditor

SchemaEditorService a service class that methods for managing schema editing operations on a database using either Knex or Mongoose.## Usage

_Example Basic usage:_

```ts
const { database, service } = ecoFlow;
const { SchemaEditorService } = service;

const schemaService = new SchemaEditorService(
  database.getDatabaseConnection("ecoflow")
);
```

## API Reference

### Create Collections

**createCollectionsORTable(tableCollectionName, [tableLike])** ⇒ `Promise<CreateCollectionsORTableResult>`

Creates a new collection or table in the database based on the type of connection.

**Return:** An object containing the list of collections/tables and the name of the current collection/table.

**_Available arguments :_**

| Parameter           | Type     | Description                                     |
| :------------------ | :------- | :---------------------------------------------- |
| tableCollectionName | `string` | The name of the collection or table to create.  |
| [tableLike]         | `string` | The name of the table to base the new table on. |

### Rename Collections

**renameCollectionsORTable(collectionTableOldName, collectionTableNewName)** ⇒ `Promise<RenameCollectionsORTableResult>`

Renames a collection or table in the database.

**Return:** An object containing the new collection/table name and the list of collections/tables after the rename operation.

**_Available arguments :_**

| Parameter              | Type     | Description                                  |
| :--------------------- | :------- | :------------------------------------------- |
| collectionTableOldName | `string` | The current name of the collection or table. |
| collectionTableNewName | `string` | The new name for the collection or table.    |

### Drop Collections

**deleteCollectionsORTable(collectionTable)** ⇒ `Promise<DeleteCollectionsORTableResult>`

Deletes a collection or table from the database based on the connection type.

**Return:** An object containing the list of remaining collections or tables after deletion.

**_Available arguments :_**

| Parameter       | Type     | Description                                    |
| :-------------- | :------- | :--------------------------------------------- |
| collectionTable | `string` | The name of the collection or table to delete. |

### Fetch Collections

**getCollectionOrTable()** ⇒ `Promise<CollectionOrTableResult>`

Retrieves the collection or table information based on the type of database connection.

**Return:** A promise that resolves to an object containing the type of database connection ("KNEX" or "MONGO") and the list of collections or tables.

### Commit Table Column

**commitSaveTableColumn(tableName, columnData)** ⇒ `Promise<CommitSaveTableColumnResult>`

Asynchronously commits the changes to save table columns in the database.

**Return:** A promise that resolves with the result of the commit operation.

**_Available arguments :_**

| Parameter  | Type                 | Description                                                                        |
| :--------- | :------------------- | :--------------------------------------------------------------------------------- |
| tableName  | `string`             | The name of the table in the database.                                             |
| columnData | `DatabaseColumnData` | The data containing information about columns to be modified, created, or deleted. |

### Fetch Table ColumnInfo

**getTableColumnInfo(columnName)** ⇒ `Promise<TableColumnInfoResult>`

Retrieves information about the columns in a specified database table.

**Return:** A promise that resolves to an object containing information about the columns in the table.

**_Available arguments :_**

| Parameter | Type     | Description                                                 |
| :-------- | :------- | :---------------------------------------------------------- |
| tableName | `string` | The name of the database table to retrieve information for. |

### Insert Database Data

**insertDatabaseData(collectionORtableName, insertData)** ⇒ `Promise<DatabaseDataResult>`

Inserts data into a database collection or table based on the type of database connection.

**Return:** A promise that resolves to a DatabaseDataResult object.

**_Available arguments :_**

| Parameter             | Type     | Description                                              |
| :-------------------- | :------- | :------------------------------------------------------- |
| collectionORtableName | `string` | The name of the collection or table to insert data into. |
| insertData            | `object` | The data to be inserted into the database.               |

### Update Database Data

**updateDatabaseData(collectionORtableName, oldData, newData)** ⇒ `Promise<DatabaseDataResult>`

Updates the database data for a given collection or table with new data.

**Return:** An object containing the updated columns and data.

**_Available arguments :_**

| Parameter             | Type     | Description                                          |
| :-------------------- | :------- | :--------------------------------------------------- |
| collectionORtableName | `string` | The name of the collection or table in the database. |
| oldData               | `object` | The old data to be updated.                          |
| newData               | `object` | The new data to update with.                         |

### Fetch Database Data

**getDatabaseData(collectionORtableName)** ⇒ `Promise<DatabaseDataResult>`

Retrieves database data based on the provided collection or table name.

**Return:** A promise that resolves to an object containing the retrieved data.

**_Available arguments :_**

| Parameter             | Type     | Description                                                |
| :-------------------- | :------- | :--------------------------------------------------------- |
| collectionORtableName | `string` | The name of the collection or table to retrieve data from. |

### Delete Database Data

**deleteDatabaseData(collectionORtableName, dataID)** ⇒ `Promise<DatabaseDataResult>`

Deletes data from a database collection or table based on the provided data ID.

**Return:** A promise that resolves to a DatabaseDataResult object containing the result of the deletion operation.

**_Available arguments :_**

| Parameter             | Type     | Description                                                          |
| :-------------------- | :------- | :------------------------------------------------------------------- |
| collectionORtableName | `string` | The name of the collection or table from which data will be deleted. |
| dataID                | `string` | The ID of the data to be deleted.                                    |

## TypeScript Properties

### `CollectionsORtables`

```ts
interface CollectionsORtables {
  /** An array of strings representing collections or tables. */
  collectionsORtables: string[];
}
```

### `CreateCollectionsORTableResult`

```ts
interface CreateCollectionsORTableResult extends CollectionsORtables {
  /** The name of the current collection or table. */
  currentCollectionTableName: string;
}
```

### `CollectionOrTableResult`

```ts
interface CollectionOrTableResult extends CollectionsORtables {
  /** The type of database operation, either "MONGO" or "KNEX". */
  type: "MONGO" | "KNEX";
}
```

### `DatabaseDataResult`

```ts
interface DatabaseDataResult {
  /** An array of column information. */
  columns?: DatabaseColumnInfo[];

  /** The number of modified records. */
  modifiedCount?: number;

  /** The data returned from the database operation. */
  data: any;
}
```

### `DeleteCollectionsORTableResult`

```ts
/**
 * Interface that extends the CollectionsORtables interface to represent the result of deleting collections or tables.
 */
type DeleteCollectionsORTableResult = CollectionsORtables;
```

### `DeleteCollectionsORTableResult`

```ts
interface RenameCollectionsORTableResult extends CollectionsORtables {
  /** The new name of the collection or table after renaming. */
  newCollectionTableName: string;
}
```

### `CommitSaveTableColumnResult`

```ts
interface CommitSaveTableColumnResult extends TableColumnInfoResult {
  /** Object containing status information. */
  status: {
    /** The number of failed commits. */
    failedCount: number;

    /** The number of successful commits. */
    successCount: number;

    /** Indicates if any exceptions occurred during commit. */
    excepted: boolean;
  };
}
```

### `TableColumnInfoResult`

```ts
interface TableColumnInfoResult {
  /** The column information. */
  columnInfo: DatabaseColumnInfo[];
}
```

### `DatabaseColumnData`

```ts
interface DatabaseColumnData {
  /** Array of columns to be deleted. */
  deleteDatabaseColumns: DatabaseColumnInfo[];

  /** Array of objects containing old and new columns to be modified. */
  modifyDatabaseColumns: {
    /** Array of objects containing old columns to be modified. */
    oldDatabaseColumns: DatabaseColumnInfo;

    /** Array of objects containing new columns to be modified. */
    newDatabaseColumns: DatabaseColumnInfo;
  }[];

  /** Array of columns to be created. */
  createDatabaseColumns: DatabaseColumnInfo[];
}
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

### `DatabaseColumnInfo`

```ts
/**
 * Represents the possible types for a database table alias.
 * Can be one of: "Text", "Number", "Boolean", "Json", "Date".
 */
type DatabaseTableAlias = "Text" | "Number" | "Boolean" | "Json" | "Date";
```

### `DatabaseCreateEditModel`

```ts
interface DatabaseCreateEditModel {
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
