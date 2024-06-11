# Module

Module is responsible for managing package installation, removal and building.

## Extended Builders

- [**Module Builder**](./ModuleBuilder)
- [**Module Schema Builder**](./ModuleSchema-Builder)
- [**Node Builder**](./NodeBuilder)

## Static Methods

- [**ID Builder**](./IDBuilder)

## API Reference

### Register Modules

**registerModules()** ⇒ `Promise<void>`

Asynchronously registers modules by building the module schema and nodes.

_Example Basic usage:_

```ts
const { ecoModule } = ecoflow;

await ecoModule.registerModules();
```

### Verify Module

**isEcoModule(moduleName)** ⇒ `Promise<boolean>`

Checks if a given module is an EcoFlow module by examining its keywords.

**Return:** A promise that resolves to true if the module is an EcoFlow module, false otherwise.

**_Available arguments :_**

| Parameter  | Type                  | Description                     |
| :--------- | :-------------------- | :------------------------------ |
| moduleName | `PackageSearchResult` | The PackageSearchResult object. |

**isEcoModule(moduleName)** ⇒ `Promise<boolean>`

Checks if a given module is an EcoFlow module by examining its keywords.

**Return:** A promise that resolves to true if the module is an EcoFlow module, false otherwise.

**_Available arguments :_**

| Parameter  | Type     | Description             |
| :--------- | :------- | :---------------------- |
| moduleName | `string` | The name of the module. |

_Example Basic usage:_

```ts
const { ecoModule } = ecoflow;

const isEcoModule = await ecoModule.isEcoModule("ecoflow-common");

console.log(isEcoModule);
```

### Search Module

**searchModule(moduleName)** ⇒ `Promise<ModuleSearchResults>`

Searches for a module by name and returns detailed information about the module.

**Return:** A promise that resolves to an object containing detailed information about the searched module.

**_Available arguments :_**

| Parameter  | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| moduleName | `string` | The name of the module to search for. |

### Install Module

**installModule(moduleName)** ⇒ `Promise<ModuleSchema>`

Asynchronously installs a module with the specified name.

**Return:** A promise that resolves to the installed module schema.

**_Available arguments :_**

| Parameter  | Type     | Description                        |
| :--------- | :------- | :--------------------------------- |
| moduleName | `string` | The name of the module to install. |

**installModule(moduleName, [version])** ⇒ `Promise<ModuleSchema>`

Asynchronously installs a module with the specified name.

**Return:** A promise that resolves to the installed module schema.

**_Available arguments :_**

| Parameter  | Type `(Default)`          | Description                           |
| :--------- | :------------------------ | :------------------------------------ |
| moduleName | `string`                  | The name of the module to install.    |
| [version]  | `string` **`("latest")`** | The version of the module to install. |

### Install All Module

**installModules()** ⇒ `Promise<void>`

Asynchronously installs a module dependencies.

**Return:** A promise that resolves to the installed is success.

### Install Local Module

**installLocalModule(moduleName)** ⇒ `Promise<ModuleSchema[]>`

Installs local modules from the specified module names array from the upload folder.

Local modules must be a zip file containing all [packaging](../../creating-nodes/Packaging) files in its root directory.

**Return:** A promise that resolves to an array of ModuleSchema objects.

**_Available arguments :_**

| Parameter  | Type       | Description                                  |
| :--------- | :--------- | :------------------------------------------- |
| moduleName | `string[]` | An array of module names to install locally. |

### Upgrade or Downgrade Module

**upgradeDowngradeModule(moduleName, version)** ⇒ `Promise<ModuleSchema>`

Upgrades or downgrades a module to the specified version.

**Return:** The module schema of the upgraded/downgraded module.

**_Available arguments :_**

| Parameter  | Type     | Description                                  |
| :--------- | :------- | :------------------------------------------- |
| moduleName | `string` | The name of the module to upgrade/downgrade. |
| version    | `string` | The version to upgrade/downgrade to.         |

### Fetch Installed Packages Description

**getInstalledPackagesDescription(packageName)** ⇒ `Promise<InstalledPackagesDescription>`

