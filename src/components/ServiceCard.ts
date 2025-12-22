import type { Service } from '../types/types';

const ServiceCard = ({
  name,
  iconId,
  description,
  includes,
  price,
  duration,
}: Service) => {
  const serviceElement = document.createElement('div');
  serviceElement.className =
    'flex-[1_1_360px] flex flex-col justify-between gap-[15px] bg-bg-secondary rounded-[35px] p-25px ';
  serviceElement.innerHTML = `
    <div class="flex flex-col gap-[15px]">
      <div class="flex gap-[15px]">
        <h3 class="flex-1 text-2xl font-semibold ">
          ${name}
        </h3>
        <svg class="${
          iconId === 'drum' ? 'fill-none' : 'fill-white'
        } h-7.5 aspect-square">
          <use href="./sprite.svg#${iconId}" />
        </svg>
      </div>
      <p>
        ${description}
      </p>
      <button class="w-fit font-semibold flex gap-2.5 items-center cursor-pointer" data-spoiler="button">
        Подробнее
        <svg class="arrow fill-white transition-transform" data-spoiler="button-arrow">
          <use href="./sprite.svg#arrow" />
        </svg>
      </button>
      <ul data-spoiler="list" class="list-disc list-inside overflow-hidden transition-[max-height] duration-500 ease-in-out max-h-0">
        ${includes.map((item) => `<li>${item}</li>`).join('')}
      </ul>
    </div>
    <div class="flex flex-col gap-[15px]">
      <span class="text-[32px] font-medium text-right">
        От ${price.amount} &#x20bd;${price.per ? '/' + price.per : ''}
      </span>
      <div class="flex justify-between items-center">
        <span class="text-additional font-medium">${duration}</span> 
        <a href="./contacts.html" class="btn">Обсудить проект</a>
      </div>
    </div>
    `;

  const detailsButton = serviceElement.querySelector('[data-spoiler="button"]');
  if (detailsButton) {
    const arrow = detailsButton.querySelector('.arrow');
    const detailsList = serviceElement.querySelector<HTMLElement>(
      '[data-spoiler="list"]'
    );

    if (detailsList && arrow) {
      detailsButton.addEventListener('click', () => {
        arrow.classList.toggle('rotate-180');
        detailsList.style.maxHeight = detailsList.style.maxHeight
          ? ''
          : `${detailsList.scrollHeight}px`;
      });
    }
  }

  return serviceElement;
};

export default ServiceCard;
