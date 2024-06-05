# Service

Represents a service class that provides access to various services related to the application.

## API Reference

### AuditLogsService

Kind: Exported class

**new Service([conn])**

Constructs a new instance of the class with an optional name parameter.

If a name is provided, it initializes a connection to the database using the provided name.

_Example Basic usage:_

```ts
import { Service } from "@ecoflow/services";

const service = new Service();
```

**OR**

```ts
const { service } = ecoflow;
```

**_Available arguments :_**
| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| [conn] | `string` | The name to use for the database connection. |

## Available Services

### [User Service](./User)

**service.UserService** ⇒ [`UserService`](./User)

:::note
Method that returns an instance of the UserService class.
:::

### [Token Services](./Token)

**service.TokenServices** ⇒ [`TokenServices`](./Token)

:::note
Method that returns an instance of TokenServices class.
:::

### [Role Service](./Role)

**service.RoleService** ⇒ [`RoleService`](./Role)

:::note
Method that returns an instance of RoleService class.
:::

### [AuditLogs Service](./AuditLogs)

**service.AuditLogsService** ⇒ [`AuditLogsService`](./AuditLogs)

:::note
Method that returns an instance of AuditLogsService class.
:::

### [Schema Editor Service](./SchemaEditor)

**service.SchemaEditorService** ⇒ [`SchemaEditorService`](./SchemaEditor)

:::note
Method that returns an instance of SchemaEditorService class.
:::

### [Flow Settings Service](./FlowSettings)

**service.FlowSettingsService** ⇒ [`FlowSettingsService`](./FlowSettings)

:::note
Method that returns an instance of FlowSettingsService class.
:::
