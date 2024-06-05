# FlowSettings

FlowSettingsService a service class that provides methods for managing flow settings in the database.

## Usage

_Example Basic usage:_

```ts
const { service } = ecoflow;

const { FlowSettingsService } = service;

const flowSettings = FlowSettingsService.fetchAllFlowSettings();

console.log(flowSettings);
```

## API Reference

### Fetch All Flow Settings

**fetchAllFlowSettings()** ⇒ `Promise<(FlowEditorSettingsConfigurations & {_id?: string; username?: string;})[]>`

Fetches all flow settings configurations from the database based on the type of connection.

**Return:** A promise that resolves to an array of objects containing partial `FlowEditorSettingsConfigurations` and optional `_id` and `username` fields.

### Fetch Flow Settings

**fetchFlowSettings(userId)** ⇒ `Promise<(FlowEditorSettingsConfigurations & {_id?: string; username?: string;})[]>`

Fetches the flow settings for a specific user from the database based on the user ID.

**Return:** A promise that resolves to an object containing partial `FlowEditorSettingsConfigurations` along with optional `_id` and `username` properties.

**_Availaable arguments :_**
| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| userId | `string` | The ID of the user to fetch settings for. |

### Update Flow Settings

**updateFlowSettings(userId, flowSettings)** ⇒ `Promise<(FlowEditorSettingsConfigurations & {_id?: string; username?: string;})[]>`

Updates the flow settings for a specific user in the database.

**Return:** A promise that resolves to the updated flow settings object with optional `_id` and `username` fields.

**_Availaable arguments :_**
| Parameter | Type | Description |
| :-------- | :------- | :-------------------------------- |
| userId | `string` | The ID of the user whose flow settings are being updated. |
| flowSettings | `FlowEditorSettingsConfigurations` | The flow settings to update. |

## TypeScript Properties

### `FlowEditorSettingsConfigurations`

```ts
interface FlowEditorSettingsConfigurations {
  /** Enable/Disable keyboard interactions. */
  keyboardAccessibility: boolean;

  /** Enable/Disable flow editor controls. */
  controls: boolean;

  /** Enable/Disabled mini map in flow editor. */
  miniMap: boolean;

  /** Enable/Disable mini map panning in flow editor. */
  panMiniMap: boolean;

  /** Enable/Disable scroll to pan. */
  scrollPan: boolean;
}
```
