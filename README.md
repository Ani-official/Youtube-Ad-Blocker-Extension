# YouTube Ad Blocker Extension (Educational Purpose Only)

A browser extension demonstrating how to block YouTube ads using the `declarativeNetRequest` API (Manifest V3). This project is for educational purposes only and illustrates browser extension development concepts.

## Disclaimer
🚨 **This project is intended for educational use only.** Blocking ads may violate YouTube's Terms of Service. Ads support content creators, and blocking them harms their ability to create. Use this knowledge responsibly and consider ethical implications.

## Features
- Blocks YouTube ads using declarative network rules.
- Toggle ad blocking on/off via a popup interface.
- Demonstrates Chrome Extension APIs: `declarativeNetRequest`, `storage`, and `action`.

## Prerequisites
- A Manifest V3-compatible browser (e.g., Chrome, Edge).
- Basic understanding of JavaScript and browser extensions.

## Files Included
Ensure you have these files in your project folder:

```
your_extension_folder/
├── icons/
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
├── manifest.json
├── rules.json
├── popup.html
├── popup.js
└── background.js
```

## Setup Instructions
### 1. Verify File Structure
Create an `icons` folder and ensure it contains:
- `icon16.png` (16x16 pixels)
- `icon48.png` (48x48 pixels)
- `icon128.png` (128x128 pixels)

All other files (`manifest.json`, `rules.json`, etc.) must be in the root folder.

### 2. Load the Extension
1. Open your browser and go to `chrome://extensions/`.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked** and select your extension folder.

### 3. Use the Extension
- Click the extension icon in the toolbar to open the popup.
- Toggle the switch to enable/disable ad blocking.

## How It Works (Educational Focus)
- **`manifest.json`**: Declares permissions, rules, and UI components.
- **`rules.json`**: Defines network rules to block ad-related requests (e.g., `doubleclick.net`).
- **`popup.js`**: Uses the storage API to save the toggle state and communicate with `background.js`.
- **`background.js`**: Dynamically enables/disables rules via `declarativeNetRequest.updateEnabledRulesets`.

## Key Learnings
This project teaches:
- How to use the `declarativeNetRequest` API for efficient ad blocking.
- Managing extension state with `chrome.storage`.
- Building interactive UIs for extensions (popup HTML/CSS/JS).
- Ethical considerations of ad blocking.

## License
**MIT License**. Use this project responsibly and only for educational purposes.

## Contributing
Contributions are welcome! Open an issue or pull request to suggest improvements or fixes.

## Questions?
Open an issue on GitHub or reach out for clarifications.