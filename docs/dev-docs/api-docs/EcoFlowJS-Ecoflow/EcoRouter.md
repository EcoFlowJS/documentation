# EcoRouter

EcoRouter is a class responsible for registering routes to KoaJS runtime.

## Static Method

### Create Router

**createRouter([opt])** ⇒ `KoaRouter`

Creates a new instance of KoaRouter with the provided options.

**Return:** A new instance of KoaRouter

**_Available arguments :_**

| Parameter | Type            | Description                               |
| :-------- | :-------------- | :---------------------------------------- |
| [opt]     | `RouterOptions` | Optional options to configure the router. |

## Properties

| Parameter    | Type                     | Description                                                         |
| :----------- | :----------------------- | :------------------------------------------------------------------ |
| systemRouter | `KoaRouter \| undefined` | Represents a KoaRouter instance that handles system routes.         |
| apiRouter    | `KoaRouter`              | The API router instance for handling API routes in the application. |

## TypeScript Properties

:::tip
The Router is an inherited instance of `koa-router` and a more appropriate can be found [here](https://github.com/koajs/router/blob/HEAD/API.md)
:::
