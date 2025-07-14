// Content script for Blind XSS Manager
// This file runs in the context of web pages

// Listen for messages from the popup or background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getCurrentUrl") {
    sendResponse({ url: window.location.href });
  }
});

// Any other content script functionality can be added here
console.log("Blind XSS Manager content script loaded"); 