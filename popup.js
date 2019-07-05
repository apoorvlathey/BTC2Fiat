$(function(){

	function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	chrome.storage.sync.get('fiat', function (budget){
		
		if(budget.fiat)
			$('#fiat').text(budget.fiat);
		else
		{
			$('#fiat').text('USD');
			chrome.storage.sync.set({'fiat': 'USD'});
		}

		$.ajax({
        async: true,
        type: "GET",
        url: "https://blockchain.info/ticker",
        success: function(result) {

          data = result[budget.fiat].last;
          btcVal=1;
          convertedVal = btcVal*data;

          $('#rate').text(btcVal+" BTC equals "+numberWithCommas(parseFloat(Number(convertedVal).toFixed(2)))+" "+budget.fiat);

			}
		});
	});


	$('#setFiat').click(function(){

			var newFiat = $('#fiatInp').val();

			chrome.storage.sync.set({'fiat': newFiat});

			$('#fiat').text(newFiat);

			//update context menu
			chrome.contextMenus.update("btcConvert", {
			"title": "Convert to "+newFiat,
		});
			close();

	});
});
