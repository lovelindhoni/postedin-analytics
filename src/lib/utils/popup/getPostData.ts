const getPostData = <T>(action: string, setter: (value: T) => void) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id as number, { action }, (response) => {
      setter(response.data);
    });
  });
};

export default getPostData;
