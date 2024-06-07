---
sidebar_position: 4
---

# Controllers

Controllers are a just a simple function that executes when a any request is made to the route is corresponding to.

Controller has a context extended with the [EcoContext](#ecocontext).

## Example

_Basic example of a simple controller_

```js
function controller() {
  this.payload.msg = "hello world";
  this.next();
}

module.exports = controller;
```

:::warning
Do `not` use anonymous function instead use the `function` keyword to define a function as shown in the example above.
:::

## EcoContext

A EcoContext inheritance of Koa Context that encapsulates node's `request` and `response` objects into a single object which provides many helpful methods for writing web applications and APIs. These operations are used so frequently in HTTP server development that they are added at this level instead of a higher level framework, which would force middleware to re-implement this common functionality.

A `Context` is created per request, and is referenced in middleware as the `receiver`, or the inherited `context` of the middleware, as shown in the following snippet:

```js
function controller() {
  this; // is the Context
  this.request; // is a Koa Request
  this.response; // is a Koa Response
}
```

## EcoContext API Reference

### payload

The payload of the EcoContext.

    > **Properties**
    >
    > ```ts
    > interface EcoContextPayload {
    > /** Optional message field in the payload. Default: "" */
    > msg?: any;
    >
    > /** Additional key-value pairs that can be included in the payload. */
    > [key: string]: any;
    > }
    > ```

### inputs

Optional inputs for the EcoContext.

    > **Properties**
    >
    > Object containing a key-value pair
    >
    > ```ts
    > {
    >    [key: string]: any
    > }
    > ```
    >
    > `key` represents the `name` of the input field.
    >
    > `value` represents the `value` of the input field.

### moduleDatas

Optional module data for the EcoContext.

    > **Properties**
    >
    > ```ts
    > interface FlowsNodeDataTypes {
    > /** The ID of the EcoModule. */
    > moduleID: EcoModuleID;
    >
    > /** The label of the node. */
    > label: string;
    >
    > /** Indicates if the node is configured. */
    > configured: boolean;
    >
    > /** Indicates if the node is disabled. */
    > disabled: boolean;
    >
    > /** The description of the node. */
    > description: string;
    >
    > /** The appearance configurations of the node. */
    > appearance: NodeAppearanceConfigurations;
    >
    > /** Optional icon component for the node. */
    > icon?: FC<HTMLAttributes<SVGElement>>;
    >
    > /** Indicates if the node is connected. */
    > isConnectable?: number | boolean;
    >
    > /** Indicates if the node is connected has any errors. */
    > isError?: boolean;
    >
    > /** Indicates if the node is open. */
    > openDrawer?: (
    >   label: string,
    >   configured: boolean,
    >   disabled: boolean,
    >   description: string,
    >   appearance: NodeAppearanceConfigurations
    > ) => void;
    > }
    > ```

### next

A function to proceed to the next middleware in the request stack.

### Koa Context

:::tip
Other APIs Reference are inherited from the KoaJS library and official documentation can be found [here](https://koajs.com/#context).
:::
