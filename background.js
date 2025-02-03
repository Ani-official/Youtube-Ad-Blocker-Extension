// Default state: ad blocking is enabled
let adBlockingEnabled = true;

// Load the saved state from storage
chrome.storage.sync.get("adBlockingEnabled", (data) => {
  adBlockingEnabled = data.adBlockingEnabled !== false; // Default to true if not set
  updateRules();
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.adBlockingEnabled !== undefined) {
    adBlockingEnabled = message.adBlockingEnabled;
    updateRules();
  }
});

// Function to enable/disable rules
function updateRules() {
  if (adBlockingEnabled) {
    // Enable the ruleset
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ["ruleset_1"],
      disableRulesetIds: [],
    });
  } else {
    // Disable the ruleset
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: [],
      disableRulesetIds: ["ruleset_1"],
    });
  }
}
