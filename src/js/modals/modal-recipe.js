import { refs } from '../config/refs';
import {
  noScrollModalOpen,
  isScrollModalClosed,
} from './scroll-control-modals';
import { showModal, hideModal } from './modal-control';

const { body, modalRecipeEl, modalRecipeOpenBtns, modalRecipeCloseBtn } = refs;

addEventListenersOnButtons(modalRecipeOpenBtns);

function addEventListenersOnButtons(buttonsArray) {
  // for(const button in array)
  buttonsArray.forEach(button =>
    button.addEventListener('click', modalRecipeOpen)
  );
}

function modalRecipeOpen() {
  showModal(modalRecipeEl);
  noScrollModalOpen();
  document.addEventListener('keydown', modalCloseOnEsc);
  modalRecipeCloseBtn.addEventListener('click', modalRecipeClose);
}

function modalRecipeClose() {
  hideModal(modalRecipeEl);
  isScrollModalClosed();
}

function modalCloseOnEsc(event) {
  event.preventDefault();

  if (event.code === 'Escape') {
    modalRecipeClose();
    document.removeEventListener('keydown', modalCloseOnEsc);
  }
}
