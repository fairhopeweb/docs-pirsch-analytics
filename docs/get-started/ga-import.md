# Importing Your Statistics From Google Analytics

Pirsch allows you to import existing data from Google Universal Analytics (GA3).

::: info
Check how much data you really need. We recommend importing only recent data, as statistics from a few years ago aren't really useful today and take up storage on our servers.
:::

1. Navigate to the Settings page of your dashboard and click **Import / Export**
2. Click **Continue with Google**, this will redirect you to sign in with the Google account you want to connect with
3. Select the account that has access to your Google Analytics property
4. Grant access to your analytics data
5. Confirm your choices on the next screen
6. When you are taken back to the settings page, select the website you want to import and choose a start and end date
7. Click **Start Import** to start the import.

The import will run in the background and take a while to complete. Note that you can only import data up until the creation date of your dashboard. This is to ensure that the data collected by Pirsch won't be mixed up with the data from Google Analytics. Once the import is finished, you'll receive a confirmation email.

## Failed Import

Should you receive an email telling you that your import failed, you can delete the incompletely imported statistics (under **Danger Zone**) and try again. We recommend importing your statistics in smaller increments in this case, or otherwise our import or Google will cancel out if it takes too long.