Retrieves the description of an installed package based on the package name.

**Return:** A promise that resolves to an object containing the details of the installed package, such as name, versions, author, download count, and usage status.

**_Available arguments :_**

| Parameter   | Type     | Description                                              |
| :---------- | :------- | :------------------------------------------------------- |
| packageName | `string` | The name of the package to retrieve the description for. |

### Remove Module

**removeModule(moduleName)** ⇒ `Promise<void>`

Asynchronously removes a module by its name.

**Return:** A promise that resolves once the module is successfully removed.

**_Available arguments :_**

| Parameter  | Type     | Description                           |
| :--------- | :------- | :------------------------------------ |
| moduleName | `string` | The name of the module to be removed. |

### Add Module

**addModule(module)** ⇒ `Promise<void>`

Asynchronously adds a module or an array of modules to the module schema.

If an array of modules is provided, it iterates through each module and adds it.

**Return:** A promise that resolves once the module(s) have been added.

**_Available arguments :_**

| Parameter | Type                             | Description                            |
| :-------- | :------------------------------- | :------------------------------------- |
| module    | `ModuleSchema \| ModuleSchema[]` | The module or array of modules to add. |

### Update Module

**updateModule(module)** ⇒ `Promise<void>`

Updates a module or an array of modules in the module schema.

**Return:** A promise that resolves once the module have been updated.

**_Available arguments :_**

| Parameter | Type                             | Description                               |
| :-------- | :------------------------------- | :---------------------------------------- |
| module    | `ModuleSchema \| ModuleSchema[]` | The module or array of modules to update. |

### Drop Module

**dropModule(moduleID)** ⇒ `Promise<void>`

Asynchronously drops a module or an array of modules from the system.

**Return:** A promise that resolves once the module(s) have been dropped.

**_Available arguments :_**

| Parameter | Type                           | Description                                      |
| :-------- | :----------------------------- | :----------------------------------------------- |
| moduleID  | `EcoModuleID \| EcoModuleID[]` | The ID or array of IDs of the module(s) to drop. |

### Fetch Module Schema

**getModuleSchema()** ⇒ `ModuleSchema[]`

Retrieves the module schemas.

**Return:** The module schema list.

**getModuleSchema(moduleID)** ⇒ `ModuleSchema`

Retrieves the module schema based on the provided module ID.

**Return:** The module schema matching the provided module ID.

**_Available arguments :_**

| Parameter | Type          | Description                                      |
| :-------- | :------------ | :----------------------------------------------- |
| moduleID  | `EcoModuleID` | The ID of the module to retrieve the schema for. |

**getModuleSchema(moduleID)** ⇒ `ModuleSchema`

Retrieves the module schema based on the provided module ID.

**Return:** The module schema matching the provided module ID.

**_Available arguments :_**

| Parameter | Type     | Description                                      |
| :-------- | :------- | :----------------------------------------------- |
| moduleID  | `string` | The ID of the module to retrieve the schema for. |

### Fetch Module

**getModule()** ⇒ `Module[]`

Retrieves an array of all modules.

**Return:** An array of all modules.

**getModule(moduleID)** ⇒ `Module | null`

Retrieves a module based on the provided moduleID.

**Return:** The module matching the moduleID.

**_Available arguments :_**

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| moduleID  | `string` | The ID of the module to retrieve. |

### Fetch Nodes

**getNodes()** ⇒ `Promise<EcoNodes>`

Retrieves all nodes.

**Return:** A promise that resolves to the retrieved nodes.

**getNodes(nodeID)** ⇒ `Promise<EcoNode | null>`

Retrieves nodes based on the provided node ID and input values.

**Return:** A promise that resolves to the retrieved node or null.

**_Available arguments :_**

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| nodeID    | `string` | The ID of the node to retrieve. |

**getNodes(nodeID, [inputValuePass])** ⇒ `Promise<EcoNode | null>`

Retrieves nodes based on the provided node ID and input values.

**Return:** A promise that resolves to the retrieved node or null.

**_Available arguments :_**

