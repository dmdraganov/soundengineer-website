import type { Project } from '../types/types';

const covers = import.meta.glob<{ default: string }>(
  '../assets/images/covers/*'
);

const ProjectCard = async ({ cover, clientName, title }: Project) => {
  const coverUrl = (await covers[`../assets/images/covers/${cover}.jpeg`]())
    .default;
  const container = document.createElement('div');
  container.className = 'text-center';
  container.innerHTML = `
    <div
      class="w-full aspect-square  bg-cover bg-center"
      style="background-image: url('${coverUrl}')"
    >
      <!-- music player -->
    </div>
    <h3 class="my-2.5">${clientName + ' - ' + title}</h3>
  `;
  return container;
};

export default ProjectCard;
