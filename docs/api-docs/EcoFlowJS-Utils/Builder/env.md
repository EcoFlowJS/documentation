# ENV Builder

ENV provides methods for generating, updating, and managing environment variables for system and user environments.

## API Reference

### EnvBuilder

Kind: Exported class

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

await Builder.ENV.setUserEnv(__dirname, [
  {
    name: "NODE_ENV",
    value: "development",
  },
]);
```

### Generate System Environments

**generateSystemEnv(envPath, ENV)** ⇒ `Promise<void>`

Generates a system environment file based on the provided environment variables

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

await Builder.ENV.generateSystemEnv(__dirname, [
  {
    name: "NODE_ENV",
    value: "development",
  },
]);
```

**_Available arguments :_**

| Parameter | Type                                    | Description                                                       |
| :-------- | :-------------------------------------- | :---------------------------------------------------------------- |
| envPath   | `string`                                | Represents the path where the environment file will be generated. |
| ENV       | [`Environment[]`](./env.md#environment) | An array of `Environment`                                         |

### Generate User Environments

**generateUserEnv(envPath, ENV)** ⇒ `Promise<void>`

Generates a user environment file based on the provided environment variables

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

await Builder.ENV.generateUserEnv(__dirname, [
  {
    name: "NODE_ENV",
    value: "development",
  },
]);
```

**_Available arguments :_**

| Parameter | Type                                    | Description                                                       |
| :-------- | :-------------------------------------- | :---------------------------------------------------------------- |
| envPath   | `string`                                | Represents the path where the environment file will be generated. |
| ENV       | [`Environment[]`](./env.md#environment) | An array of `Environment`                                         |

### Fetch System Environments

**getSystemEnv([envID])** ⇒ `Environment[] | Environment | null`

Retrieves system environment variables based on the provided ID or returns a list of all system environment variables if no ID is specified.

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

const envs = Builder.ENV.getSystemEnv();

console.log(envs);
```

**_Available arguments :_**

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| [envID]   | `string` | Name of the environment variable |

### Fetch User Environments

**getUserEnv([envID])** ⇒ `Environment[] | Environment `

Retrieves user environment variables based on the provided ID or returns a list of all user environment variables if no ID is specified.

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

const envs = Builder.ENV.getUserEnv();

console.log(envs);
```

**_Available arguments :_**

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| [envID]   | `string` | Name of the environment variable |

### Set System Environments

**setSystemEnv(envPath, ENV, fileOverWrite)** ⇒ `Promise<void>`

Sets system environment variables based on the provided Environments to env file in the directory provided.

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

await Builder.ENV.setSystemEnv(__dirname, [
  {
    name: "NODE_ENV",
    value: "development",
  },
]);
```

**_Available arguments :_**

| Parameter     | Type `(Default)`                        | Description                                                          |
| :------------ | :-------------------------------------- | :------------------------------------------------------------------- |
| envPath       | `string`                                | Represents the path where the environment file will be generated.    |
| ENV           | [`Environment[]`](./env.md#environment) | An array of `Environment`                                            |
| fileOverWrite | `boolean` `(false)`                     | whether the existing file should be overwritten if it already exists |

### Set User Environments

**setUserEnv(envPath, ENV, fileOverWrite)** ⇒ `Promise<void>`

Sets user environment variables based on the provided Environments to env file in the directory provided.

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

await Builder.ENV.setUserEnv(__dirname, [
  {
    name: "NODE_ENV",
    value: "development",
  },
]);
```

**_Available arguments :_**

| Parameter     | Type `(Default)`                        | Description                                                          |
| :------------ | :-------------------------------------- | :------------------------------------------------------------------- |
| envPath       | `string`                                | Represents the path where the environment file will be generated.    |
| ENV           | [`Environment[]`](./env.md#environment) | An array of `Environment`                                            |
| fileOverWrite | `boolean` `(false)`                     | whether the existing file should be overwritten if it already exists |

### Fetch System Environment Variables Names

**getSystemEnvNameList()** ⇒ `string[]`

Returns an array of environment variable names of the system environments.

### Fetch User Environment Variables Names

**getUserEnvNameList()** ⇒ `string[]`

Returns an array of environment variable names of the user environments.

## TypeScript Properties

### `Environment`

```ts
interface Environment {
  /** Name of the Environment variable */
  name: string;

  /** Value of the Environment variable */
  value: string;
}
```
