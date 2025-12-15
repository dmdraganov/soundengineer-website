export const initializeBurgerMenu = () => {
  const burgerButton = document.querySelector<HTMLButtonElement>(
    '[data-burger-button]'
  );
  const navMenu = document.querySelector<HTMLElement>('[data-nav-menu]');

  if (!burgerButton || !navMenu)
    return console.error('Burger button or nav menu not found');

  const toggleMenu = (close?: boolean) =>
    navMenu.classList.toggle('translate-y-0', close ? false : undefined);

  burgerButton.addEventListener('click', () => {
    toggleMenu();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && window.innerWidth < 768) toggleMenu(true);
  });
};
