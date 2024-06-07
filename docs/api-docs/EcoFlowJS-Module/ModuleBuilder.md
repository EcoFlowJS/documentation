# Module Builder

EcoModuleBuilder is a class that defines multiple build methods to create ModuleSchema objects.

## Build Methods

### build(ecoModules)

**build(ecoModules)** ⇒ `Promise<ModuleSchema[]>`

Builds the module schema for the given ecoModules.

**Return:** A promise that resolves to an array of ModuleSchema.

**_Available arguments :_**

| Parameter  | Type       | Description                             |
| :--------- | :--------- | :-------------------------------------- |
| ecoModules | `string[]` | The ecoModules to build the schema for. |

**build(ecoModules)** ⇒ `Promise<ModuleSchema>`

Builds the module schema for the given ecoModules.

**Return:** A promise that resolves ModuleSchema.

**_Available arguments :_**

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| ecoModules | `string` | The ecoModules to build the schema for. |

### build(ecoModules, [nodePath])

**build(ecoModules, [nodePath])** ⇒ `Promise<ModuleSchema[]>`

Builds the module schema for the given ecoModules.

**Return:** A promise that resolves to an array of ModuleSchema.

**_Available arguments :_**

| Parameter  | Type       | Description                             |
| :--------- | :--------- | :-------------------------------------- |
| ecoModules | `string[]` | The ecoModules to build the schema for. |
| [nodePath] | `string`   | The path of the node.                   |

**build(ecoModules, [nodePath])** ⇒ `Promise<ModuleSchema>`

Builds the module schema for the given ecoModules.

**Return:** A promise that resolves ModuleSchema.

**_Available arguments :_**

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| ecoModules | `string` | The ecoModules to build the schema for. |
| [nodePath] | `string` | The path of the node.                   |

## TypeScript Properties

### `ModuleSchema`

:::note
It is an instance of Module Schema Builder and its documentation can be found [here](./ModuleSchema-Builder)
:::
