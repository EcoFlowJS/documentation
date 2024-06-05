# Token

TokenServices a service class that provides methods for managing tokens in the database.## Usage

_Example Basic usage:_

```ts
const { service } = ecoflow;

const { TokenServices } = service;

const tokens = TokenServices.getAllTokens();

console.log(tokens);
```

## API Reference

### Generate Token

**generateToken(\_id)** ⇒ `Promise<[accessToken, refreshToken, refreshTokenExpiresAt]>`

Generates access and refresh tokens for a given user ID and sets the refresh token in the database.

**Return:** A promise that resolves to an array containing the access token, refresh token, and refresh token expiration time.

**_Available arguments :_**

| Parameter | Type     | Description                                 |
| :-------- | :------- | :------------------------------------------ |
| \_id      | `string` | The user ID for which tokens are generated. |

**_Return arguments types :_**

| Parameter             | Type     | Description                                |
| :-------------------- | :------- | :----------------------------------------- |
| accessToken           | `string` | The access token of the user ID provided.  |
| refreshToken          | `string` | The refresh token of the user ID provided. |
| refreshTokenExpiresAt | `number` | The refresh token expiration time.         |

### Verify Token

**checkToken(token, userId)** ⇒ `Promise<boolean>`

Asynchronously checks if a given token is valid for a specific user.

**Return:** A promise that resolves to a boolean indicating if the token is valid.

**_Available arguments :_**

| Parameter | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| token     | `string` | The token to check for validity.              |
| userId    | `string` | The ID of the user associated with the token. |

### Remove Token

**removeToken(token, userId)** ⇒ `Promise<void>`

Removes a token associated with a specific user from the database.

**Return:** A promise that resolves once the token is successfully removed.

**_Available arguments :_**

| Parameter | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| token     | `string` | The token to be removed.                      |
| userId    | `string` | The ID of the user associated with the token. |

### Migrate Token

**migrateToken(token)** ⇒ `Promise<void>`

Migrates a token to the database based on the type of database connection.

**Return:** A promise that resolves when the token is successfully migrated.

**_Available arguments :_**

| Parameter | Type     | Description                  |
| :-------- | :------- | :--------------------------- |
| token     | `Tokens` | The token object to migrate. |

### Fetch All Token

**getAllTokens()** ⇒ `Promise<Tokens[]>`

Retrieves all tokens from the database based on the type of connection.

**Return:** A promise that resolves to an array of tokens.

## TypeScript Properties

### `Tokens`

```ts
interface Tokens {
  /** The unique identifier of the token. */
  _id?: string;

  /** The user ID associated with the token. */
  userId: String;

  /** The token string. */
  token: String;

  /** The timestamp or date when the token was created. */
  created_at: number | Date;

  /** The timestamp or date when the token was last updated. */
  updated_at: number | Date;

  /** The timestamp or date when the token expires. */
  expires_at: number | Date;
}
```
