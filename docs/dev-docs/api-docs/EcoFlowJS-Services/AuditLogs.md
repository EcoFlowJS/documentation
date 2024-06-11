# AuditLogsService

AuditLogsService a service class that provides methods for handling audit logs in the system.

## Usage

_Example Basic usage:_

```ts
const { service } = ecoflow;

const { AuditLogsService } = service;

const logs = AuditLogsService.fetchAuditLogs(true);

console.log(logs);
```

## API Reference

### Fetch AuditLogs

**fetchAuditLogs([page])** ⇒ `Promise<AuditLogsResponse>`

Fetches audit logs based on the specified page number.

**Return:** A promise that resolves to an object containing totalDocs and logs.

**_Available arguments :_**
| Parameter | Type `(Default)` | Description |
| :-------- | :------- | :-------------------------------- |
| [page] | `number \| boolean` `(1)` | The page number to fetch audit logs from. |

### Create AuditLogs

**addLog(auditLog)** ⇒ `Promise<void>`

Adds an audit log entry to the database based on the provided AuditLog.

**Return:** A promise that resolves once the audit log has been added to the database.

**_Available arguments :_**
| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| auditLog | `AuditLog` | The audit log object containing information about the log entry. |

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

### `AuditLog`

```ts
interface AuditLog {
  /** The time span of the audit log entry. */
  timeSpan?: Date;

  /** The message of the audit log entry. */
  message: string;

  /** The type of the audit log entry. */
  type: AuditLogType;

  /** The user ID associated with the audit log entry. */
  userID: string;
}
```

### `AuditLogType`

```ts
/**
 * Represents the type of audit log entry, which can be "Info", "Warning", or "Error".
 */
type AuditLogType = "Info" | "Warning" | "Error";
```

### `AuditLogSchemaStruct`

```ts
interface AuditLogSchemaStruct extends AuditLog {
  /** Optional property for the unique identifier of the log */
  _id?: string;
}
```
