export const initializeModal = () => {
  const form = document.querySelector<HTMLFormElement>('[data-form]');
  const modalContainer = document.querySelector<HTMLDivElement>('[data-modal]');

  if (!modalContainer || !form) return console.error('Modal or form not found');

  const modalCloseButton =
    modalContainer.querySelector<HTMLButtonElement>('[data-modal-close]');

  if (!modalCloseButton) return console.error('Modal close button not found');

  const handleToggleModal = (e: SubmitEvent | PointerEvent) => {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      form.reset();

      if (form.dataset.form === 'review') {
        const avatarPreview = form.querySelector<HTMLImageElement>(
          '[data-avatar="preview"]'
        );
        avatarPreview?.classList.add('hidden');
      }
    }
    modalContainer.classList.toggle('hidden');
  };

  form.addEventListener('submit', handleToggleModal);
  modalCloseButton.addEventListener('click', handleToggleModal);
};
