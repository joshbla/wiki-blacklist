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
          // Get the current title and body of the active tab
          chrome.tabs.executeScript({
            code: "document.title + ' ' + document.body.textContent"
          }, function(results) {
            var content = results[0];
  
            // Check if the title or body contains any blacklisted terms
            if (Blacklist.isBlacklisted(content)) {
              // If the title or body contains a blacklisted term, redirect the user to a new random article
              chrome.tabs.update(tab.id, {url: "https://en.wikipedia.org/wiki/Special:Random"});
            }
          });
        }
      });
    },
    // Check if a given string contains any blacklisted terms
    isBlacklisted: function(content) {
      // An array of blacklisted terms
      var blacklist = ["the"];
  
      // Check if the content contains any of the blacklisted terms
      for (var i = 0; i < blacklist.length; i++) {
        if (content.indexOf(blacklist[i]) != -1) {
          return true;
        }
      }
  
      return false;
    }
  };
  
  // Initialize the extension
  Blacklist.init();
  