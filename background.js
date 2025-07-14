// Service worker for Blind XSS Manager (Manifest V3)
// This runs in the background and handles extension events

// Listen for extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log("Blind XSS Manager installed");
});

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getCurrentTab") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      sendResponse({ tab: tabs[0] });
    });
    return true; // Keep the message channel open for async response
  }
});

// Handle tab updates if needed
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Handle tab updates here if needed
});

// Handle tab activation if needed
chrome.tabs.onActivated.addListener((activeInfo) => {
  // Handle tab activation here if needed
});
