function showModal(element) {
  element.classList.remove('is-hidden');
}

function hideModal(element) {
  element.classList.add('is-hidden');
}

export { showModal, hideModal };
