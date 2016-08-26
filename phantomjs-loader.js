var url = 'http://localhost:3001/'; //replace this url if you're serving from somewhere else
var page = require('webpage').create();

window.setTimeout(openPage, 500); //wait a bit for the server to be running

function openPage() {
  page.open(url, function (status) {
    console.log('Status: ' + status);
    console.log('prerenderReady', isReady());

    var interval = window.setInterval(takeScreenshot, 500); //poll every 500ms

    page.render('test-output/start.png');

    function isReady() {
      return page.evaluateJavaScript('function(){return window.prerenderReady;}');
    }

    function takeScreenshot() {
      if (isReady()) {
        window.clearInterval(interval);
        console.log('Ready, taking screenshot');
        page.render('test-output/end.png');
        phantom.exit(0);
      } else {
        console.log('not ready yet');
      }
    }
  });
}
