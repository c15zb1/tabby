// function validateForm()
// {
//   alert("hello");
//   var x=document.forms["myForm"]["email"].value;
//   alert(x);
//   return false;
//   var win = chrome.windows.WINDOW_ID_CURRENT;
//   var tabby;
//   var urlString
//   var QUERY = chrome.tabs.query( {active: true, windowID:}, function callback (array_of_tabs) {
//     for (tab in array_of_tabs){
//       tabby[tab.index] = tab.url;
//       urlString +=","+tab.url;
//     }
//     window.location.href  ="http://tabbybackend.appspot.com/?urls="+urlString+"&email=c15zb1@gmail.com";
//     alert("done");
//   });
// }
// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var BASE = 'http://tabbybackend.appspot.com/?urls=';
var WIN;
function doStuff () {
	em = document.getElementById('someInput').value;
	alert("27, email: " + em);
	//document.write(BASE);

	chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
   function(tabs){
      alert(tabs[0].url);
   }
);
}
 // alert(urlString);