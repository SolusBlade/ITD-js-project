import { refs } from '../config/refs';
import BASE_URL from '../base-url';
import axios from 'axios';
import {
  noScrollModalOpen,
  isScrollModalClosed,
  modalCloseOnEsc,
  modalCloseOnBtn,
} from './scroll-control-modals';
import {
  showModal,
  closeOnBackdropClick,
  modalCloseOnEsc,
  modalCloseOnBtn,
} from './modal-control';
import { renderRecipe } from './render-markup-modals';
import { openModalIngredient } from './modal-ingredient';

const { gallery, modalRecipeEl, modalRecipeCloseBtn } = refs;

if(gallery){
  gallery.addEventListener('click', openModalRecipe);
}

async function openModalRecipe(event) {
  if (event.target.dataset.type !== 'open-learn-more') {
    return;
  }
  showModal(modalRecipeEl);
  noScrollModalOpen();

  document.addEventListener('keydown', modalCloseOnEsc);
  modalRecipeEl.addEventListener('click', closeOnBackdropClick);
  modalRecipeCloseBtn.addEventListener('click', modalCloseOnBtn);

  // fetch info from gallery card id
  const drinkId = event.target.dataset.id;

  const { drinks } = await fetchDrinkByID(drinkId);
  const drink = drinks[0];

  renderRecipe(drink);

  const ingredientsList = document.querySelector(
    '.modal-recipe__ingredients-list'
  );
  ingredientsList.addEventListener('click', openModalIngredient);
}

async function fetchDrinkByID(drinkId) {
  const url = `${BASE_URL}lookup.php?i=${drinkId}`;
  try {
    const { data } = await axios.get(`${url}`);
    return data;
  } catch ({ response }) {
    console.log('fetchDrinkByID -> response:', response);

    return response;
  }
}
