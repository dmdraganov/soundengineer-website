import './style.css';
import { services } from './services';

const servicesContainer = document.querySelector(
  '[data-services-container]'
) as HTMLDivElement;

services.forEach((service) => {
  const serviceElement = service.createElement();
  servicesContainer.append(serviceElement);
});
