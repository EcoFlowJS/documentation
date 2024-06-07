# Module Schema Builder

ModuleSchema is a class responsible building the modules schema and fetching modules information

## API Reference

### Initialize Builder

**initialize()** ⇒ `Promise<ModuleSchema>`

Initializes the object by setting the manifest, initializing controllers, and processors.

**Return:** A promise that resolves to the initialized object.

### Get Key Value

**getKeyValue(key)** ⇒ `any`

Get the value of a specific key from the packageJson object.

**Return:** The value corresponding to the provided key from the packageJson object.

**_Available arguments :_**

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| key       | `string` | The key to retrieve the value for. |

### Fetch Controller

**getController(id)** ⇒ `any`

Retrieves a controller object based on the provided ID.

**Return:** The controller object associated with the provided ID.

**_Available arguments :_**

| Parameter | Type     | Description                           |
| :-------- | :------- | :------------------------------------ |
| id        | `string` | The ID of the controller to retrieve. |

## Properties

| Parameter   | Type                                             | Description                                                 |
| :---------- | :----------------------------------------------- | :---------------------------------------------------------- |
| module      | [`Module \| null`](../EcoFlowJS-Module#module-1) | The module associated with this object, or null if not set. |
| name        | `string`                                         | The name of the package as a string.                        |
| description | `string`                                         | The description of the package as a string.                 |
| author      | `string`                                         | The author of the package as a string.                      |
| license     | `string`                                         | The license information.                                    |
