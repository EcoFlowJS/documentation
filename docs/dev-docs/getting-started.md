---
sidebar_position: 1
---

# Getting Started

This guide will help you get EcoFlowJS installed and running in just a few minutes.

### Prerequisites

Ensure you have a [supported version of Node.js](https://nodejs.org/en/download) installed.

### Installation

To install EcoFlowJS globally using npm:

```bash
sudo npm install -g @ecoflow/cli@latest
```

:::info
On Windows, omit `sudo`.
:::
That command will install EcoFlowJS as a global module along with its dependencies.

## Running EcoFlowJS

After installation, start EcoFlowJS with the `ecoflow` command:

```bash
ecoflow
```

Terminal output

```
[ 29-5-2024 22:05:26 ] : [ EcoFlow ] : Starting up EcoFlow services
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : ====================================
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Starting Application....
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Adding Database Connection _sysDB
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Database Connection Added named : _sysDB
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : System DataBase Connection Successfully
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Installing default modules using ecoModule
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Initializing the existing flow...
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Server listening on http://127.0.0.1:4000
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : ====================================
[ 29-5-2024 22:05:27 ] : [ Eco-FLow ] | [ info ] : Server Ready to use!!!
```

Access the EcoFlowJS editor at [http://127.0.0.1:4000](http://127.0.0.1:4000).
