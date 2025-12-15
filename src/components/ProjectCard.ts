import type { Project } from '../types/types';

const covers = import.meta.glob<{ default: string }>(
  '../assets/images/covers/*'
);
const audios = import.meta.glob<{ default: string }>('../assets/audio/*');

const audioArray: HTMLAudioElement[] = [];

const setIcon = (button: HTMLButtonElement, icon: 'play' | 'pause') => {
  button.innerHTML = `
    <svg class="fill-current h-10 w-10">
      <use href="/sprite.svg#${icon}" />
    </svg>
  `;
};

const ProjectCard = async ({ cover, audio, clientName, title }: Project) => {
  try {
    const coverUrl = (await covers[`../assets/images/covers/${cover}.jpeg`]())
      .default;
    const audioUrl = (await audios[`../assets/audio/${audio}.mp3`]()).default;
    const container = document.createElement('div');
    container.className = 'text-center';
    container.innerHTML = `
    <div
      class="relative w-full aspect-square bg-cover bg-center"
      style="background-image: url('${coverUrl}')"
    >
      <div class="h-full w-full player" data-player>
        <audio src="${audioUrl}"></audio>
        <button data-player-button class="absolute top-1/2 left-1/2 -translate-1/2">
          <svg class="fill-current h-10 w-10">
            <use href="/sprite.svg#play"/>
          </svg>
        </button>
        <input class="player-progress absolute bottom-2.5 inset-x-[15px]" type="range" value="0" min="0" max="100" data-player-progress />
        <input type="range" min="0" max="1" step="0.01" value="1" data-player-volume>
      </div>
    </div>
    <h3 class="my-2.5">${clientName + ' - ' + title}</h3>
  `;
    const playButton = container.querySelector<HTMLButtonElement>(
      '[data-player-button]'
    );
    const audioElement = container.querySelector<HTMLAudioElement>('audio');
    const progressBar = container.querySelector<HTMLInputElement>(
      '[data-player-progress]'
    );
    const volumeBar = container.querySelector<HTMLInputElement>(
      '[data-player-volume]'
    );

    if (playButton && audioElement && progressBar && volumeBar) {
      audioArray.push(audioElement);

      playButton.addEventListener('click', () => {
        if (audioElement.paused) {
          audioArray.forEach((elem) => {
            if (elem !== audioElement) elem.pause();
          });
          audioElement.play();
        } else audioElement.pause();
      });
      audioElement.addEventListener('play', () => {
        setIcon(playButton, 'pause');
      });
      audioElement.addEventListener('pause', () => {
        setIcon(playButton, 'play');
      });
      audioElement.addEventListener('timeupdate', () => {
        progressBar.valueAsNumber =
          (audioElement.currentTime / audioElement.duration) * 100;
      });
      progressBar.addEventListener('input', () => {
        audioElement.currentTime =
          (progressBar.valueAsNumber / 100) * audioElement.duration;
      });
      volumeBar.addEventListener('input', () => {
        audioElement.volume = volumeBar.valueAsNumber;
      });
    }
    return container;
  } catch (error) {
    console.error(error);
    return document.createElement('div');
  }
};

export default ProjectCard;
