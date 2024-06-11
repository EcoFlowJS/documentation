# Configuration

Config is a class that extends Koa responsible for the configuration for the application environment that will be used to configure the application environment for the application component that will be used to run the application.

## Usage

The config class can be accessed by global ecoflow instance of the application

_Example Basic usage:_

```ts
const { config } = ecoflow;

console.log(config._config);
```

## Default configuration

:::note
The default configuration can be found **_[here](./Default-Configuration)_**
:::

## API Reference

### Get Configs

**get(key)** ⇒ `Object | String`

Returns the configuration object for a given key. If the configuration object is present it will be returned else will be undefined.

**Return:** Object containing configuration information.

_Example Basic usage:_

```ts
const { config } = ecoflow;

const userDirectory = config.get("userDir");

console.log(userDirectory);
```

**_Available arguments :_**

| Parameter | Type                  | Description                |
| :-------- | :-------------------- | :------------------------- |
| key       | `keyof configOptions` | Name of the configuration. |

### Set Configs

**setConfig(cfg)** ⇒ `Promise<configOptions>`

Configuration Settings to save or update to the config file in the config directory.

**Return:** A promise resolving all configuration information.

_Example Basic usage:_

```ts
const { config } = ecoflow;

const updatedConfig = await config.setConfig({
  Host: "127.0.0.1",
  Port: 4000,
});

console.log(userDirectory);
```

**_Available arguments :_**

| Parameter | Type            | Description                                    |
| :-------- | :-------------- | :--------------------------------------------- |
| cfg       | `configOptions` | Configuration Settings to up stored or update. |

### Fetch Default Configuration

**getDefaultConfigs()** ⇒ `configOptions`

Returns the Default configuration settings.

**Return:** A object containing default configuration information.

_Example Basic usage:_

```ts
const { config } = ecoflow;

const defaultConfigs = config.getDefaultConfigs();

console.log(defaultConfigs);
```

### Create Configuration Backup

**createBackup()** ⇒ `Promise<void>`

Asynchronously creates a backup of the configuration file.

**Return:** A promise that resolves when the backup of the configuration is successfully created.

### List Backed Configuration

**listBackupConfigs()** ⇒ `Promise<string[]>`

List all the available backup configs available.

**Return:** A promise resolving array containing names of backup configurations files.

### Delete Backed File

**deleteConfigFile(ConfigFileName)** ⇒ `Promise<string[]>`

Delete the backup config file if it exists and returns list of backup configurations present in the config directory.

**Return:** A promise resolving array containing names of backup configurations files.

**_Available arguments :_**

| Parameter      | Type     | Description                                     |
| :------------- | :------- | :---------------------------------------------- |
| ConfigFileName | `string` | Name of the backed Configuration to be deleted. |

## Properties

| Parameter         | Type            | Description                                                  |
| :---------------- | :-------------- | :----------------------------------------------------------- |
| \_config          | `configOptions` | Global configuration settings of the application.            |
| getConfigPath     | `string`        | The path of the directory containing the configuration file. |
| getConfigFileName | `string`        | The base name of the configuration file.                     |

## TypeScript Properties

### `configOptions`

```ts
interface configOptions {
  /**
   * Optional property that specifies the directory of the user.
   * @type {string}
   */
  userDir?: string;

  /**
   * The directory path for the module. Optional parameter.
   */
  moduleDir?: string;

  /**
   * Optional parameter that specifies the direction of the flow.
   * @type {string}
   */
  flowDir?: string;

  /**
   * The directory where environment variables are stored.
   * @type {string | undefined}
   */
  envDir?: string;

  /**
   * Optional property representing the directory of the database.
   * @type {string | undefined}
   */
  DB_Directory?: string;

  /**
   * Optional configuration for Flow nodes.
   * @type {string}
   */
  flowNodeConfigurations?: string;

  /**
   * Optional property that defines the flow node definitions.
   */
  flowNodeDefinitions?: string;

  /**
   * Optional property that represents the connections of a flow node.
   * @type {string | undefined}
   */
  flowNodeConnections?: string;

  /**
   * Optional parameter to specify if the flow file should be formatted prettily.
   * @type {boolean}
   */
  flowFilePretty?: boolean;

  /**
   * Optional property representing the host string.
   */
  Host?: string;

  /**
   * The port number for a network connection, can be either a string or a number.
   */
  Port?: string | number;

  /**
   * Configuration options for HTTPS settings.
   * @property {boolean} enabled - Indicates if HTTPS is enabled or not.
   * @property {string} [key] - The path to the private key file for HTTPS.
   * @property {string} [cert] - The path to the certificate file for HTTPS.
   */
  https?: {
    /** Indicates if HTTPS is enabled or not. */
    enabled: boolean;

    /** The path to the private key file for HTTPS. */
    key?: string;

    /** The path to the certificate file for HTTPS. */
    cert?: string;
  };

  /**
   * An optional parameter that specifies the CORS configuration for HTTP requests.
   * @type {httpCors}
   */
  httpCors?: httpCors;

  /**
   * Optional configuration options for the API router.
   */
  apiRouterOptions?: RouterOptions;

  /**
   * Represents the static file or directory to serve over HTTP.
   * It can be a string representing a single file path or an array of objects
   * with 'path' and 'root' properties representing multiple file paths and their root directories.
   * @type {string | {path: string, root: string}[]}
   */
  httpStatic?:
    | string
    | {
        path: string;
        root: string;
      }[];

  /**
   * Optional property that specifies the root directory for serving static files over HTTP.
   * @type {string | undefined}
   */
  httpStaticRoot?: string;

  /**
   * Optional parameter that specifies the language of the Application.
   * @type {string}
   */
  lang?: string;

  /**
   * Optional diagnostics settings object.
   * @property {boolean} [enabled] - Whether diagnostics are enabled.
   * @property {boolean} [ui] - Whether UI diagnostics are enabled.
   */
  diagnostics?: {
    /**  Whether diagnostics are enabled. */
    enabled?: boolean;

    /** Whether UI diagnostics are enabled. */
    ui?: boolean;
  };

  /**
   * An optional parameter for specifying logger options.
   * @type {loggerOptions}
   */
  logging?: loggerOptions;

  /**
   * Configuration options for the editor.
   * @property {boolean} enabled - Indicates if the editor is enabled.
   * @property {boolean} [admin] - Indicates if the user has admin privileges.
   * @property {boolean} [flow] - Indicates if flow is enabled.
   * @property {boolean} [schema] - Indicates if schema is enabled.
   */
  editor?: {
    /** Indicates if the editor is enabled. */
    enabled: boolean;

    /** Indicates if the user has admin privileges. */
    admin?: boolean;

    /** Indicates if flow is enabled. */
    flow?: boolean;

    /** Indicates if schema is enabled. */
    schema?: boolean;
  };

  /**
   * Optional database configuration object.
   * @property {DB_Drivers} driver - The driver to use for the database connection.
   * @property {ConnectionConfig} configuration - The configuration settings for the database connection.
   */
  database?: {
    driver: DB_Drivers;
    configuration: ConnectionConfig;
  };
}
```

### `httpCors`

```ts
interface httpCors extends koaCors.Options {
  enabled: boolean;
}
```
