console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(){
  console.log("button Clicked!");
}
//    /* "js": ["content.js"], */
