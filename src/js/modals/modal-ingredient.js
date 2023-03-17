import { refs } from '../config/refs';
import axios from 'axios';
import {
  showModal,
  modalCloseOnBtn,
  closeOnBackdropClick,
} from './modal-control';
import BASE_URL from '../base-url';
import { renderIngredient } from './render-markup-modals';
import { onModalIngredientBtnClick } from './modal-favorites-control';

const { modalIngredientEl, modalIngredientCloseBtn } = refs;

async function openModalIngredient(event) {
  if (event.target.dataset.type !== 'open-ingredient') {
    return;
  }
  showModal(modalIngredientEl);

  modalIngredientCloseBtn.addEventListener('click', modalCloseOnBtn);
  modalIngredientEl.addEventListener('click', closeOnBackdropClick);

  const ingredientName = event.target.dataset.name.replace(' ', '_');

  const { ingredients } = await fetchIngredientByName(ingredientName);
  const ingredient = ingredients[0];

  renderIngredient(ingredient);

  const buttonFavorites = document.querySelector('.modal-ingredient__btn');
  buttonFavorites.addEventListener('click', onModalIngredientBtnClick);
}

async function fetchIngredientByName(name) {
  const url = `${BASE_URL}search.php?i=${name}`;

  try {
    const { data } = await axios.get(`${url}`);

    return data;
  } catch ({ response }) {

    return response;
  }
}
export { openModalIngredient };
