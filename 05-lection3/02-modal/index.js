(function () {
  const close = document.getElementById('modal-close');
  const modal = document.getElementById('modal');
  const modalOpen = document.getElementById('modal-open');

  if (!close || !modalOpen || !modal) {
    return;
  }

  modalOpen.addEventListener('click', () => {
    modal.style.display = 'block';
    modalOpen.style.display = 'none';
    document.body.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    modalOpen.style.display = 'inline-block';
    document.body.overflow = 'initial';
  });
})();
