// Create a new Chrome extension
var Blacklist = {
    // Initialize the extension
    init: function() {
      // Add an event listener to the Chrome browser action
      chrome.browserAction.onClicked.addListener(function(tab) {
        // Get the current URL of the active tab
        var url = tab.url;
  
        // Check if the URL matches the Wikipedia Random Article URL
        if (url == "https://en.wikipedia.org/wiki/Special:Random") {
          // Get the current title of the active tab
          chrome.tabs.get(tab.id, function(tab) {
            var title = tab.title;
  
            // Check if the title contains any blacklisted terms
            if (Blacklist.isBlacklisted(title)) {
              // If the title contains a blacklisted term, redirect the user to a new random article
              chrome.tabs.update(tab.id, {url: "https://en.wikipedia.org/wiki/Special:Random"});
            }
          });
        }
      });
    },
    // Check if a given title contains any blacklisted terms
    isBlacklisted: function(title) {
      // An array of blacklisted terms
      var blacklist = ["soccer", "football", "sport", "List"];
  
      // Check if the title contains any of the blacklisted terms
      for (var i = 0; i < blacklist.length; i++) {
        if (title.indexOf(blacklist[i]) != -1) {
          return true;
        }
      }
  
      return false;
    }
  };
  
  // Initialize the extension
  Blacklist.init();