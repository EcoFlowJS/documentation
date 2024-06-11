# Module ID Builder

EcoModuleID is a class responsible for generating a unique ID for modules.

The generated ID is a unique string of md5 hash code.

## API Reference

### IDBuilders

Kind: Exported class

**new IDBuilders(moduleName, [nodeName])**

Create an instance of the IDBuilders class

**_Available arguments :_**

| Parameter  | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| moduleName | `string` | The name of the module.                 |
| [nodeName] | `string` | The name of the node within the module. |

### Basic Usage

_Example Basic usage:_

```ts
import EcoModule from "@ecoflow/module";

const generatedID = new EcoModule.IDBuilders("Hello");

console.log(generatedID);
```

## Properties

| Parameter | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| \_id      | `string` | A string representing an ID. |
