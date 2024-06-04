# JSON Builder

JSON provides methods for stringify, parsing, and working with JSON data, including writing JSON data to a file and reading JSON data from a file.

## API Reference

### JsonBuilder

Kind: Exported class

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

const jsonString = Builder.JSON.stringify({
  hello: "world",
});

const parsedJSON = Builder.JSON.parse(jsonString);

console.log(jsonString);
console.log(parsedJSON);
```

### Stringify

**stringify(value,[replacer],[space])** ⇒ `string`

Returns a JSON string representation of the object.

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

const jsonString = Builder.JSON.stringify({
  hello: "world",
});

console.log(jsonString);
```

**Return**: A JSON string representation of the object.

**_Available arguments :_**

| Parameter  | Type                                                                          | Description                                                                                                       |
| :--------- | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| value      | `any`                                                                         | Enable/Disable verbose.                                                                                           |
| [replacer] | `(number \| string)[] \| null \| (this: any, key: string, value: any) => any` | Function or array of string or number to perform replace                                                          |
| [space]    | `string \| number`                                                            | Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read. |

### Parse

**parse(value,[reviver])** ⇒ `any`

Parses a JSON string and returns the parsed result.

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

const jsonString = '{"hello":"world"}';
const parsedJSON = Builder.JSON.parse(jsonString);

console.log(parsedJSON);
```

**Return**: A JSON object representation of the string.

**_Available arguments :_**

| Parameter | Type                                          | Description                                           |
| :-------- | :-------------------------------------------- | :---------------------------------------------------- |
| value     | `string`                                      | String JSON data that you want to parse into a object |
| [reviver] | `(this: any, key: string, value: any) => any` | A function that transforms the results.               |

### Save to file

**toFile(filePath, value, options, [replacer], [space])** ⇒ `void`

Parses a JSON string and returns the parsed result.

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

Builder.JSON.toFile(__dirname + "/file.json", {
  hello: "world",
});
```

**Return**: A JSON object representation of the string.

**_Available arguments :_**

| Parameter  | Type                                                                          | Description                                                                                                       |
| :--------- | :---------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| filePath   | `string`                                                                      | JSON file path to save the data to.                                                                               |
| value      | `string`                                                                      | String JSON data that you want to parse into a object                                                             |
| options    | [`JsonToFileOptions`](./json#jsontofileoptions)                               | File save options. **Default** : `{ recursive: false, mode: "none" }`                                             |
| [replacer] | `(number \| string)[] \| null \| (this: any, key: string, value: any) => any` | Function or array of string or number to perform replace                                                          |
| [space]    | `string \| number`                                                            | Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read. |

### Parse from file

**fromFile(filePath,[reviver])** ⇒ `any`

Reads a JSON file from a specified path and parses its content.

_Example Basic usage:_

```ts
import { Builder } from "@ecoflow/utils";

const parsedJSON = Builder.JSON.fromFile(__dirname + "/file.json");

console.log(parsedJSON);
```

**Return**: A JSON object representation from json file.

**_Available arguments :_**

| Parameter | Type                                          | Description                             |
| :-------- | :-------------------------------------------- | :-------------------------------------- |
| filePath  | `string`                                      | JSON file path to read from.            |
| [reviver] | `(this: any, key: string, value: any) => any` | A function that transforms the results. |

## TypeScript Properties

### `JsonToFileOptions`

```ts
interface JsonToFileOptions {
  /** Create directory recursive if not exists. */
  recursive?: boolean;

  /** Directory create mode*/
  mode?: "overwrite" | "append" | "none";
}
```
