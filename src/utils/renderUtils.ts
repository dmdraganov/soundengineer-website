import ServiceCard from '../components/ServiceCard';
import ReviewElement from '../components/ReviewElement';
import serviceData from '../data/services.json';
import reviewData from '../data/reviews.json';
import type { Review, Service } from '../types/types';

const serviceList: Service[] = serviceData as Service[];
const reviewList: Review[] = reviewData as Review[];

export const render = <T>(
  container: HTMLDivElement,
  dataList: T[],
  component: (data: T) => HTMLElement,
  filterCallback?: (elem: T) => boolean
) => {
  const elementList = (
    filterCallback ? dataList.filter(filterCallback) : dataList
  ).map(component);
  container.replaceChildren(...elementList);
};

export const renderServices = (
  container: HTMLDivElement,
  filterCallback?: (elem: Service) => boolean
) => render(container, serviceList, ServiceCard, filterCallback);

export const renderReviews = (
  container: HTMLDivElement,
  filterCallback?: (elem: Review) => boolean
) => render(container, reviewList, ReviewElement, filterCallback);
