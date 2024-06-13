chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    console.log('Extension installed for the first time.');
  } else if (details.reason === chrome.runtime.OnInstalledReason.UPDATE) {
    console.log('Extension updated to a new version.');
  } else if (details.reason === chrome.runtime.OnInstalledReason.CHROME_UPDATE) {
    console.log('Chrome updated to a new version.');
  }
});
