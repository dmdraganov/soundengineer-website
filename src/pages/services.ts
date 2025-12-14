import type { Service } from '../types/types';
import { renderServices } from '../utils/renderUtils';

const tabContainer = document.querySelector<HTMLFieldSetElement>(
  '[data-tabs-container]'
);
const serviceContainer = document.querySelector<HTMLDivElement>(
  '[data-service-container]'
);

if (!tabContainer || !serviceContainer)
  throw new Error('Tab container or service container not found');

const getFilterCallback =
  (category: string) =>
  (elem: Service): boolean =>
    elem.category === category;

const initialTab = tabContainer.querySelector<HTMLInputElement>('[checked]');

if (initialTab) {
  renderServices(serviceContainer, getFilterCallback(initialTab.value));
}

tabContainer.addEventListener('change', (e) => {
  if (!(e.target instanceof HTMLInputElement)) return;
  const category = e.target.value;
  renderServices(serviceContainer, getFilterCallback(category));
});
