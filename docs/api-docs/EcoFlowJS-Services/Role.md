# Role

RoleService a service class that provides methods for interacting with roles in the database.## Usage

_Example Basic usage:_

```ts
const { service } = ecoflow;

const { RoleService } = service;

const roles = RoleService.getAllRoles();

console.log(roles);
```

## API Reference

### Create Role

**createRole(role, [roleLike], [isDefault])** ⇒ `Promise<Role[] | { _id: any }>`

Creates a new role with the given parameters and stores it in the database.

**Return:** A promise that resolves to an array of roles or an object with the `_id` of the new role.

**_Available arguments :_**
| Parameter | Type `(Default)` | Description |
| :-------- | :------- | :-------------------------------- |
| role | `Role` | The role object to create. |
| [roleLike] | `string \| null` | A string representing a similar role to base permissions on. |
| isDefault | `boolean` `(false)` | A boolean indicating if the role is a default role. |

### Update Role

**updateRole(id, permissions)** ⇒ `Promise<Role[]>`

Updates the permissions of a role with the given id.

**Return:** A promise that resolves to an array of updated roles.

**_Available arguments :_**
| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| id | `string` | The id of the role to update. |
| permissions | `Permissions` | The new permissions to assign to the role. |

### Fetch Role

**fetchRole(id)** ⇒ `Promise<Role[]>`

Fetches role data based on the provided ID using either Knex or Mongoose ORM.

**Return:** A promise that resolves to an array of Role objects.

**_Available arguments :_**
| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| id | `string` | The ID of the role to fetch. |

### Remove Role

**removeRole(id)** ⇒ `Promise<Role[]>`

Removes a role from the database and updates all users with the role removed.

**Return:** A promise that resolves to an array of Role objects after the role is removed.

**_Available arguments :_**
| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| id | `string` | The id of the role to be removed. |

### Migrate Role

**migrateRole(role)** ⇒ `Promise<string>`

Migrates a role object to the database based on the type of database connection.

**Return:** The ID of the migrated role.

**_Available arguments :_**
| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| role | `Role` | The role object to be migrated. |

### Get All Roles

**getAllRoles()** ⇒ `Promise<Role[]>`

Retrieves all roles from the database based on the type of database connection.

**Return:** A promise that resolves to an array of Role objects.

## TypeScript Properties

### `AuditLogsResponse`

```ts
interface AuditLogsResponse {
  /** The total number of audit log documents. */
  totalDocs: number;

  /** An array of AuditLogSchemaStruct objects. */
  logs: AuditLogSchemaStruct[];
}
```

### `Role`

```ts
interface Role {
  /** The unique identifier of the role. */
  _id?: string;

  /** The name of the role. */
  name: string;

  /** Indicates if the role is a default role. */
  isDefault?: boolean;

  /** The permissions associated with the role. */
  permissions?: Permissions | string;
}
```

### `Permissions`

```ts
interface Permissions {
  /** Representing permissions with keys as strings and values as booleans. */
  [name: string]: boolean;
}
```
