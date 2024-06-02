---
sidebar_position: 1
---

# Quick Start

This guide will help you get EcoFlowJS installed and running in just a few minutes.

### Prerequisites

To install EcoFlowJS locally you will need a [supported version of Node.js](https://nodejs.org/en/download).

### Installing with npm

To install EcoFlowJS you can use the `npm` command that comes with node.js:

```bash
  sudo npm install -g @ecoflow/cli@latest
```

If you are using Windows, do not start the command with `sudo`.

That command will install EcoFlowJS as a global module along with its dependencies.

## Running

Once installed as a global module you can use the `ecoflow` command to start EcoFlowJS in your terminal. You can use `Ctrl-C` or close the terminal window to stop EcoFlowJS.

```bash
$ ecoflow
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

You can then access the EcoFlowJS editor by pointing your browser at http://127.0.0.1:4000.

The log output provides you various pieces of information:

- The versions of EcoFlowJS and Node.js
- Any errors hit when it tried to load the nodes
- The usernames of the connected users.