| Parameter        | Type `(Default)`    | Description                        |
| :--------------- | :------------------ | :--------------------------------- |
| nodeID           | `string`            | The ID of the node to retrieve.    |
| [inputValuePass] | `Object` **`({})`** | Input values to pass to the nodes. |

## Properties

| Parameter               | Type `(Default)`                             | Description                                                                |
| :---------------------- | :------------------------------------------- | :------------------------------------------------------------------------- |
| availablePackagesCounts | `Promise<Number>`                            | A promise that resolves with the total count of available packages.        |
| moduleBuilder           | [`EcoModuleBuilder`](./ModuleSchema-Builder) | An instance of EcoModuleBuilder.                                           |
| getNodeBuilder          | [`EcoNodeBuilder \| null`](./NodeBuilder)    | An instance of IEcoNodeBuilder if moduleSchema is defined, otherwise null. |
| installedModules        | `Promise<string[]>`                          | A promise that resolves with an array of installed module names.           |

## TypeScript Properties

### `PackageSearchResult`

:::note
It is and properties of an external dependencies and its documentation can be found [here](https://github.com/velut/query-registry)
:::

### `ModuleSchema`

:::note
It is an instance of Module Schema Builder and its documentation can be found [here](./ModuleSchema-Builder)
:::

### `EcoModuleID`

:::note
It is an instance of Module ID Builder and its documentation can be found [here](./IDBuilder)
:::

### `ModuleSearchResults`

```ts
interface ModuleSearchResults {
  /** An array of ModuleResults objects. */
  modules: ModuleResults[];

  /** The total number of modules in the search results. */
  total: number;
}
```

### `ModuleSearchResults`

```ts
interface ModuleResults {
  /** The name of the module. */
  name: string;

  /** The author of the module. */
  author?: Person | string;

  /** An array of versions of the module. */
  versions: string[];

  /** Indicates if the module is installed. */
  isInstalled: boolean;

  /** Indicates if the module is in use. */
  inUsed: boolean;

  /** The latest version of the module. */
  latestVersion: string;

  /** The installed version(s) of the module. */
  installedVersions: string | null;

  /** The git repository of the module */
  gitRepository?: string;
}
```

### `Module`

```ts
interface Module {
  /** The ID of the module. */
  id: EcoModuleID;

  /** The name of the module. */
  name: string;

  /** The package name of the module. */
  packageName: string;

  /** The version of the module. */
  version: string;

  /** An array of nodes associated with the module. */
  nodes: ModuleNodes[];
}
```

### `ModuleNodes`

```ts
interface ModuleNodes extends ModuleSpecs {
  /** The ID of the module. */
  id: EcoModuleID;

  /** An array of input specifications for the module. */
  inputs?: FlowInputSpecs[];
}
```

### `FlowInputSpecs`

:::note
A appropriate documentation can be found [here](./NodeBuilder#flowinputspecs)
:::

### `ModuleSpecs`

```ts
interface ModuleSpecs {
  /** The name of the module. */
  name: string;

  /** The type of the module. */
  type: ModuleTypes;

  /** The description of the module. */
  describtion?: string;

  /** The controller of the module. */
  controller?: string;
}
```

### `EcoNodes`

```ts
/**
 * Represents an array of ModuleNodes that are read-only.
 */
type EcoNodes = Readonly<ModuleNodes[]>;
```

### `EcoNode`

```ts
/**
 * Represents a node in the Eco system, which can be a ModuleNode or null.
 */
type EcoNode = Readonly<ModuleNodes | null>;
```

### `InstalledPackagesDescription`

```ts
interface InstalledPackagesDescription {
  /** The name of the package. */
  name: string;

  /** The current version of the package. */
  currentVersion: string;

  /** The latest version available for the package. */
  latestVersion: string;

  /** The author of the package. */
  author: string | Person;

  /** The number of downloads or a string representing the download count. */
  download: number | string;

  /** Indicates if the package is currently in use. */
  isInUse: boolean;

  /** Indicates if the package is a local package. */
  isLocalPackage: boolean;
}
```
