import type { Review } from '../types/types';
const avatars = import.meta.glob<{ default: string }>('../assets/images/*');

const ReviewElement = async ({ avatar, name, text }: Review) => {
  try {
    const avatarUrl = (await avatars[`../assets/images/${avatar}`]())
      .default;

    const container = document.createElement('div');
    container.className = 'flex gap-25px';
    container.innerHTML = `
      <img
        class="rounded-full h-12.5 aspect-square"
        src="${avatarUrl}"
        alt="аватарка"
      />
      <div>
        <h3 class="font-semibold mb-2.5">${name}</h3>
        <p class="mt-2.5">
          ${text}
        </p>
      </div>
    `;
    return container;
  } catch (error) {
    console.error(error);
    return document.createElement('div');
  }
};

export default ReviewElement;
