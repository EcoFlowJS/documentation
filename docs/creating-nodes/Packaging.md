---
sidebar_position: 5
---

# Packaging

Nodes can be packaged as modules and published to the npm repository. This makes them easy to install along with any dependencies they may have.

## Naming

Nodes doesn't any special requirements on their name. They could use use a [`scoped name`](https://docs.npmjs.com/cli/v8/using-npm/scope) `@myScope/ecoflow-sample`, `ecoflow-sample` or just `sample` - although having ecoflow in the name does help to associate the module with the project.

If you are forking an existing package to provide a fix, you can keep the same name but released under your own scope. But please keep in mind, forking should always be a last resort if the original maintainer is not responsive to your contributions.

## Directory structure

Here is a typical directory structure for a node package:

```
.
├── LICENSE
├── README.md
├── tsconfig.json
├── package.json
└── src
    ├── controllers
    │   └── my-controller.ts
    ├── helpers
    │   └── my-helpers.ts
    └── manifest.ts
```

There are no strict requirements over the directory structure used within the package. If a package contains multiple nodes, they could all exist in the same manifest, or they could each be placed in their own sub-directory and imported in the main entry point of the package. The main entry point must be a function that output a [`NodeManifest`](./node-manifest).

## Testing a module locally

To test a node module locally, the [`npm install <folder>`](https://docs.npmjs.com/cli/v10/commands/npm-install) command can be used. This allows you to develop the node in a local directory and have it linked into a local EcoFlowJS install during development.

In your EcoFlowJS module directory, typically `~/.ecoflow/modules`, run:

```bash
npm install <location of node module>
```

This creates the appropriate symbolic link to the directory so that EcoFlowJS will discover the node when it starts. Any changes to the node’s file can be picked up by simply restarting EcoFlowJS.

## package.json

Along with the usual entries, the `package.json` file must contain a `ecoModule` entry that lists the .js files that contain controller for the runtime to load.

A controller must be a default exported function that can be executed directly.

If any of the controller have dependencies on other npm modules, they must be included in the `dependencies` property.

To help make the nodes discoverable within the npm repository, the file should include `EcoFlow` and `EcoFlowModule` in its `keywords` property. This will ensure the package appears while searching `npm repository`.

:::warning
Note : Please do NOT add the `EcoFlow` and `EcoFlowModule` keyword until you are happy that the node is stable and working correctly, and documented sufficiently for others to be able to use it.
:::

```json
{
  "name": "@myScope/ecoflow-sample",
  "version": "0.0.1",
  "description": "A sample node for ecoflow",
  "main": "./dist/manifest.js",
  "keywords": ["EcoFlow", "EcoFlowModule"],
  "ecoModule": {
    "myController": "./dist/controllers/my-controller.js"
  },
  "dependencies": {}
}
```

## README.md

The README.md file should describe the capabilities of the node, and list any pre-requisites that are needed in order to make it function. It may also be useful to include any extra instructions not included in the node description, and maybe even a small example flow demonstrating it’s use.

The file should be marked up using [`GitHub flavoured markdown`](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github).

## LICENSE

Please include a license file so that others may know what they can and cannot do with your code.

## Publishing to npm

There are lots of guides to publishing a package to the npm repository. A basic overview is available [here](https://docs.npmjs.com/misc/developers).
