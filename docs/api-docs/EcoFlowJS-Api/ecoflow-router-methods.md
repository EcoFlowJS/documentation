---
sidebar_position: 2
---

# EcoFlowJS Router Methods

The EcoFlowJS Router can accessed by global ecoflow instance of the application

```ts
const { router } = ecoflow;
const ecoflowRouter = router.systemRouter;
```

**Alternative method**

```ts
const ecoflowRouter = ecoflow.router.systemRouter;
```

## Available Methods

:::tip
The Router is an inherited instance of `koa-router` and a more appropriate can be found [here](https://github.com/koajs/router/blob/HEAD/API.md)
:::
