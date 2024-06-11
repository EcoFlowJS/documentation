# Flow Editor

EcoFlowEditor is a class that is responsible for managing EcoFlow configurations and files.

## Usage

The config class can be accessed by global ecoflow instance of the application

_Example Basic usage:_

```ts
const { flowEditor } = ecoflow;

await flowEditor.initialize();
```

## API Reference

### Initialize Flow

**initialize()** ⇒ `Promise<EcoFlowEditor>`

Asynchronously initializes the object and deploys the existing flow.

**Return:** A Promise that resolves to the initialized object.

### Fetch Flow Definitions

**getFlowDefinitions()** ⇒ `Promise<FlowDefinitions>`

Asynchronously retrieves the flow definitions for all flows.

**Return:** A promise that resolves to an object containing the flow definitions.

**getFlowDefinitions(flowName)** ⇒ `Promise<FlowDefinitions>`

Asynchronously retrieves the flow definitions for all flows.

**Return:** A promise that resolves to an object containing the flow definitions.

**_Available arguments :_**

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| flowName  | `string` | The name of the flow to retrieve definitions for. |

### Fetch Flow Connections

**getFlowConnections()** ⇒ `Promise<FlowConnections>`

Asynchronously retrieves the flow connections for all flows.

**Return:** A promise that resolves to an object containing flow connections.

**getFlowConnections(flowName)** ⇒ `Promise<FlowConnections>`

Asynchronously retrieves the flow connections for all flows.

**Return:** A promise that resolves to an object containing flow connections.

**_Available arguments :_**

| Parameter | Type     | Description                                       |
| :-------- | :------- | :------------------------------------------------ |
| flowName  | `string` | The name of the flow to retrieve connections for. |

### Fetch Flow Configurations

**getFlowConfigurations()** ⇒ `Promise<FlowConfigurations>`

Retrieves the configurations for all flows if no flow name is provided.

**Return:** A promise that resolves to an object containing the configurations for the specified flow.

**getFlowConfigurations(flowName)** ⇒ `Promise<FlowConfigurations>`

Retrieves the configurations for a specific flow or for all flows if no flow name is provided.

**Return:** A promise that resolves to an object containing the configurations for the specified flow.

**_Available arguments :_**

| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| flowName  | `string` | The name of the flow to retrieve configurations for. |

### Fetch Flow Configurations

**getFlowConfigurations()** ⇒ `Promise<FlowConfigurations>`

Retrieves the configurations for all flows if no flow name is provided.

**Return:** A promise that resolves to an object containing the configurations for the specified flow.

**getFlowConfigurations(flowName)** ⇒ `Promise<FlowConfigurations>`

Retrieves the configurations for a specific flow or for all flows if no flow name is provided.

**Return:** A promise that resolves to an object containing the configurations for the specified flow.

**_Available arguments :_**

| Parameter | Type     | Description                                          |
| :-------- | :------- | :--------------------------------------------------- |
| flowName  | `string` | The name of the flow to retrieve configurations for. |

### Fetch Flow Description

**flowsDescription()** ⇒ `Promise<FlowsDescription>`

Retrieves the description of all flows if no flow name is provided.

**Return:** A promise that resolves to an object containing the descriptions of the flow(s).

**flowsDescription(flowName)** ⇒ `Promise<FlowsDescription>`

Retrieves the description of a specific flow or all flows if no flow name is provided.

**Return:** A promise that resolves to an object containing the descriptions of the flow(s).

**_Available arguments :_**

| Parameter | Type     | Description                                           |
| :-------- | :------- | :---------------------------------------------------- |
| flowName  | `string` | The name of the flow to retrieve the description for. |

### Valid Flow

**isFlow(flowName)** ⇒ `Promise<boolean>`

Checks if a flow with the given name exists.

**Return:** A promise that resolves to true if the flow exists, false otherwise.

**_Available arguments :_**

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| flowName  | `string` | The name of the flow to check. |

### Create Flow

**createFlow(flowName)** ⇒ `Promise<void>`

Creates a new flow with the given name.

**Return:** A promise that resolves once the flow is created.

**_Available arguments :_**

| Parameter | Type     | Description                     |
| :-------- | :------- | :------------------------------ |
| flowName  | `string` | The name of the flow to create. |

### Update Flow Configurations

**updateFlowConfigs(configs)** ⇒ `Promise<void>`

Updates the flow configurations based on the provided configs and newConfigs.

**Return:** A promise that resolves once the flow configurations are updated.

**_Available arguments :_**

| Parameter | Type                                                 | Description                        |
| :-------- | :--------------------------------------------------- | :--------------------------------- |
| configs   | `Pick<configOptions, "flowDir" \| "flowFilePretty">` | The flow configurations to update. |

**updateFlowConfigs(configs, [newConfigs])** ⇒ `Promise<void>`

Updates the flow configurations based on the provided configs and newConfigs.

**Return:** A promise that resolves once the flow configurations are updated.

**_Available arguments :_**

