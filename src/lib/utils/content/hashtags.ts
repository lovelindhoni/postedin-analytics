import { HashTags } from '../../types';

const isHashTag = (text: string) => {
  return text.startsWith('hashtag#');
};
const getHashtags = () => {
  const postContent = document.querySelector('span.break-words.tvm-parent-container') as HTMLSpanElement;
  const links = postContent.querySelectorAll('a.app-aware-link');
  const hashtags: HashTags = {};
  links.forEach((link) => {
    const url = (link.getAttribute('href') as string).trim();
    const text = (link.textContent as string).trim();
    if (isHashTag(text)) {
      const cleanHashTag = text.substring(8);
      hashtags[cleanHashTag] = url;
    }
  });
  return hashtags;
};

export default getHashtags;
