# CLI Service

CLI service that provides methods to interact with the main service and responsible for boot up of the application.

## API Reference

### CliService

Kind: Exported class

**new CliService()**

Create an instance of the CliService class

_Example Basic usage:_

```ts
import { CommanderCli } from "@ecoflow/cli";

const commander = new CommanderCli();
const cliService = commander.CliService;
```

### Start Service

**cliService.startService([args])** ⇒ `void`

Starts the service EcoFlowJS service with the given command arguments.

_Example Basic usage:_

```ts
cliService.startService({ auth: true, dev: true });
```

**_Available arguments :_**

| Parameter | Type                                 | Description                        |
| :-------- | :----------------------------------- | :--------------------------------- |
| [args]    | [`ICommand`](./cli-service#icommand) | **Optional**. Command options list |

### Stop Service

**cliService.stopService()** ⇒ `void`

Stops the service if it is currently running and exit the main process too.

_Example Basic usage:_

```ts
cliService.stopService();
```

### Restart Service

**cliService.restartService([args])** ⇒ `void`

Restarts the service by setting the service status to `Restarting`, stopping the service, and then starting the service with the provided arguments.

_Example Basic usage:_

```ts
cliService.restartService({ auth: true, dev: true });
```

**_Available arguments :_**

| Parameter | Type                                 | Description                        |
| :-------- | :----------------------------------- | :--------------------------------- |
| [args]    | [`ICommand`](./cli-service#icommand) | **Optional**. Command options list |

### Status

**cliService.serviceStatus** ⇒ `Stopped | Running | Restarting`

kind: `Stopped | Running | Restarting`

Return the current service status, which can be one of **`Stopped`**, **`Running`**, or **`Restarting`**.

## TypeScript Properties

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
