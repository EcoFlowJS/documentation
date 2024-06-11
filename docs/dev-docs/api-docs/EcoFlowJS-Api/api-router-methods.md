---
sidebar_position: 3
---

# API Router Methods

The API Router can accessed by global ecoflow instance of the application

```ts
const { router } = ecoflow;
const apiRouter = router.apiRouter;
```

**Alternative method**

```ts
const apiRouter = ecoflow.router.apiRouter;
```

## Available Methods

:::tip
The Router is an inherited instance of `koa-router` and a more appropriate can be found [here](https://github.com/koajs/router/blob/HEAD/API.md)
:::
