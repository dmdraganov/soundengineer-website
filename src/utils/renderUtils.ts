import ServiceCard from '../components/ServiceCard';
import ReviewElement from '../components/ReviewElement';
import serviceData from '../data/services.json';
import reviewData from '../data/reviews.json';
import type { Project, Review, Service } from '../types/types';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';

const serviceList: Service[] = serviceData as Service[];
const reviewList: Review[] = reviewData as Review[];
const projectList: Project[] = projects as Project[];

export const render = async <T>(
  container: HTMLDivElement,
  dataList: T[],
  component: (data: T) => HTMLElement | Promise<HTMLElement>,
  filterCallback?: (elem: T) => boolean
) => {
  const elementList = (
    filterCallback ? dataList.filter(filterCallback) : dataList
  ).map(component);
  container.replaceChildren(...(await Promise.all(elementList)));
};

export const renderServices = (
  container: HTMLDivElement,
  filterCallback?: (elem: Service) => boolean
) => render(container, serviceList, ServiceCard, filterCallback);

export const renderReviews = (
  container: HTMLDivElement,
  filterCallback?: (elem: Review) => boolean
) => render(container, reviewList, ReviewElement, filterCallback);

export const renderProjects = (
  container: HTMLDivElement,
  filterCallback?: (elem: Project) => boolean
) => {
  render(container, projectList, ProjectCard, filterCallback);
};
