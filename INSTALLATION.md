# Installation Guide

## How to Install Blind XSS Manager

### Step 1: Download the Extension
1. Download or clone this repository to your computer
2. Extract the files if downloaded as a ZIP

### Step 2: Open Chrome Extensions Page
1. Open Google Chrome
2. Navigate to `chrome://extensions/` in the address bar
3. Or go to Chrome Menu → More Tools → Extensions

### Step 3: Enable Developer Mode
1. In the top-right corner of the extensions page, toggle "Developer mode" to ON
2. This will reveal additional options

### Step 4: Load the Extension
1. Click "Load unpacked" button
2. Select the folder containing the extension files (the folder with manifest.json)
3. Click "Select Folder"

### Step 5: Verify Installation
1. The extension should now appear in your extensions list
2. You should see the Blind XSS Manager icon in your Chrome toolbar
3. Click the icon to open the extension

## Usage
1. **Configure Domain**: Enter your XSS domain (e.g., `*.xss.ht`)
2. **Auto-Capture**: Current URL and hash are automatically captured
3. **Generate Payloads**: Payloads are automatically generated with your domain and hash
4. **Copy Payloads**: Copy individual payloads or all at once
5. **View History**: Track all your injection attempts

## Troubleshooting
- If the extension doesn't load, make sure Developer mode is enabled
- Ensure all files are present in the folder
- Try refreshing the extensions page
- Check Chrome version compatibility (Chrome 88+)

## Security Note
This tool is intended for educational and authorized security testing purposes only. Use responsibly and only on systems you have permission to test. 