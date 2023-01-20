chrome.webNavigation.onCompleted.addListener(function(details) {
var url = details.url;
var blacklist = ["racism", "sexism", "homophobia"];
var redirect = false;

// Check if the URL contains any of the blacklisted terms
for (var i = 0; i < blacklist.length; i++) {
if (url.indexOf(blacklist[i]) !== -1) {
redirect = true;
break;
}
}

// If the URL contains a blacklisted term, redirect to the random Wikipedia page
if (redirect) {
chrome.tabs.update(details.tabId, {url: "https://en.wikipedia.org/wiki/Special:Random"});
}
},
{url: [{hostSuffix: "wikipedia.org"}]});