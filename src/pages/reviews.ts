import type { Review } from '../types/types';
import { initializeModal } from '../utils/modalUtils';
import { renderReviews } from '../utils/renderUtils';

initializeModal();

const tabContainer = document.querySelector<HTMLFieldSetElement>(
  '[data-tabs-container]'
);
const reviewsContainer = document.querySelector<HTMLDivElement>(
  '[data-review-container]'
);
const avatarInput = document.querySelector<HTMLInputElement>(
  '[data-avatar="input"]'
);
const avatarPreview = document.querySelector<HTMLImageElement>(
  '[data-avatar="preview"]'
);
const avatarPlaceholder = document.querySelector<HTMLElement>(
  '[data-avatar="placeholder"]'
);

if (!reviewsContainer || !tabContainer)
  throw new Error('Review container or tab container not found');

const getFilterCallback =
  (category: string) =>
  (elem: Review): boolean => {
    if (category === 'all') return true;
    return elem.category === category;
  };

const initialTab = tabContainer.querySelector<HTMLInputElement>('[checked]');

if (initialTab) renderReviews(reviewsContainer);

tabContainer.addEventListener('change', (e) => {
  if (!(e.target instanceof HTMLInputElement)) return;
  const category = e.target.value;
  renderReviews(
    reviewsContainer,
    category !== 'all' ? getFilterCallback(category) : undefined
  );
});

if (!avatarInput || !avatarPreview || !avatarPlaceholder)
  throw new Error('Avatar elements not found');

const reader = new FileReader();
reader.addEventListener('load', (e) => {
  const fileReader = e.target;
  if (!fileReader || typeof fileReader.result !== 'string') return;
  avatarPreview.src = fileReader.result;
  avatarPreview.classList.remove('hidden');
});

avatarInput.addEventListener('change', (e) => {
  const input = e.target;
  if (!(input instanceof HTMLInputElement) || !input.files?.[0]) return;
  reader.readAsDataURL(input.files[0]);
});
