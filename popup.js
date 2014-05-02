var BASE = 'http://tabbybackend.appspot.com/?urls=';

document.getElementById('fb').addEventListener('click', fbClick);
function fbClick () {
	window.open("http://compsci.dalton.org/~zbuttenwieser");
}

document.getElementById('gp').addEventListener('click', gpClick);
function gpClick () {
	window.open("http://compsci.dalton.org/~zbuttenwieser");
}

document.getElementById('tw').addEventListener('click', twClick);
function twClick () {
	window.open("http://compsci.dalton.org/~zbuttenwieser");
}

document.getElementById('c15zb').addEventListener('click', twClick);
function twClick () {
	window.open("http://github.com/c15zb");
}

document.getElementById('higgs').addEventListener('click', twClick);
function twClick () {
	window.open("http://github.com/higgs241");
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

chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
	var activeTab = arrayOfTabs[0];
	var activeTabId = arrayOfTabs[0].id;
	var url = activeTab.url;
	if (url.split("\?") == "http://tabbybackend.appspot.com/linkhandler?key=") {
		
	};

});




