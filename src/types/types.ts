export type Category = 'music' | 'postProduction' | 'speech' | 'commercial';

interface Price {
  amount: number;
  per?: string;
}

export interface Service {
  name: string;
  iconId: string;
  description: string;
  includes: string[];
  price: Price;
  duration: string;
  category: Category;
  isPopular?: boolean;
}

export interface Review {
  avatar: string;
  name: string;
  text: string;
  category: Category;
  isPopular?: boolean;
}

export interface Benefit {
  iconId: string;
  title: string;
  description: string;
}

export interface Project {
  cover: string;
  audio: string;
  clientName: string;
  title: string;
  category: Category;
  isPopular?: boolean;
}
