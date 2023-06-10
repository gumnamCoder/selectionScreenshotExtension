chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'captureElement') {
    var dataUrl = message.dataUrl;
    var link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'screenshot.png';
    link.click();
  }
});
