chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.reload) {
    chrome.tabs.query({
      'active': true,
      'lastFocusedWindow': true
    }, function(tabs) {
      chrome.tabs.update(sender.tab.id, {
        url: tabs[0].url
      });
    });
  }
});