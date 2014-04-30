var win = chrome.windows.WINDOW_ID_CURRENT;
var tabby;
var urlString
var QUERY = chrome.tabs.query( {active: true, windowID:}, function callback (array_of_tabs) {
  for (tab in array_of_tabs){
    tabby[tab.index] = tab.url;
    urlString +=","+tab.url;
  }
  window.location = "http://tabbybackend.appspot.com/?urls="+urlString+"&email=c15zb1@gmail.com";
  alert("done");
  return;
});