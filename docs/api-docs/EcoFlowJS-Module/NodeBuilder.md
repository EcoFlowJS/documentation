# Node Builder

EcoNodeBuilder is a class responsible for building node objects present in the module manifest.

## API Reference

### Fetch Database Config

**buildNodes()** ⇒ `Promise<ModuleNodes[]>`

Asynchronously builds an array of ModuleNodes by extracting nodes from different sources and setting up event listeners for systemSocket connections.

**Return:** A promise that resolves to an array of ModuleNodes.

## TypeScript Properties

### `ModuleNodes`

```ts
interface ModuleNodes extends ModuleSpecs {
  /** The ID of the module. */
  id: EcoModuleID;

  /** An array of input specifications for the module. */
  inputs?: FlowInputSpecs[];
}
```

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

### `FlowInputSpecs`

```ts
interface FlowInputSpecs {
  /** The name of the input. */
  name: string;

  /** The label for the input. */
  label: string;

  /** The type of the input. */
  type: ModuleSpecsInputsTypes;

  /** The hint for the input. */
  hint?: string;

  /** Indicates if the input is required. */
  required?: boolean;

  /** The programming language for the input. */
  codeLanguage?: string;

  /** The API methods associated with the input. */
  methods?: API_METHODS[];

  /** The values for radio inputs. */
  radioValues?: string | string[];

  /** The options for the input type Select Picker. */
  pickerOptions?: string[] | ModuleSpecsInputsTypeOptions[];

  /** Indicates if the input is a list box is sortable. */
  listBoxSorting?: boolean;

  /** Indicates if the input is a default value. */
  defaultValue?:
    | string
    | number
    | boolean
    | Date
    | string[]
    | { start: number; end: number };
}
```

### `ModuleSpecsInputsTypes`

:::note
A appropriate documentation can be found [here](../../creating-nodes/input-types#modulespecsinputstypes)
:::

### `API_METHODS`

:::note
A appropriate documentation can be found [here](../../creating-nodes/input-types#api_methods)
:::

### `ModuleSpecsInputsTypes`

:::note
A appropriate documentation can be found [here](../../creating-nodes/input-types#modulespecsinputstypes)
:::
