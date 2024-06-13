const getDate = () => {
  const dateEl = document.querySelector(
    'a.app-aware-link.update-components-actor__sub-description-link span.visually-hidden',
  ) as HTMLSpanElement;
  const date = (dateEl.textContent as string).trim();
  return date;
};

export default getDate;
