import { Reactions, Reaction } from '@/lib/types';

const convertToNumber = (count: string): number => {
  return Number(count.replace(',', ''));
};

const getLikes = (): void => {
  const reactionsCount = {} as Reactions;

  const totalReactionsElement = (document.querySelector('span.social-details-social-counts__reactions-count') ||
    document.querySelector('span.social-details-social-counts__social-proof-text')) as HTMLSpanElement;

  totalReactionsElement?.click();

  setTimeout(() => {
    const reactionButtons: Element[] = Array.from(document.querySelectorAll('button[data-js-reaction-tab]'));
    if (reactionButtons.length > 1) reactionButtons.shift();

    const reactionDivs: HTMLDivElement[] = [];

    reactionButtons.forEach((button) => {
      const reactionDiv = button.querySelector('div');
      if (reactionDiv) {
        reactionDivs.push(reactionDiv);
      }
    });

    for (const reactionDiv of reactionDivs) {
      const spans = [...reactionDiv.querySelectorAll('span')] as HTMLSpanElement[];
      const iconImage = spans[0].querySelector('img') as HTMLImageElement;
      const reactionType: Reaction = (iconImage.getAttribute('data-test-reactions-icon-type') as string)
        .trim()
        .toLowerCase() as Reaction;
      const countText = spans[1]?.innerText.trim();

      if (reactionType) {
        reactionsCount[reactionType] = convertToNumber(countText || '0');
      }
    }
    if (!Object.prototype.hasOwnProperty.call(reactionsCount, 'all')) {
      let total = 0;
      Object.values(reactionsCount).forEach((value) => {
        total += value;
      });
      reactionsCount['all'] = total;
    }
    chrome.storage.local.set({ reactions: reactionsCount });

    const closeButton = document.querySelector('button[data-test-modal-close-btn]') as HTMLButtonElement;
    closeButton?.click();
  }, 100);
};

export default getLikes;
