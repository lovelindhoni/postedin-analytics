const isLinkedInPost = async () => {
  const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
  const activeTabUrl = (tabs[0].url as string).trim();
  return (
    activeTabUrl.startsWith('https://www.linkedin.com/posts/') ||
    activeTabUrl.startsWith('https://www.linkedin.com/feed/update/')
  );
};

export default isLinkedInPost;
