---
sidebar_position: 1
---

# Creating your first node

Nodes get created when a application is launched and implemented when flow is deployed, they may send and receive http request and response whilst the flow is running and they get updated when the next flow is deployed.

They consist of files:

- a JavaScript file that defines what the node does,
- a JavaScript as a package entry point containing a array of node’s properties.

A `package.json` file is used to package it all together as an npm module.

## Creating a simple node

This example will show how to create a node that converts message payloads to all lower-case characters.

Ensure you have the current LTS version of Node.js installed on your system. At the time of writing this is 20.x.

Create a directory where you will develop your code. Within that directory, create the following files:

- `package.json`
- `lower-case-controller.js`
- `manifest.js`

## package.json

This is a standard file used by Node.js modules to describe their contents.

To generate a standard `package.json` file you can use the command `npm init`. This will ask a series of questions to help create the initial content for the file, using sensible defaults where it can. When prompted, give it the name `ecoflow-contrib-example-lower-case`.

Once generated, you must add a `ecoModule` section containing a object with `key as name` and `value as controller file`:

```jsx title="package.json"
{
    "name" : "ecoflow-contrib-example-lower-case",
    "main": "./manifest.js",
    ...
    "ecoModule" : {
        "lowerCaseController": "lower-case-controller.js"
    }
}
```

This tells the runtime what are the controller files the module contains.

For more information about how to package your node, including requirements on naming and other properties that should be set before publishing your node, refer to the [packaging guide](https://example.com).

:::warning
Please do **not** publish this example node to npm!
:::

## lower-case-controller.js

```jsx title="lower-case-controller.js"
module.exports = async function () {
  this.payload.msg = this.payload.msg.toLowerCase();
  this.next();
};
```

The node is wrapped as a Node.js module. The module exports a async function that gets called when the runtime received any http request. The function is called with a build-in `this` argument that provides the module access to the http content of the runtime api.

The function calls the `this.next` is to inform the runtime to call the next node from the stack.

In this instance, the node fetch the msg from the http body as the payload and changes the payload to lower case and `assigning` it back to the payload for the next node.

If the node has any external module dependencies, they must be included in the dependencies section of its package.json file.

For more information about the runtime part of the node, see [here](https://example.com).

## manifest.js

```jsx title="manifest.js"
module.exports = () => ({
  name: "example",
  specs: [
    {
      name: "Lower Case",
      type: "Middleware",
      controller: "lowerCaseController",
    },
  ],
});
```

A node’s manifest file provides the following things:

- the name of the package group that is registered with the editor
- static inputs of the node definition.
- all node definition that is registered with the editor

In this example, the node has a controller `lowerCaseController` which get executed when the node is called as the http response controller.

For more information about the manifest part of the node, see [here](https://example.com).

## Testing your node in EcoFlowJS

Once you have created a basic node module as described above, you can install it into your EcoFLowJS runtime.

To test a node module locally the [`npm install <folder>`](https://docs.npmjs.com/cli/install) command can be used. This allows you to develop the node in a local directory and have it linked into a local EcoFlowJS install during development.

In your EcoFlowJS module directory, typically `~/.ecoflow/modules`, run:

```bash
npm install <location of node module>
```

For example, on Mac OS or Linux, if your node is located at `~/dev/ecoflow-contrib-example-lower-case` you would do the following:

```bash
cd ~/.ecoflow/modules
npm install ~/dev/ecoflow-contrib-example-lower-case
```

On Windows you would do:

```bash
cd C:\Users\my_name\.ecoflow\modules
npm install C:\Users\my_name\Documents\ecoflow-contrib-example-lower-case
```

This creates a symbolic link to your node module project directory in `~/.ecoflow/modules/node_modules` so that EcoFlowJS will discover the node when it starts. Any changes to the node’s file can be picked up by simply restarting EcoFlowJS.

:::tip
`npm` will automatically add an entry for your module in the `package.json` file located in your user directory. If you don't want it to do this, use the `--no-save` option to the `npm install` command.
:::
