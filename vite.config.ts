import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rolldownOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        portfolio: 'portfolio.html',
        reviews: 'reviews.html',
        services: 'services.html',
        contacts: 'contacts.html',
      },
    },
  },
  base: '/soundengineer-website/',
});
