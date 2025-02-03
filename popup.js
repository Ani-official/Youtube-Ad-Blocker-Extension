// Get the toggle button and status text
const toggle = document.getElementById("toggle");
const statusText = document.getElementById("status");

// Load the saved state from storage
chrome.storage.sync.get("adBlockingEnabled", (data) => {
  const isEnabled = data.adBlockingEnabled !== false; // Default to true if not set
  toggle.checked = isEnabled;
  statusText.textContent = isEnabled ? "ON" : "OFF";
});

// Update the state when the toggle is clicked
toggle.addEventListener("change", () => {
  const isEnabled = toggle.checked;
  statusText.textContent = isEnabled ? "ON" : "OFF";

  // Save the state to storage
  chrome.storage.sync.set({ adBlockingEnabled: isEnabled }, () => {
    console.log("Ad blocking is now:", isEnabled ? "ON" : "OFF");
  });

  // Send a message to the background script to update the rules
  chrome.runtime.sendMessage({ adBlockingEnabled: isEnabled });
});
