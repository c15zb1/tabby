var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var BASE = 'http://tabbybackend.appspot.com/?urls=';

document.getElementById('fb').addEventListener('click', fbClick);
function fbClick () {
	window.open("http://compsci.dalton.org/~zbuttenwieser")
}

document.getElementById('gp').addEventListener('click', gpClick);
function gpClick () {
	window.open("http://compsci.dalton.org/~zbuttenwieser")
}

document.getElementById('tw').addEventListener('click', twClick);
function twClick () {
	window.open("http://compsci.dalton.org/~zbuttenwieser")
}


document.getElementById('myBtn').addEventListener('click', doStuff);
function doStuff () {
//  window.alert('loaded');
	//window.alert("hi");
	em = document.getElementById('someInput').value;
	//document.write(BASE);	
	chrome.tabs.query({
		lastFocusedWindow: true     // In the current window
	}, function(array_of_Tabs) {
		for (var index = 0; index < array_of_Tabs.length; ++index) {
			BASE+=array_of_Tabs[index].url.replace("#", "((((()))))");
			if(index!=array_of_Tabs.length-1)
				BASE+=',';
			console.log(array_of_Tabs[index].url);
		}
		window.open(BASE+"&email="+em);

	});
}