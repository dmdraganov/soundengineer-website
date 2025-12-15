import { renderProjects } from '../utils/renderUtils';

const projectsContainer = document.querySelectorAll<HTMLDivElement>(
  '[data-project-container]'
);
projectsContainer.forEach((container) => {
  renderProjects(
    container,
    (elem) => elem.category === container.dataset.projectContainer
  );
});
