# Centric Information Model Export to MetaData Tool Extension for StarUML
## Overview
The **Centric Information Model Export to MetaData Tool StarUML Extension** builds CSV files for the Centric Metadata Tool to ingest into its DB using StarUML 3.x project (mdj) file. 

## Installation
### StarUML Extension Manager
1. Open the StarUML application.
2. Select the menu **`Tools >> Extension Manager...`**
3. Click the **`Install From Url...`** button.
4. In the **`Install Extension`** field, enter **`https://github.com/nickTinCentric/staruml-metadata-export.git`** and click the **`Install`** button.
5. The extension will automatically install.

## Extension Features
From within StarUML, select the menu **`Tools`** menu. You will see several options for exporting:


### Centric Export Entities
1. Select the menu item **`Tools >> Export for Meta Data Tool -- Entities`**  Quick key **'ctrl-w'**
2. Enter a target filename and click **`Save`**.
3. The extension will automatically generate a CSV file containing the list of Entities in the specific format that the Meta Data Tool needs for ingestion.

### Centric Export Attributes
1. Select the menu item **`File >> Export for Meta Data Tool -- Attributes`** Quick key **'ctrl-b'**
2. Enter a target filename and click **`Save`**.
3. The extension will automatically generate a CSV file containing Attributes in the specific format that the Meta Data Tool needs for ingestion.



## Customizations
All customizations should be made in the StarUML extensions folder for the current Windows user. On Windows machines, this folder is located here: **`"C:\Users\{user}\AppData\Roaming\StarUML\extensions\user\metadata-tool-export"`**. The placeholder **`{user}`** should be replaced with your Windows login.
