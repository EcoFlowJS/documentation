---
sidebar_position: 5
---

# Creating Nodes

The main way EcoFFlowJS can be extended is to add new nodes into its packages.

Nodes can be published as npm modules to the [public npm repository](https://www.npmjs.com/) to make them available to the community or can a zip containing the packages.

- [Creating your first node](./guide/creating-your-first-node)
- [Manifest Properties](./guide/node-manifest)
- [Node properties](./guide/node-properties)
- [Node appearance](https://example.com)
- [Node status](https://example.com)
- [Configuration nodes](https://example.com)
- [Adding examples](https://example.com)
- [Publishing nodes](https://example.com)

## General guidance

There are some general principles to follow when creating new nodes. These reflect the approach taken by the core nodes and help provided a consistent user-experience.

Nodes should:

- **be well-defined in their purpose.**

  A node that exposes every possible option of an API is potentially less useful that a group of nodes that each serve a single purpose.

- **be simple to use, regardless of the underlying functionality.**

  Hide complexity and avoid the use of jargon or domain-specific knowledge.

- **be forgiving in what types of message properties it accepts.**

  Message properties can be strings, numbers, booleans, Buffers, objects, arrays or nulls. A node should do The Right Thing when faced with any of these.

- **be consistent in what they send.**

  Nodes should document what properties they add to messages, and they should be consistent and predictable in their behavior.

- **catch errors.**

  If a node throws an uncaught error, EcoFlowJS will stop the entire flow as the state of the system is no longer known.

  Wherever possible, nodes must catch errors or register error handlers for any asynchronous calls they make.
