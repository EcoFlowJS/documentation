---
sidebar_position: 5
---

# Creating Nodes

EcoFlowJS can be extended by adding new nodes to its packages.

- [Creating your first node](./creating-your-first-node)
- [Manifest Properties](./node-manifest)
- [Node Inputs Types](./input-types)
- [Controller Description](./controller-description)
- [Publishing nodes](./Packaging)

## General Guidelines

When creating new nodes:

- **Be clear in purpose.**
  - Nodes should have a defined, specific functionality.
- **Ensure simplicity.**
  - Nodes should be easy to use, hiding complexity.
- **Handle diverse message properties.**
  - Nodes should gracefully accept various data types.
- **Be consistent in output.**
  - Document properties added to messages and maintain predictable behavior.
- **Catch errors.**
  - Prevent uncaught errors to avoid disrupting the entire flow.
