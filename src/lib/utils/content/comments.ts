const getComments = () => {
  const commentsEl = document.querySelector(
    'li.social-details-social-counts__item.social-details-social-counts__comments.social-details-social-counts__item--right-aligned button span',
  );
  if (!commentsEl) return 0;
  const commentCount = commentsEl.innerHTML.trim();
  const count = commentCount.replace(/(,|\bcomments?\b)/g, '').trim();
  return Number(count);
};

export default getComments;
