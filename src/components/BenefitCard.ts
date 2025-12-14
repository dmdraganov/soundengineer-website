import type { Benefit } from '../types/types';

const BenefitCard = ({ iconId, title, description }: Benefit) => {
  const container = document.createElement('div');
  container.className = 'flex-[1_1_240px]';
  container.innerHTML = `
    <div
      class="flex flex-col gap-2.5 items-center mb-[15px] text-center text-additional"
    >
      <svg class="fill-current aspect-square h-10">
        <use href="/sprite.svg#${iconId}" />
      </svg>
      <h3 class="font-semibold">${title}</h3>
    </div>
    <p class="text-center">
      ${description}
    </p>
  `;
  return container;
};

export default BenefitCard;
