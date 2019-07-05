<<<<<<< HEAD
var fiatCurr;

updatefiatCurr();

chrome.storage.onChanged.addListener(function(changes, namespace) {
   for(key in changes) {
     if(key === 'fiat') {
       updatefiatCurr();
       console.log("changed");
     }
   }
 });

chrome.storage.sync.get('fiat', function (budget){
	fiatCurr = budget.fiat;

	if(!fiatCurr){
		fiatCurr = 'USD';
		chrome.storage.sync.set({'fiat': 'USD'});
	}

	//define Context Menu Details
	var contextMenuItem = {
		"id": "btcConvert",
		"title": "Convert to "+fiatCurr,
		"contexts": ["selection"]
	};

	//create Context Menu
	chrome.contextMenus.create(contextMenuItem);
});


function updatefiatCurr(){
	chrome.storage.sync.get('fiat', function (budget){
		fiatCurr = budget.fiat;

		if(!fiatCurr){
			fiatCurr = 'USD';
			chrome.storage.sync.set({'fiat': 'USD'});
		}
	});
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getPrice(btcVal){

					updatefiatCurr();

					$.ajax({
					        async: true,
					        type: "GET",
					        url: "https://blockchain.info/ticker",
					        success: function(result) {

					          data = result[fiatCurr].last;

					          convertedVal = btcVal*data;

					          alert(btcVal+" BTC equals "+numberWithCommas(parseFloat(Number(convertedVal).toFixed(2)))+" "+fiatCurr);

					          }
					});

}					

//when any contextMenu Clicked
chrome.contextMenus.onClicked.addListener(function(clickedData){

	//if our contextMenu and Text Selected
	if(clickedData.menuItemId == "btcConvert" && clickedData.selectionText){

		//check if selection a Numeric value
		if(!isNaN(clickedData.selectionText)){

			var btcVal = parseFloat(clickedData.selectionText);
			getPrice(btcVal);
		}
		else
			alert("Please select just the Numeric value in BTC !");
	}
=======
var fiatCurr;

updatefiatCurr();

chrome.storage.onChanged.addListener(function(changes, namespace) {
   for(key in changes) {
     if(key === 'fiat') {
       updatefiatCurr();
       console.log("changed");
     }
   }
 });

chrome.storage.sync.get('fiat', function (budget){
	fiatCurr = budget.fiat;

	if(!fiatCurr){
		fiatCurr = 'USD';
		chrome.storage.sync.set({'fiat': 'USD'});
	}

	//define Context Menu Details
	var contextMenuItem = {
		"id": "btcConvert",
		"title": "Convert to "+fiatCurr,
		"contexts": ["selection"]
	};

	//create Context Menu
	chrome.contextMenus.create(contextMenuItem);
});


function updatefiatCurr(){
	chrome.storage.sync.get('fiat', function (budget){
		fiatCurr = budget.fiat;

		if(!fiatCurr){
			fiatCurr = 'USD';
			chrome.storage.sync.set({'fiat': 'USD'});
		}
	});
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getPrice(btcVal){

					updatefiatCurr();

					$.ajax({
					        async: true,
					        type: "GET",
					        url: "https://blockchain.info/ticker",
					        success: function(result) {

					          data = result[fiatCurr].last;

					          convertedVal = btcVal*data;

					          alert(btcVal+" BTC equals "+numberWithCommas(parseFloat(Number(convertedVal).toFixed(2)))+" "+fiatCurr);

					          }
					});

}					

//when any contextMenu Clicked
chrome.contextMenus.onClicked.addListener(function(clickedData){

	//if our contextMenu and Text Selected
	if(clickedData.menuItemId == "btcConvert" && clickedData.selectionText){

		//check if selection a Numeric value
		if(!isNaN(clickedData.selectionText)){

			var btcVal = parseFloat(clickedData.selectionText);
			getPrice(btcVal);
		}
		else
			alert("Please select just the Numeric value in BTC !");
	}
>>>>>>> upstream/master
});