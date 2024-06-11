# EcoFlow

EcoFlow is the main entry point class of the application containing various components and runtime modules.

## Usage

_Example Basic usage:_

```ts
import EcoFlow from "@ecoflow/ecoflow";

const app = new EcoFlow();
app.start();
```

## Modules

- [`EcoServer`](./EcoServer)
- [`EcoRouter`](./EcoRouter)
- [`EcoContainer`](./EcoContainer)
- [`Config`](./Configuration)
- [`Database`](../EcoFlowJS-Database)
- [`EcoModule`](../EcoFlowJS-Module)
- [`EcoFlowEditor`](../EcoFlowJS-Flows)
- [`Service`](../EcoFlowJS-Services)
- [`Logger`](../EcoFlowJS-Utils/logger)

## API Reference

### EcoFlow

Kind: Exported class

**new EcoFlow([args])**

Create an instance of the EcoFlow class

_Example Basic usage:_

```ts
import EcoFlow from "@ecoflow/ecoflow";

const app = new EcoFlow();
app.start();
```

**_Available arguments :_**

| Parameter | Type `(Default)` | Description                              |
| :-------- | :--------------- | :--------------------------------------- |
| [args]    | `EcoOptions`     | An object containing optional arguments. |

### Methods

#### Starting the application

**start()** ⇒ `Promise<EcoFlow>`

Asynchronously starts the application by initializing various components and services.

Logs the start of the application and checks if an app needs to be created.

Initializes database connection, router, modules, flow editor, editor, system routes, passport authentication, and starts the server.

**Return:** A promise that resolves to the EcoFlow instance.

### Static Methods

| Tame            | Type              | Description                                                     |
| :-------------- | :---------------- | :-------------------------------------------------------------- |
| Version         | `string`          | The version of the package.                                     |
| processCommands | `ProcessCommands` | An object with process commands and their corresponding values. |

### Properties

| Tame       | Type                                  | Description                                                                                             |
| :--------- | :------------------------------------ | :------------------------------------------------------------------------------------------------------ |
| \_         | `typeof lodash`                       | A reference to the lodash library. Official documentation can be found [here](https://lodash.com/docs/) |
| isAuth     | `boolean`                             | A boolean flag indicating whether the authenticated mode is enabled or not.                             |
| server     | [`EcoServer`](./EcoServer)            | Represents an instance of an EcoServer.                                                                 |
| router     | [`EcoRouter`](./EcoRouter)            | Represents an instance of the EcoRouter.                                                                |
| container  | [`EcoContainer`](./EcoContainer)      | Represents an instance of the EcoContainer.                                                             |
| socket     | `Server`                              | Represents a socket server instance. Official documentation can be found [here](https://socket.io/docs) |
| config     | [`Config`](./Configuration)           | Represents the configuration object.                                                                    |
| database   | [`Database`](../EcoFlowJS-Database)   | Represents the Database instance.                                                                       |
| ecoModule  | [`EcoModule`](../EcoFlowJS-Module)    | Represents the EcoModule instance.                                                                      |
| flowEditor | [`EcoFlowEditor`](../EcoFlowJS-Flows) | Represents the EcoFlowEditor instance.                                                                  |
| service    | [`Service`](../EcoFlowJS-Services)    | Represents the Service instance.                                                                        |
| log        | [`Logger`](../EcoFlowJS-Utils/logger) | Represents the Logger instance used for logging.                                                        |
| Version    | `string`                              | Represents the version of the software.                                                                 |

## TypeScript Properties

### `ProcessCommands`

```ts
interface ProcessCommands {
  STOP: string;
  RESTART: string;
}
```

### `EcoOptions`

```ts
interface EcoOptions {
  /**
   * An optional ICommand object that represents a command line interface command.
   */
  cli?: ICommand;
  /**
   * An index signature indicating that an object may have any number of properties
   * with string keys and any corresponding values.
   */
  [key: string]: any;
}
```

### `ICommand`

```ts
interface ICommand {
  /** The host of the server at which the server should run. */
  Host?: string;

  /** The port of server to run on. */
  Port?: number;

  /** Enable/Disable authentication mode. */
  auth?: boolean;

  /** The configuration directory of the application. */
  configDir?: string;

  /** TThe name of the configuration file. */
  configName?: string;

  /** The root directory where all configuration will be stored. */
  userDir?: string;

  /** The logging configuration for the application */
  logging?: loggerOptions;

  /** Enable/Disable running the application in Development environment. */
  dev?: boolean;
}
```
