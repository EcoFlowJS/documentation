# Flow Builder

EcoFlowBuilder is a class that is responsible for building and managing a flow of nodes and connections.

## Usage

The config class can be accessed by global ecoflow instance of the application

_Example Basic usage:_

```ts
const { flowEditor } = ecoflow;

const flowBuilder = flowEditor.fLowBuilder;
```

## API Reference

### Build Node Stack

**buildStack(flowConfigurations)** ⇒ `Promise<[stack, configuration]>`

Builds a stack of nodes based on the given flow configurations.

**Return:** A promise that resolves to an array containing the nodes stack and node configurations.

**_Available arguments :_**

| Parameter          | Type               | Description                                      |
| :----------------- | :----------------- | :----------------------------------------------- |
| flowConfigurations | `FlowsDescription` | The flow configurations to build the stack from. |

**_Return arguments types :_**

| Parameter     | Type                  | Description                                  |
| :------------ | :-------------------- | :------------------------------------------- |
| stack         | `NodesStack`          | The nodes stack                              |
| configuration | `NodeConfiguration[]` | An array containing the node configurations. |

### Fetch Node Configuration

**getNodeConfigurations(nodeID)** ⇒ `object | {}`

Retrieves the configurations for a specific node based on the node ID.

**Return:** The configurations for the specified node, or an empty object if no configurations are found.

**_Available arguments :_**

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| nodeID    | `string` | The ID of the node to retrieve configurations for. |

### Fetch Node Stack Configuration

**getStackNodeConfigurations(nodeID)** ⇒ `object | {}`

Retrieves the configurations for a specific node in the stack.

**Return:** The configurations for the specified node, or an empty object if no configurations are found.

**_Available arguments :_**

| Parameter | Type     | Description                                        |
| :-------- | :------- | :------------------------------------------------- |
| nodeID    | `string` | The ID of the node to retrieve configurations for. |

## Properties

| Parameter            | Type                  | Description                                                                        |
| :------------------- | :-------------------- | :--------------------------------------------------------------------------------- |
| stack                | `NodesStack`          | The Nodes Stack as an object.                                                      |
| stacksConfigurations | `NodeConfiguration[]` | An array of NodeConfiguration objects representing the stack configurations.       |
| nodes                | `Nodes`               | The Nodes from the flow.                                                           |
| edges                | `NodeConnections`     | The edges of the node.                                                             |
| configurations       | `NodeConfiguration[]` | An array of NodeConfiguration objects representing the configurations of the node. |
| startingNodes        | `Nodes`               | The starting nodes of the graph.                                                   |
| responseNodes        | `Nodes`               | The response nodes.                                                                |
| consoleNodes         | `Nodes`               | The console nodes.                                                                 |

## TypeScript Properties

### `FlowsDescription`

```ts
interface FlowsDescription {
  /** Defining a mapping of flow keys to descriptions. */
  [key: string]: Describtions;
}
```

### `NodeConfiguration`

```ts
interface NodeConfiguration {
  /** The unique identifier for the node. */
  nodeID: string;

  /** The configuration settings for the node. */
  configs: {
    /** The configuration settings for the node as a key value pair. */
    [key: string]: any;
  };
}
```

### `NodeConnections`

```ts
/**
 * Represents an array of NodeConnection objects.
 */
type NodeConnections = NodeConnection[];
```

### `NodesStack`

```ts
/**
 * Represents an array of Node objects.
 */
type NodesStack = Node[];
```

### `Nodes`

```ts
/**
 * Represents an array of Node objects.
 */
type Nodes = Node[];
```
