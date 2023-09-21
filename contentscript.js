chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // If the message is a request for the title of the current tab, send it back to the popup script.
    if (message === 'getTabTitle') {
      chrome.tabs.query({active: true}, function(tabs) {
        sendResponse(tabs[0].title);
      });
    }
});