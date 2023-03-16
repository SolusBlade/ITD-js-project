import { refs } from '../config/refs';
import BASE_URL from '../base-url';
import axios from 'axios';

import {
  noScrollModalOpen,
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
import { onModalRecipeBtnClick } from './modal-favorites-control';

const { gallery, modalRecipeEl, modalRecipeCloseBtn } = refs;

if (gallery) {
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

  const drinkId = event.target.dataset.id;

  const { drinks } = await fetchDrinkByID(drinkId);
  const drink = drinks[0];

  renderRecipe(drink);

  const ingredientsList = document.querySelector(
    '.modal-recipe__ingredients-list'
  );
  const buttonFavorites = document.querySelector('.modal-recipe__btn');

  ingredientsList.addEventListener('click', openModalIngredient);
  buttonFavorites.addEventListener('click', onModalRecipeBtnClick);
}

async function fetchDrinkByID(drinkId) {
  const url = `${BASE_URL}lookup.php?i=${drinkId}`;
  try {
    const { data } = await axios.get(`${url}`);
    return data;
  } catch ({ response }) {

    return response;
  }
}

export { openModalRecipe };
