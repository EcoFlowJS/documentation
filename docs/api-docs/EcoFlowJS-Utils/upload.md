# Upload

This is responsible for filtering and uploading files to a specified
directory with customizable naming conventions.

## API Reference

### Upload

Kind: Exported class

**new Upload(files)**

Create an instance of the Upload class

_Example Basic usage:_

```ts
import { Upload } from "@ecoflow/utils";

const file = ctx.request.files; //reference of the file that uploaded.
const upload = new Upload(file);
```

**_Available arguments :_**

| Parameter | Type             | Description                              |
| :-------- | :--------------- | :--------------------------------------- |
| files     | `File \| File[]` | Object referencing to the uploaded files |

### Set Prefix

**upload.setPrefix(prefix)** ⇒ `Upload`

Sets a prefix for an upload files.

_Example Basic usage:_

```ts
upload.setPrefix("upload");
```

**Return**: The Upload instance after setting the file prefix.

**_Available arguments :_**

| Parameter | Type     | Description                              |
| :-------- | :------- | :--------------------------------------- |
| prefix    | `string` | Set a prefix for the upload files names. |

### Set Time Format

**upload.setTimeFormat(timeFormat)** ⇒ `Upload`

Sets the time format for an upload file.

_Example Basic usage:_

```ts
upload.setTimeFormat("HH-mm-ss");
```

**Return**: The Upload instance after setting the file time format.

**_Available arguments :_**

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| timeFormat | `string` | Text containing time format |

**_Available Time Format Representations :_**

| token | meaning                          | examples of output |
| :---- | :------------------------------- | :----------------- |
| HH    | 24-hour with zero-padding        | 23, 08             |
| H     | 24-hour                          | 23, 8              |
| hh    | 12-hour with zero-padding        | 11, 08             |
| h     | 12-hour                          | 11, 8              |
| A     | meridiem (uppercase)             | AM, PM             |
| mm    | minute with zero-padding         | 14, 07             |
| ss    | second with zero-padding         | 05, 10             |
| s     | second                           | 5, 10              |
| SSS   | millisecond (high accuracy)      | 753, 022           |
| SS    | millisecond (middle accuracy)    | 75, 02             |
| S     | millisecond (low accuracy)       | 7, 0               |
| Z     | time zone offset value           | +0100, -0800       |
| ZZ    | time zone offset value with dash | +01-00, -08-00     |

### Set Date Format

**upload.setDateFormat(dateFormat)** ⇒ `Upload`

Sets the date format for an upload file.

_Example Basic usage:_

```ts
upload.setDateFormat("DD-MM-YYYY");
```

**Return**: The Upload instance after setting the file date format.

**_Available arguments :_**

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| dateFormat | `string` | Text containing date format |

**_Available Date Format Representations :_**

| token | meaning                              | examples of output |
| :---- | :----------------------------------- | :----------------- |
| YYYY  | four-digit year                      | 0999, 2015         |
| YY    | two-digit year                       | 99, 01, 15         |
| Y     | four-digit year without zero-padding | 2, 44, 888, 2015   |
| MMMM  | month name (long)                    | January, December  |
| MMM   | month name (short)                   | Jan, Dec           |
| MM    | month with zero-padding              | 01, 12             |
| M     | month                                | 1, 12              |
| DD    | date with zero-padding               | 02, 31             |
| D     | date                                 | 2, 31              |
| dddd  | day of week (long)                   | Friday, Sunday     |
| ddd   | day of week (short)                  | Fri, Sun           |
| dd    | day of week                          | Fr, Su             |

### Set Upload Location

**upload.setUploadLocation(location)** ⇒ `Upload`

Sets the upload location and creates the directory if it doesn't exist.

**Return**: The Upload instance after setting the file location.

**_Available arguments :_**

| Parameter | Type     | Description                                             |
| :-------- | :------- | :------------------------------------------------------ |
| location  | `string` | Path of the directory where to store the uploaded files |

### Filter Upload files

**upload.filterTypes(types)** ⇒ `Upload`

Filters files based on their mimetype

**Return**: The Upload instance after filtering the files.

**_Available arguments :_**

| Parameter | Type                 | Description                                                      |
| :-------- | :------------------- | :--------------------------------------------------------------- |
| types     | `string \| string[]` | A single string or an array of strings containing filer mimetype |

### Filter Only Zips

**upload.filterZips()** ⇒ `Upload`

Filters out files that are of type **`ZIP`**

**Return**: The Upload instance after filtering the files.

### Upload files

**upload.upload()** ⇒ `Promise<string[]>`

Asynchronously uploads files, renames them with a timestamp and prefix, moves them to a specified directory, and returns an array of the uploaded file names.

**Return**: A `Promise` of string containing the uploaded names

## Static Methods

### Default Upload Directory

**getUploadDirectory()** ⇒ `string`

**Return**: The default Upload directory
