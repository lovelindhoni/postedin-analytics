import { ProfileData } from '@/lib/types';

const getProfile = () => {
  const nameEl = document.querySelector('span.update-components-actor__name span.visually-hidden') as HTMLSpanElement;
  const descriptionEl = document.querySelector(
    'span.update-components-actor__description span.visually-hidden',
  ) as HTMLSpanElement;

  const dp = document.querySelector('img.update-components-actor__avatar-image');

  const name = (nameEl.textContent as string).trim();
  const description = (descriptionEl.textContent as string).trim();
  let photo: string;
  if (dp && dp.getAttribute('src')) {
    photo = (dp.getAttribute('src') as string).trim();
  } else photo = 'https://ik.imagekit.io/lovelin/Screenshot%20from%202024-06-12%2015-10-02.png?updatedAt=1718185554495';
  return { name, description, photo } as ProfileData;
};

export default getProfile;
