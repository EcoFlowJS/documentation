# Flow and Deployment

EcoFlowJS allows you to configure multiple flows in a single workflow. You can use multiple flows in order to separate flows based on the works flow you want to configure and much more.

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/flow-editor.png',
    dark: '/img/assets/flow-editor-dark.png',
  }}
/>

## Create Flow

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/flow-editor-create-flow.png',
    dark: '/img/assets/flow-editor-create-flow-dark.png',
  }}
/>

To create a flow follow the following:

1. Click the **Create Flow** button.
2. Enter the **Flow Name** and then click the **Confirm** button.

:::note
Every flow name must be unique.
:::

## Deployment

To deploy a flow just Click the **Deploy** button on the **Header** and wait for the deployment to complete.

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/flow-deployment.png',
    dark: '/img/assets/flow-deployment-dark.png',
  }}
/>

There are also multiple way for deploying of a flow:

| Method         | Description                                    |
| -------------- | ---------------------------------------------- |
| Full Deploy    | Deploy all flows available in the flow editor. |
| Current Flow   | Deploy the current flow you are working on.    |
| Modified Nodes | **`Still under development.`**                 |
| Restart Flow   | Restart the flow editor runtime.               |
