import { getComments, getDate, getHashtags, getMentions, getProfile, getReposts, getLikes } from '@/lib/utils/content';

chrome.runtime.onMessage.addListener(async (request, _, sendResponse) => {
  if (request.action == 'date') {
    const date = getDate();
    sendResponse({ data: date });
  } else if (request.action == 'comments') {
    const comments = getComments();
    sendResponse({ data: comments });
  } else if (request.action == 'reposts') {
    const reposts = getReposts();
    sendResponse({ data: reposts });
  } else if (request.action == 'mentions') {
    const mentions = getMentions();
    sendResponse({ data: mentions });
  } else if (request.action == 'hashtags') {
    const hashtags = getHashtags();
    sendResponse({ data: hashtags });
  } else if (request.action == 'profile') {
    const profile = getProfile();
    sendResponse({ data: profile });
  }

  return true;
});

getLikes();
