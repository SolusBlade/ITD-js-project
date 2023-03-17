import { refs } from '../config/refs';
import { clearRenderEl } from '../modals/render-markup-modals';
import { isScrollModalClosed } from './scroll-control-modals';

const {
  modalIngredientEl,
  modalRecipeEl,
  modalIngredientRenderEl,
  modalRecipeRenderEl,
} = refs;

function showModal(element) {
  element.classList.remove('is-hidden');
}

function hideModal(element) {
  element.classList.add('is-hidden');
}

function modalCloseOnEsc(event) {
  event.preventDefault();

  if (event.code !== 'Escape') return;
  if (!modalIngredientEl.classList.contains('is-hidden')) {
    modalClose(modalIngredientEl);
    return;
  }
  modalClose(modalRecipeEl);
  document.removeEventListener('keydown', modalCloseOnEsc);
}

function modalCloseOnBtn(event) {
  event.currentTarget.classList.contains('modal-recipe__close') &&
    modalClose(modalRecipeEl);
  event.currentTarget.classList.contains('modal-ingredient__close') &&
    modalClose(modalIngredientEl);
}

function modalClose(element) {
  if (element === modalIngredientEl) {
    hideModal(element);
    clearRenderEl(modalIngredientRenderEl);
    return;
  }
  element.removeEventListener('click', closeOnBackdropClick);
  clearRenderEl(modalRecipeRenderEl);
  hideModal(element);
  isScrollModalClosed();
  document.removeEventListener('keydown', modalCloseOnEsc);
}
function closeOnBackdropClick(event) {
  event.target.classList.contains('backdrop-recipe') &&
    modalClose(modalRecipeEl);
  event.target.classList.contains('backdrop-ingredient') &&
    modalClose(modalIngredientEl);
}

export {
  showModal,
  hideModal,
  modalClose,
  modalCloseOnEsc,
  closeOnBackdropClick,
  modalCloseOnBtn,
};
