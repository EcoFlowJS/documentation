---
sidebar_position: 2
---

# Manifest

The Manifest provides the description of all the nodes present in a module.

This is main entry point for the module itself and for the application to build each node based on the configuration settings provided in the manifest specification.

## Manifest Declaration

```ts
const manifest = () => ({
  name: "Sample",
  specs: [
    {
      name: "Sample Middleware",
      type: "Middleware",
      inputs: [
        {
          name: "sampleText",
          type: "String",
          label: "Text",
        },
      ],
      controller: "sampleMiddleware", // controller referenced from package.json ecoModule object
    },
  ],
});

module.exports = manifest;
```

## Manifest Properties

| Parameter | Type              | Description                                      |
| :-------- | :---------------- | :----------------------------------------------- |
| name      | `string`          | The name of the module.                          |
| specs     | `ManifestSpecs[]` | An array of Manifest Node Configuration objects. |

## Manifest Node Configuration

### Node Configuration

| Parameter     | Type                  | Description                                           |
| :------------ | :-------------------- | :---------------------------------------------------- |
| name          | `string`              | The name of the module node.                          |
| type          | `ModuleTypes`         | The type of the module node.                          |
| [describtion] | `ModuleTypes`         | The description of the module node.                   |
| [inputs]      | `ModuleSpecsInputs[]` | An array of input specifications for the module node. |
| [controller]  | `ModuleTypes`         | The controller of the module node.                    |

### Node Types

Available types of node for the manifest specification are listed below.

- **Request**: The entry point for the api routes endpoint.
- **Middleware**: The middleware is responsible for computation of the request to provide some response.
- **Response**: The exit point for the api routes endpoint.
- **Debug**: The debug is responsible for displaying output of the previous node.

### Node Inputs Specifications

| Parameter        | Type                                                                                                                                                                                                       | Description                                 |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------ |
| name             | `string`                                                                                                                                                                                                   | The name of the input.                      |
| label            | `string`                                                                                                                                                                                                   | The label for the input.                    |
| type             | `ModuleSpecsInputsTypes`                                                                                                                                                                                   | The type of the input.                      |
| [hint]           | `string`                                                                                                                                                                                                   | The hint for the input type.                |
| [required]       | `boolean`                                                                                                                                                                                                  | Indicates if the input is required.         |
| [codeLanguage]   | `string`                                                                                                                                                                                                   | The programming language for the input.     |
| [methods]        | `API_METHODS[] \| ((value?: {[key: string]: any;})  => API_METHODS[] \| Promise<API_METHODS[]>)`                                                                                                           | The methods for the input.                  |
| [radioValues]    | `string \| string[] \| ((value?: { [key: string]: any; }) => string \| string[] \| Promise<string \| string[]>)`                                                                                           | The values for radio buttons.               |
| [pickerOptions]  | `string[] \| ModuleSpecsInputsTypeOptions[] \| ((value?: { [key: string]: any; }) => string[] \| ModuleSpecsInputsTypeOptions[] \| Promise<string[] \| ModuleSpecsInputsTypeOptions[]>)`                   | The options for a picker field.             |
| [listBoxSorting] | `boolean`                                                                                                                                                                                                  | Indicates if the list box should be sorted. |
| [defaultValue]   | `string \| number \| boolean \| Date \| string[] \| {start: number, end: number} \| ((value?: { [key: string]: any;}) => string \| number \| boolean \| Date \| string[] \| {start: number, end: number})` | The default value for the input field.      |

### Node Inputs Type Specification

| Type           | Description                           |
| :------------- | :------------------------------------ |
| `Route`        | Default value for Request Node Types. |
| `DB_Selector`  | Default value for DB Selectors.       |
| `Methods`      | Request Node API Methods.             |
| `Code`         | Code Editor Input Type.               |
| `Toggle`       | Toggle Input Type.                    |
| `Date`         | Date Input Type.                      |
| `Time`         | Time Input Type.                      |
| `DateTime`     | Date Time Input Type.                 |
| `Number`       | Number Input Type.                    |
| `String`       | Text Input Type (DEFAULT VALUE).      |
| `HiddenString` | Password Input Type.                  |
| `CheckPicker`  | List Picker Input Type.               |
| `SelectPicker` | Select Picker Input Type.             |
| `Checkbox`     | Checkbox Input Type.                  |
| `Radio`        | Radio Input Type.                     |
| `Range`        | Range or Slider Input Type.           |
| `ListBox`      | List Box Input Type.                  |

:::tip
More descriptive description can be found [here](./input-types)
:::
