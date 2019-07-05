# BTC2Fiat - Google Chrome Extension
Choose from a variety of fiat currencies like USD, INR, EUR, etc. Convert selected Bitcoin (BTC) value on a webpage to fiat equivalent,  calculated using the current market price.

### How to Setup :

* Clone and star this repository. 
 ``` 
 git clone https://github.com/CodinMaster/BTC2Fiat.git
 ```
 
 * Head over to this link in Google Chrome : 
 ``` 
 chrome://extensions/ 
 ```
 * Enable Developer Mode (top right)
 * Click "Load unpacked" and select the cloned repository.
 * The extension is installed !
 
 ### How to Use :
 * Click on "BTC" logo in the extensions tray and set desired fiat currency from dropdown.<br>
 ![screenshot of popup on clicking extension](https://i.imgur.com/pjIeQWC.png)
 
 * Select the numeric part of BTC value<br>
 ![screenshot of selected text](https://i.imgur.com/qfBuMNy.png)
 
 * Right Click and Select the "Convert to ..." option<br>
 ![screenshot of right click menu](https://i.imgur.com/A5xRkYB.png)
 
 * The popup displays the converted value in Fiat !<br>
 ![screenshot of converted value](https://i.imgur.com/jhlY88N.png)
 
 ### Features :
 * Currencies supported: AUD, BRL, CAD, CHF, CLP, CNY, DKK, EUR, GBP, HKD, INR, ISK, JPY, KRW, NZD, PLN, RUB, SEK, SGD, THB, TWD, USD
 * Current Market price also displayed on clicking the extension's icon
 * Works on any webpage

 ---
 To add options page in future, add the following code in manifest.json :
 ``` 
  "options_page": "options.html",
 ```  
