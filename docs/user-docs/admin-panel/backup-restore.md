# Backup and Restore

EcoFlowJS allows you to Backup and Restore your project the whole project as a zip file. The backed up file can be later used to restore the application to the backup state.

<ThemedImage
alt="setup welcome screen"
sources={{
    light: '/img/assets/backup-restore.png',
    dark: '/img/assets/backup-restore-dark.png',
  }}
/>

### Backup Project

1. Click on **Settings** on the left side panel of the main navigation of your EcoFLowJS application.
2. Click on **Backup and Restore** from the sub section.
3. Choose the **Contents** to be backed up.

| Type                      | Description                                                                      |
| ------------------------- | -------------------------------------------------------------------------------- |
| Database Connection       | Backup all or selected database connections.                                     |
| Environment Configuration | Backup all user defined environment variables.                                   |
| Flow Configuration        | Backup the Flow description templates.                                           |
| Installed Package         | Backup all or selected packages that are installed in the EcoFlowJS application. |
| Server Configuration      | Backup the server configuration of the EcoFlowJS application.                    |

4. Click on the **Backup** and Wait for the backup procedure to complete and a zip file will be downloaded automatically.

:::note

- A copy of the backed up file will also be stored in the server for easy access of the backed up files with date time of the backup.

- This file can can be removed in future.
  :::

## Restore Project

To restore the project from the previous backed up file:

1. Click on **Settings** on the left side panel of the main navigation of your EcoFLowJS application.
2. Click on **Backup and Restore** from the sub section.
3. Upload the **backed up file** that was previously downloaded.
4. Click on **Restore** to restore the project to the previous state.

:::tip[Restore from saved files]

- Click on the **Browse** button.
- Select the **Backed up file** that you want to get restore to.
- Click on the **Confirm** button to confirm the restore operation.
  :::

5. Wait for the restore operation to get complete and once complete wait for the server to re-start.

:::note
Once the server is restarted it loads configs presents from the backed up state.
:::
