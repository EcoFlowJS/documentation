---
sidebar_position: 2
---

# Command-line Usage

EcoFlowJS can be started using the command ecoflow. This command can take various arguments:

```bash
$ ecoflow [-?] [-h] [--configName config.json] [--userDir DIR] [--port PORT]

$ ecoflow admin <command> [args] [-?] [--userDir DIR] [--json]
```

:::note
Admin command-line tool is still under development.
:::

### Basic commands

| Options         | Type      | Description                                                       | Default     |
| :-------------- | :-------- | :---------------------------------------------------------------- | :---------- |
| `-h, --host`    | `string`  | **Optional**. Sets the TCP address of the server.                 | `127.0.0.1` |
| `-p, --port`    | `string`  | **Optional**. Sets the TCP port the runtime listens on.           | `4000`      |
| `--auth`        | `boolean` | **Optional**. Enable authentication mode for user authentication. | `false`     |
| `-D, --dev`     | `boolean` | **Optional**. Enable development mode.                            | `false`     |
| `-u, --user`    | `string`  | **Optional**. Sets the user directory of the runtime.             | `$HOME`     |
| `-v, --verbose` | `boolean` | **Optional**. Enable verbose output.                              | `false`     |
| `-V, --version` | `boolean` | **Optional**. Display the version of the runtime.                 |             |
| `-?, --help`    | `boolean` | **Optional**. Display the available commands.                     |             |

### Admin commands

:::note
Yet to be implemented.
:::
