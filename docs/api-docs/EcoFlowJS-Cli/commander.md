# Commander

Commander service that is responsible for handling command line interface operations

## API Reference

### CommanderCli

Kind: Exported class

**new CommanderCli()**

Create an instance of the CommanderCli class

_Example Basic usage:_

```ts
import { CommanderCli } from "@ecoflow/cli";

const commander = new CommanderCli();
```

### Parse Arguments

**commander.parseArgs()** ⇒ [`CommanderCli`](./commander)

Parse the command line arguments.

```ts
commander.parseArgs();
```

**Return**: The [`CommanderCli`](./commander) instance after parsing the arguments

### Set Uses Message

**commander.usesMsgs(str)** ⇒ [`CommanderCli`](./commander)

Sets the usage message for the Commander CLI command

_Example Basic usage:_

```ts
commander.usesMsgs(
  `[-?] [-h] [--settings settings.js] [--userDir DIR]
               [--port PORT] [--title TITLE] [--safe] [flows.json]

       ecoflow admin <command> [args] [-?] [--userDir DIR] [--json]`
);
```

**Return**: The [`CommanderCli`](./commander) instance.

**_Available arguments :_**
| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| str | `string` | The usage message to be displayed |

### Arguments

**commander.args** ⇒ `object`

Return an object containing the arguments stored in it.

_Example Basic usage:_

```ts
const args = commander.args;

console.log(args);
```

**Return**: `object`

### CLI Service

**commander.CliService** ⇒ [`CliService`](./cli-service)

Returns an instance of the [`CliService`](./cli-service) class.
