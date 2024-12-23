 const modal_openBtn = document.getElementById('modal_openBtn');
      const modal_closeBtn = document.getElementById('modal_closeBtn');
      const modalOverlay = document.getElementById('modalOverlay');

      const openModal = () => {
        modalOverlay.classList.add('is-open');
      };

      const closeModal = () => {
        modalOverlay.classList.remove('is-open');
      };

modal_openBtn.addEventListener('click', openModal);
modal_closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});
      