# Commander

Commander service that is responsible for handling command line interface operations

## API Reference

### CommanderCli

Kind: Exported class

**new CommanderCli()**

Create an instance of the CommanderCli class

_Example Basic usage:_

```code
import { CommanderCli } from "@ecoflow/cli";

const commander = new CommanderCli();
```

### Parse Arguments

**commander.parseArgs()**

Parse the command line arguments.

```code
commander.parseArgs();
```

**Return**: The [`CommanderCli`](./commander) instance after parsing the arguments

### Set Uses Message

**commander.usesMsgs(str)**

Sets the usage message for the Commander CLI command

```code
commander.usesMsgs(
  `[-?] [-h] [--settings settings.js] [--userDir DIR]
               [--port PORT] [--title TITLE] [--safe] [flows.json]

       ecoflow admin <command> [args] [-?] [--userDir DIR] [--json]`
)
```

**Return**: The [`CommanderCli`](./commander) instance.

**_Available arguments :_**
| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| str | `string` | The usage message to be displayed |

### Arguments

**commander.args**

Return an object containing the arguments stored in it.

```code
const args = commander.args;

console.log(args);
```

**Return**: `object`

### CLI Service

**commander.CliService**

Returns an instance of the [`CliService`](./cli-service) class.
