import { refs } from '../config/refs';
import {
  noScrollModalOpen,
  isScrollModalClosed,
} from './scroll-control-modals';
import { showModal, hideModal } from './modal-control';
import fetchData from '../fetch-data';
import {
  renderRecipe,
  renderRecipeIngredients,
  clearRenderEl,
} from './render-markup-modals';
import { openModalIngredient } from './modal-ingredient';

const {
  backdrop,
  gallery,
  modalRecipeEl,
  modalRecipeCloseBtn,
  modalRecipeRenderEl,
  modalRecipeLinkList,
} = refs;

gallery.addEventListener('click', openModalRecipe);

function openModalRecipe(event) {
  if (event.target.dataset.type !== 'open-learn-more') {
    return;
  }
  showModal(modalRecipeEl);
  noScrollModalOpen();

  document.addEventListener('keydown', modalCloseOnEsc);
  modalRecipeEl.addEventListener('click', isBackdrop);
  modalRecipeCloseBtn.addEventListener('click', modalRecipeClose);

  // fetch info from gallery card id
  const drinkId = event.target.dataset.id;

  fetchData(`lookup.php?i=${drinkId}`).then(renderRecipe);

  //! ingredients links
  // modalRecipeLinkList.addEventListener('click', openModalIngredient);
  // const modalRecipeLinkList = document.querySelector(
  //   '.modal-recipe__ingredients-list'
  // );
  // console.log('openModalRecipe -> modalRecipeLinkList:', modalRecipeLinkList);
}

//
// close modal on backdrop click, Esc, and closeBtn
function isBackdrop(event) {
  if (event.target.classList.contains('backdrop-recipe')) modalRecipeClose();
}

function modalRecipeClose(event) {
  modalRecipeEl.removeEventListener('click', isBackdrop);
  modalRecipeCloseBtn.removeEventListener('click', modalRecipeClose);
  clearRenderEl();
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

//  <ul class="modal-recipe__ingredients-list">
//    <li class="modal-recipe__ingredient">
//      <a class="modal-recipe__ingredient-link" href="#">
//        <span class="modal-recipe__ingredient-measure">1 oz </span>Peach schnapps
//      </a>
//    </li>
//    <a href=""></a>
//    <li class="modal-recipe__ingredient">
//      <a class="modal-recipe__ingredient-link" href="#">
//        <span class="modal-recipe__ingredient-measure">3/4 oz </span>Orange juice
//      </a>
//    </li>
//  </ul>;
