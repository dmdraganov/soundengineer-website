import type { Review } from '../types/types';

const ReviewElement = ({ name, text }: Review) => {
  const container = document.createElement('div');
  container.className = 'flex gap-25px';
  container.innerHTML = `
    <img
      class="rounded-full h-12.5 aspect-square"
      src="/src/assets/images/cover1.jpeg"
      alt=""
    />
    <div>
      <h3 class="font-semibold mb-2.5">${name}</h3>
      <p class="mt-2.5">
        ${text}
      </p>
    </div>
  `;
  return container;
};

export default ReviewElement;
