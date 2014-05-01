var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var BASE = 'http://tabbybackend.appspot.com/?urls=';
document.getElementById('myBtn').addEventListener('click', doStuff);
function doStuff () {
//  window.alert('loaded');
	//window.alert("hi");
	em = document.getElementById('someInput').value;
	//document.write(BASE);	
	chrome.tabs.query({
		lastFocusedWindow: true     // In the current window
	}, function(array_of_Tabs) {
		// Since there can only be one active tab in one active window, 
		//  the array has only one element
		for (var index = 0; index < array_of_Tabs.length; ++index) {
			BASE+=array_of_Tabs[index].url;
			if(index!=array_of_Tabs.length-1)
				BASE+=',';
			console.log(array_of_Tabs[index].url);
		}
		// Example:
		// ... do something with url variable
	});
}