| Parameter    | Type                                                                                              | Description                            |
| :----------- | :------------------------------------------------------------------------------------------------ | :------------------------------------- |
| configs      | `Pick<configOptions, "flowNodeConfigurations" \| "flowNodeConnections" \| "flowNodeDefinitions">` | The current flow configurations.       |
| [newConfigs] | `Pick<configOptions, "flowNodeConfigurations" \| "flowNodeConnections" \| "flowNodeDefinitions">` | The new flow configurations to update. |

### Remove Flow

**removeFlow(flowName)** ⇒ `Promise<void>`

Removes a flow with the given name.

**Return:** A promise that resolves once the flow is successfully removed.

**_Available arguments :_**

| Parameter | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| flowName  | `string` | The name of the flow to be removed. |

### Check All Node Configured

**isAllNodesConfigured(definitions)** ⇒ `boolean`

Checks if all nodes in the given FlowDefinitions or FlowsDescription are configured.

**Return:** True if all nodes are configured, false otherwise.

**_Available arguments :_**

| Parameter   | Type                                  | Description                                 |
| :---------- | :------------------------------------ | :------------------------------------------ |
| definitions | `FlowDefinitions \| FlowsDescription` | The definitions of the flow or description. |

### Check Node Configured

**isNodeConfigured(node)** ⇒ `boolean`

Checks if a given node is configured.

**Return:** True if the node is configured, false otherwise.

**_Available arguments :_**

| Parameter | Type   | Description        |
| :-------- | :----- | :----------------- |
| node      | `Node` | The node to check. |

### Deploy Flow

**deploy(flowDescription)** ⇒ `Promise<boolean>`

Asynchronously deploys a flow based on the provided flow description.

**Return:** A promise that resolves to true if the deployment is successful.

**_Available arguments :_**

| Parameter       | Type               | Description                            |
| :-------------- | :----------------- | :------------------------------------- |
| flowDescription | `FlowsDescription` | The description of the flow to deploy. |

## Properties

| Parameter   | Type                                         | Description                                                                                    |
| :---------- | :------------------------------------------- | :--------------------------------------------------------------------------------------------- |
| flows       | `Promise<string[]>`                          | A Promise that resolves to an array of strings representing the flow names.                    |
| fLowBuilder | [`EcoFLowBuilder`](./EcoFlowJS-FlowsBuilder) | The EcoFlowBuilder instance. Documentation can be found **_[here](./EcoFlowJS-FlowsBuilder)_** |

## TypeScript Properties

### `Node`

```ts
/**
 * Represents a Node in React Flow with specific data types for node data and optional additional data.
 */
type Node = ReactFlowNode<FlowsNodeDataTypes, string | undefined>;
```

:::info
ReactFlow official documentation can be found **_[here](https://reactflow.dev/api-reference/types)_**
:::

### `FlowDefinitions`

```ts
interface FlowDefinitions {
  /** Representing flow definitions with keys as strings and values as Nodes. */
  [key: string]: Nodes;
}
```

### `FlowConnections`

```ts
interface FlowConnections {
  /** Representing an array of edges for each node key. */
  [key: string]: Edge<FlowsEdgeDataTypes>[];
}
```

### `FlowConfigurations`

```ts
interface FlowConfigurations {
  /** Representing an array of NodeConfiguration objects. */
  [key: string]: NodeConfiguration[];
}
```

### `FlowsDescription`

```ts
interface FlowsDescription {
  /** Representing a defining a mapping of flow keys to descriptions. */
  [key: string]: Describtions;
}
```

### `FlowsDescription`

```ts
interface FlowsDescription {
  /** Representing a defining a mapping of flow keys to descriptions. */
  [key: string]: Describtions;
}
```

### `FlowsNodeDataTypes`

```ts
interface FlowsNodeDataTypes {
  /** The ID of the EcoModule. */
  moduleID: EcoModuleID;

  /** The label of the node. */
  label: string;

  /** Indicates if the node is configured. */
  configured: boolean;

  /** Indicates if the node is disabled. */
  disabled: boolean;

  /** The description of the node. */
  description: string;

  /** The appearance configurations of the node. */
  appearance: NodeAppearanceConfigurations;

  /** Optional icon component for the node. */
  icon?: React.FC<HTMLAttributes<SVGElement>>;

  /** Indicates if the node is connected. */
  isConnectable?: number | boolean;

  /** Indicates if the node is connected has any errors. */
  isError?: boolean;

  /** Function for handling drawer open in the frontend. */
  openDrawer?: (
    label: string,
    configured: boolean,
    disabled: boolean,
    description: string,
    appearance: NodeAppearanceConfigurations
  ) => void;
}
```

### `NodeAppearanceConfigurations`

```ts
interface NodeAppearanceConfigurations {
  /** Whether to display a label for the node. */
  label?: boolean;

  /** The icon to display for the node. */
  icon?: string | null;

  /** Configuration for port labels. */
  portLabel?: {
    /** Label for the input port. */
    input?: string;

    /** Label for the output port. */
    output?: string;
  };
}
```
