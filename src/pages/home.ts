import type { Benefit, Project } from '../types/types';
import benefits from '../data/benefits.json';
import { render, renderReviews, renderServices } from '../utils/renderUtils';
import BenefitCard from '../components/BenefitCard';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';
import { initializeModal } from '../utils/modalUtils';

initializeModal();

const serviceContainer = document.querySelector<HTMLDivElement>(
  '[data-service-container]'
);
const benefitContainer = document.querySelector<HTMLDivElement>(
  '[data-benefit-container]'
);
const reviewContainer = document.querySelector<HTMLDivElement>(
  '[data-review-container]'
);
const projectContainer = document.querySelector<HTMLDivElement>(
  '[data-project-container]'
);

if (!serviceContainer) throw new Error('Service container not found');
if (!benefitContainer) throw new Error('Benefit container not found');
if (!reviewContainer) throw new Error('Review container not found');
if (!projectContainer) throw new Error('Project container not found');

const benefitList: Benefit[] = benefits as Benefit[];
const projectList: Project[] = projects as Project[];

renderServices(serviceContainer, (elem) => !!elem.isPopular);
render<Benefit>(benefitContainer, benefitList, BenefitCard);
renderReviews(reviewContainer, (elem) => !!elem.isPopular);

const renderProjects = async (
  container: HTMLDivElement,
  dataList: Project[]
) => {
  container.append(...(await Promise.all(dataList.map(ProjectCard))));
};
renderProjects(projectContainer, projectList);
