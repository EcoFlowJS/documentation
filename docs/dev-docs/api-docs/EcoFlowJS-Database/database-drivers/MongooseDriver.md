# Mongoose

DriverMongoose represents a class that implements the DriverMongoose interface and provides methods for interacting with MongoDB

## API Reference

:::tip
_Mongoose official guide can be found **[here](https://mongoosejs.com/docs/guide.html)**_
:::

### Create Connection

**createConnection(uri, [options])** ⇒ `Promise<Connection>`

Creates a connection to a MongoDB database using Mongoose.

**Return:** A promise that resolves to the Mongoose connection object.

**_Available arguments :_**

| Parameter | Type             | Description                      |
| :-------- | :--------------- | :------------------------------- |
| uri       | `string`         | The URI of the MongoDB database. |
| [options] | `ConnectOptions` | Optional connection options.     |

### Build Model

**buildModel(name, schema, [collection], [options])** ⇒ `Model`

Builds and returns a model based on the provided name, schema, collection, and options.

**Return:** A model based on the provided parameters.

**_Available arguments :_**

| Parameter         | Type                                                   | Description                                      |
| :---------------- | :----------------------------------------------------- | :----------------------------------------------- |
| name              | `string`                                               | The name of the model.                           |
| schema            | `object`                                               | The schema definition and options for the model. |
| schema.definition | `SchemaDefinition \| ApplySchemaOptions \| {}`         | The schema definition for the model.             |
| schema.options    | `SchemaOptions \| ResolveSchemaOptions<SchemaOptions>` | The schema options for the model.                |
| [collection]      | `string`                                               | The name of the collection in the database.      |
| [options]         | `CompileModelOptions`                                  | Additional options for compiling the model.      |

### Collection Info

**collectionInfo(collection, [options])** ⇒ `Promise<Array<CollectionInfo>>`

Retrieves information about a collection from the database.

**Return:** A promise that resolves to an array of CollectionInfo objects.

**_Available arguments :_**

| Parameter  | Type                    | Description                                               |
| :--------- | :---------------------- | :-------------------------------------------------------- |
| collection | `string`                | The name of the collection to retrieve information for.   |
| [options]  | `collectionInfoOptions` | Additional options for retrieving collection information. |

### List Collections

**listCollections()** ⇒ `Promise<string[]>`

Asynchronously retrieves a list of collection names from the database.

**Return:** A promise that resolves to an array of collection names sorted alphabetically.

### Fetch Mongoose Connection

**getConnection** ⇒ `Connection`

Retrieve the mongoose connection object.

**Return:** The mongoose connection object.

### Fetch Mongoose

**getMongoose** ⇒ `Mongoose`

Returns the Mongoose object for interacting with MongoDB using the Mongoose library.

**Return:** The Mongoose object.

### Fetch Mongoose schema

**getSchema** ⇒ `Schema`

Returns the mongoose Schema class for creating MongoDB schemas.

**Return:** The mongoose Schema class.

### Fetch Mongoose Document

**getDocument** ⇒ `Document`

Returns the type of mongoose Document.

**Return:** The type of mongoose Document.

### Fetch Mongoose Query

**getQuery** ⇒ `Query`

returns the mongoose Query class.

**Return:** The mongoose Query class.

### Fetch Mongoose Aggregate

**getAggregate** ⇒ `Aggregate`

returns the mongoose Aggregate class.

**Return:** The mongoose Aggregate class.

### Fetch Mongoose SchemaType

**getSchemaType** ⇒ `SchemaType`

returns the mongoose SchemaType class.

**Return:** The mongoose SchemaType class.

### Fetch Mongoose VirtualType

**getVirtualType** ⇒ `VirtualType`

returns the mongoose VirtualType class.

**Return:** The mongoose VirtualType class.

## TypeScript Properties

### `CollectionInfo`

```ts
interface CollectionInfo {
  /** An array of keys for the collection. */
  keys: CollectionTypes[];

  /** An object mapping keys to collection types. */
  types: { [key: string]: CollectionTypes };

  /** The values of the collection. */
  values: any;
}
```

### `collectionInfoOptions`

```ts
interface collectionInfoOptions {
  /** The sub-column to use for collection. */
  subColumn?: string;

  /** An object containing key-value pairs to match against. */
  match?: { [key: string]: any };
}
```

### `CollectionTypes`

```ts
type CollectionTypes =
  | "objectId" //Represents an ObjectId type.
  | "array" //Represents an Array type.
  | "binData" //Represents a Binary Data type.
  | "bool" //Represents a Boolean type.
  | "javascriptWithScope" //Represents a JavaScript with Scope type.
  | "date" //Represents a Date type.
  | "decimal" //Represents a Decimal type.
  | "double" //Represents a Double type.
  | "int" //Represents a Integer type.
  | "long" //Represents a Long type.
  | "maxKey" //Represents a Max Key type.
  | "minKey" //Represents a Min Key type.
  | "null" //Represents a Null type.
  | "object" //Represents a Object type.
  | "regex" //Represents a RegExp type.
  | "string" //Represents a String type.
  | "symbol" //Represents a symbol type.
  | "timestamp"; //Represents a timestamp type.
```

### `DatabaseCollectionInfo`

```ts
interface DatabaseCollectionInfo {
  /** An array of collection types keys. */
  keys: CollectionTypes[];

  /** An object mapping keys to collection types. */
  types: {
    [key: string]: CollectionTypes;
  };

  /** The data stored in the collection. */
  data: any;
}
```
