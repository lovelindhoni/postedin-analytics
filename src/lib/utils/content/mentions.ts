import { Mentions } from '@/lib/types';

const isHashTag = (text: string) => {
  return text.startsWith('hashtag#');
};
const getMentions = () => {
  const postContent = document.querySelector('span.break-words.tvm-parent-container') as HTMLSpanElement;
  const links = postContent.querySelectorAll('a.app-aware-link');
  const mentions: Mentions = {};
  links.forEach((link) => {
    const url = (link.getAttribute('href') as string).trim();
    const text = (link.textContent as string).trim();
    if (!isHashTag(text) && !text.startsWith('https://') && !text.startsWith('https://')) {
      mentions[text] = url;
    }
  });
  return mentions;
};

export default getMentions;
