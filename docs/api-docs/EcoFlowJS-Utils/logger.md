# Logger

Logger for the application environment that will be used to log to the application level log output for the application component that will be used to run the application.

## API Reference

### Logger

Kind: Exported class

_Example Basic usage:_

```ts
const { log } = ecoflow;
```

### Set Verbose

**log.setVerbose(verbose)** ⇒ [`Logger`](./logger)

Enable/Disable verbose logging for this transport instance and for all other transport instances that are running in this transport instance.

_Example Basic usage:_

```ts
log.setVerbose(false);
```

**Return**: The instance of Logger class.

**_Available arguments :_**

| Parameter | Type `(Default)`  | Description             |
| :-------- | :---------------- | :---------------------- |
| verbose   | boolean `(false)` | Enable/Disable verbose. |

### Update configs

**log.updateConfig([loggerOptions])** ⇒ [`Logger`](./logger)

Update the configuration of the logging configuration to the new configuration settings for the current transport instances.

_Example Basic usage:_

```ts
log.updateConfig({});
```

**Return**: The instance of Logger class.

**_Available arguments :_**

| Parameter       | Type                                      | Description                                     |
| :-------------- | :---------------------------------------- | :---------------------------------------------- |
| [loggerOptions] | [`loggerOptions`](./logger#loggeroptions) | object containing logger configuration settings |

### Logging

**log.log(message)** ⇒ [`Logger`](./logger)

Logs a message to the logger at provided level.

_Example Basic usage:_

```ts
import { LogLevel } from "@ecoflow/utils";

log.log({
  level: LogLevel.INFO,
  message: "Hello from EcoFlowJS",
});
```

**Return**: The instance of Logger class.

**_Available arguments :_**

| Parameter       | Type     | Description                            |
| :-------------- | :------- | :------------------------------------- |
| message.[level] | `number` | LogLevel at which message to be logged |
| message.message | `any`    | message to be logged                   |

### Error logging

**log.error(message)** ⇒ [`Logger`](./logger)

Logs a message to the logger at ERROR level.

_Example Basic usage:_

```ts
log.error("Hello from EcoFlowJS");
```

**Return**: The instance of Logger class.

**_Available arguments :_**

| Parameter | Type  | Description          |
| :-------- | :---- | :------------------- |
| message   | `any` | message to be logged |

### Warning logging

**log.warn(message)** ⇒ [`Logger`](./logger)

Logs a message to the logger at WARN level.

_Example Basic usage:_

```ts
log.warn("Hello from EcoFlowJS");
```

**Return**: The instance of Logger class.

**_Available arguments :_**

| Parameter | Type  | Description          |
| :-------- | :---- | :------------------- |
| message   | `any` | message to be logged |

### Info logging

**log.info(message)** ⇒ [`Logger`](./logger)

Logs a message to the logger at INFO level.

_Example Basic usage:_

```ts
log.info("Hello from EcoFlowJS");
```

**Return**: The instance of Logger class.

**_Available arguments :_**

| Parameter | Type  | Description          |
| :-------- | :---- | :------------------- |
| message   | `any` | message to be logged |

### Verbose logging

**log.verbose(message)** ⇒ [`Logger`](./logger)

Logs a message to the logger at VERBOSE level.

_Example Basic usage:_

```ts
log.verbose("Hello from EcoFlowJS");
```

**Return**: The instance of Logger class.

**_Available arguments :_**

| Parameter | Type  | Description          |
| :-------- | :---- | :------------------- |
| message   | `any` | message to be logged |

### Debug logging

**log.debug(message)** ⇒ [`Logger`](./logger)

Logs a message to the logger at DEBUG level.

_Example Basic usage:_

```ts
log.debug("Hello from EcoFlowJS");
```

**Return**: The instance of Logger class.

**_Available arguments :_**

| Parameter | Type  | Description          |
| :-------- | :---- | :------------------- |
| message   | `any` | message to be logged |

## Log Levels

- `ERROR`
- `WARNING`
- `INFO`
- `VERBOSE`
- `DEBUG`

_Assigned values:_

```ts
LogLevel {
  ERROR: 0,
  WARNING: 1,
  INFO: 2,
  VERBOSE: 4,
  DEBUG: 5,
}
```

_Example Basic usage:_

```ts
import { LogLevel } from "@ecoflow/utils";

log.updateConfig({
  level: LogLevel.INFO,
});
```

## TypeScript Properties

### `loggerOptions`

```ts
interface loggerOptions = {
  /**
   *  The `enabled` property in the `loggerOptions` type specifies whether
   * the logging functionality is enabled or not. It is a boolean value, where `true` means logging is
   * enabled and `false` means logging is disabled.
   */
  enabled: boolean;
  /**
   * The `level` property in the `loggerOptions` type specifies the logging
   * level, which indicates the severity of the log message.
   *   Level         value
   *   ERROR           0
   *   WARNING         1
   *   INFO            2
   *   VERBOSE         4
   *   DEBUG           5
   */
  level: number;
  /**
   * The `format` property in the `loggerOptions` type specifies the format
   * in which the log messages will be displayed or stored. It is an optional property, meaning it does
   * not have to be provided when creating a `loggerOptions` object. If provided, it would typically
   * contain a string that defines.
   * @default format `[ ${timestamp} ] : [ ${label} ] | [ ${level} ] : ${message}`
   */
  format?: string;
  /**
   * The `prettyPrint` property in the `loggerOptions` type specifies
   * whether the log messages should be formatted in indented way for better readability.
   * If `prettyPrint` is set to `true`, the log messages will be formatted nicely.
   * If it's set to `false`
   * @default prettyPrint is `false` */
  prettyPrint?: boolean;
  /**
   * The `label` property in the `loggerOptions` type is defining an object with two properties:
   * 1. `enable`: A boolean value that specifies whether this feature is enabled or not.
   * 2. `label`: An optional string property that can hold a label value.
   */
  label?: {
    enable: boolean;
    label?: string;
  };
  /**
   * The `console` property in the `loggerOptions` type specifies whether
   * logging to the console is enabled. If `console` is set to `true`, log messages will be output to the
   * console. If it's set to `false`, log messages will not be displayed on the console.
   */
  console?: boolean;
  /**
   * The `file` property in the `loggerOptions` type is defining options related to logging to a file.
   * Within the `file` property, there are sub-properties specified as follows:
   * 1. `enable`: A boolean value that specifies whether this feature is enabled or not.
   * 2. `location`: An optional string property that defines the location of log folder.
   * 3. `filename`: An optional string property that specifies the name of the log file.
   */
  file?: {
      /** Enable/Disable File logging option */
    enabled: boolean;

    /** Location of the directory where the logging file to be stored */
    location?: string;

    /** File name of logging File */
    filename?: string;
  };

  /** Under development */
  web?: {
    enabled: boolean;
    host?: string;
    port?: number;
    path?: string;
  };
```
