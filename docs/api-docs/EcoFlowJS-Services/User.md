# User

UserService a service class that methods for managing users information on a database using either Knex or Mongoose.## Usage

_Example Basic usage:_

```ts
const { service } = ecoflow;
const { UserService } = service;

const users = UserService.getUserInfos();

console.log(users);
```

## API Reference

### Create User

**createUser(userInfo, [isAdmin])** ⇒ `Promise<ApiResponse>`

Creates a new user with the provided user information.

**Return:** A promise that resolves to an ApiResponse object.

**_Available arguments :_**

| Parameter | Type `(Default)`      | Description                              |
| :-------- | :-------------------- | :--------------------------------------- |
| userInfo  | `userTableCollection` | The user information object.             |
| [isAdmin] | `boolean` `(false)`   | Flag indicating if the user is an admin. |

### Update User

#### **upddateUser(username, update)** ⇒ `Promise<UserInfo>`

Updates a user in the database with the provided username and update information.

**Return:** The updated user information.

**_Available arguments :_**

| Parameter | Type                  | Description                             |
| :-------- | :-------------------- | :-------------------------------------- |
| username  | `string`              | The username of the user to update.     |
| update    | `userTableCollection` | The information to update for the user. |

#### **upddateUser(username, update, [isIgnoreActive])** ⇒ `Promise<UserInfo>`

Updates a user in the database with the provided username and update information.

**Return:** The updated user information.

**_Available arguments :_**

| Parameter        | Type `(Default)`      | Description                                   |
| :--------------- | :-------------------- | :-------------------------------------------- |
| username         | `string`              | The username of the user to update.           |
| update           | `userTableCollection` | The information to update for the user.       |
| [isIgnoreActive] | `boolean` `(false)`   | Flag to ignore the active status of the user. |

### Update Password

#### **updatePassword(username, oldPassword, password)** ⇒ `Promise<UserInfo>`

Asynchronously updates the password for a user.

**Return:** A promise that resolves to the updated user information.

**_Available arguments :_**

| Parameter   | Type     | Description                   |
| :---------- | :------- | :---------------------------- |
| username    | `string` | The username of the user.     |
| oldPassword | `string` | The old password of the user. |
| password    | `string` | The new password to set.      |

#### **updatePassword(username, oldPassword, password, [ignoreCheck])** ⇒ `Promise<UserInfo>`

Asynchronously updates the password for a user.

**Return:** A promise that resolves to the updated user information.

**_Available arguments :_**

| Parameter     | Type `(Default)`    | Description                     |
| :------------ | :------------------ | :------------------------------ |
| username      | `string`            | The username of the user.       |
| oldPassword   | `string`            | The old password of the user.   |
| password      | `string`            | The new password to set.        |
| [ignoreCheck] | `boolean` `(false)` | Flag to ignore password checks. |

### Fetch User Informations

#### **getUserInfos()** ⇒ `Promise<GetUserInfo>`

Retrieves all user information.

**Return:** A promise that resolves to an object containing user information.

#### **getUserInfos(username)** ⇒ `Promise<GetUserInfoSingle>`

Retrieves user information based on the provided username.

**Return:** A promise that resolves to an object containing user information.

**_Available arguments :_**

| Parameter | Type `(Default)` | Description                               |
| :-------- | :--------------- | :---------------------------------------- |
| username  | `string`         | The username to retrieve information for. |

#### **getUserInfos(username, [isAll])** ⇒ `Promise<GetUserInfoSingle>`

Retrieves user information based on the provided username.

**Return:** A promise that resolves to an object containing user information.

**_Available arguments :_**

| Parameter | Type `(Default)`    | Description                                                |
| :-------- | :------------------ | :--------------------------------------------------------- |
| username  | `string`            | The username to retrieve information for.                  |
| isAll     | `boolean` `(false)` | Flag to indicate whether to retrieve all user information. |

### Migrate Users

**migrateUsers(userInfo)** ⇒ `Promise<void>`

Migrates user information to the database based on the type of database connection.

If the connection is MongoDB, the user information is created using the Mongoose.

If the connection is Knex, the user information is inserted into the database after converting roles to a JSON string.

**Return:** A promise that resolves when the migration is complete.

**_Available arguments :_**

| Parameter | Type                  | Description                      |
| :-------- | :-------------------- | :------------------------------- |
| userInfo  | `userTableCollection` | The user information to migrate. |

### Check User Exist

**isUserExist(userId)** ⇒ `Promise<boolean>`

Checks if a user with the given userId exists in the database.

**Return:** A promise that resolves to true if the user exists, false otherwise.

**_Available arguments :_**

| Parameter | Type     | Description                                |
| :-------- | :------- | :----------------------------------------- |
| userId    | `string` | The id of the user to check for existence. |

### Check User Active

**isActiveUser(userId)** ⇒ `Promise<boolean>`

Checks if a user is active based on the userId provided.

**Return:** A promise that resolves to a boolean indicating if the user is active.

**_Available arguments :_**

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| userId    | `string` | The id of the user to check for activity. |

### Fetch Usernames

#### **getUsernames()** ⇒ `Promise<string[]>`

Retrieves an array of usernames from the database.

**Return:** A promise that resolves to an array of usernames.

#### **getUsernames([isSystem])** ⇒ `Promise<string[]>`

Retrieves an array of usernames from the database based on the specified conditions.

**Return:** A promise that resolves to an array of usernames.

**_Available arguments :_**

| Parameter | Type `(Default)`    | Description                                             |
| :-------- | :------------------ | :------------------------------------------------------ |
| isSystem  | `boolean` `(false)` | Flag to indicate if the usernames are for system users. |

### Check No User Exists

**isNoUser()** ⇒ `Promise<boolean>`

Checks if there are any users in the database.

**Return:** A Promise that resolves to a boolean indicating whether there are no users in the database.

## TypeScript Properties

### `ApiResponse`

```ts
interface ApiResponse {
  /**
   * Optional boolean flag indicating the presence of an error.
   * @type {boolean}
   */
  error?: boolean;

  /**
   * Optional boolean flag indicating the success status.
   */
  success?: boolean;

  /**
   * An optional payload of any type.
   */
  payload?: any;
}
```

### `userTableCollection`

```ts
interface userTableCollection extends UserInfo {
  /** Password for the user. */
  password?: string;
}
```

### `UserInfo`

```ts
interface UserInfo {
  /** The unique identifier of the user. */
  _id?: string;

  /** The name of the user. */
  name?: string;

  /** The username of the user. */
  username?: string;

  /** An array of roles assigned to the user. */
  roles?: Array<any>;

  /** Indicates if the user is active. */
  isActive?: boolean;

  /** The email address of the user. */
  email?: string;

  /** The old password of the user. */
  oldPassword?: string;

  /** Indicates if the user is permanent */
  isPermanent?: boolean;

  /** TimeSpan of the user creation  */
  created_at?: Date;

  /** TimeSpan of the user updation */
  updated_at?: Date | Knex.Raw;
}
```

### `GetUserInfo`

```ts
interface GetUserInfo {
  /** Indicates if user information is available. */
  isAvailable: boolean;

  /** An array of user information. */
  user?: userTableCollection[];
}
```

### `GetUserInfoSingle`

```ts
interface GetUserInfoSingle {
  /** Indicates if user information is available. */
  isAvailable: boolean;

  /** The user information. */
  user?: userTableCollection;
}
```
