const getReposts = () => {
  const repostEl = document.querySelector(
    'li.social-details-social-counts__item.social-details-social-counts__item--right-aligned:not(.social-details-social-counts__comments) button span',
  );
  if (!repostEl) return 0;
  const repostCount = repostEl.innerHTML.trim();
  const count = repostCount.replace(/(,|\breposts?\b)/g, '').trim();
  return Number(count);
};

export default getReposts;
