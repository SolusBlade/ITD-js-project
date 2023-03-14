import { refs } from '../config/refs';
import { showModal } from './modal-control';
import { refs } from '../config/refs';

const { modalIngredientEl } = refs;

function openModalIngredient(event) {
  if (event.target.dataset.type !== 'open-ingredient') {
    return;
  }
  showModal(modalIngredientEl);
}

export { openModalIngredient };

// console.log('closeBtn:', refs.closeBtn);

// if (refs.closeBtn) {
//   refs.closeBtn.addEventListener('click', closeModal);
// }

// function closeModal() {
//   refs.modal.classList.add('is-hidden');
// }
