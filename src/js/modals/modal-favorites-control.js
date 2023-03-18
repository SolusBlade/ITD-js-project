import axios from 'axios';
import BASE_URL from '../base-url';

import { renderListIngredient, createCardIngridient} from '../favorit-ingredients';
import { createCardCoctail} from '../favorites-coctails';
import StorageClass from '../favorites-storage-class';
const storage = new StorageClass();

import * as icons from '../../images/icons.svg';

async function fetchDataCoctail(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}lookup.php?i=${id}`);
    return data.drinks;

  } catch (error) {

  }
}

async function fetchDataIngredients(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}lookup.php?iid=${id}`);
    return data.ingredients;
  } catch (error) {

  }
}

function onModalRecipeBtnClick(event) {
  const parentBtn = document.querySelectorAll(
    `[data-id='${event.target.dataset.id}']`
  );
  const targetBtn = event.target;
  const cocktailId = event.target.dataset.id;
  if (storage.cocktails.includes(cocktailId)) {
    onRemoveBtn(targetBtn);
    onRemoveGalleryBtn(parentBtn[1]);
    storage.removeCocktail(cocktailId);
    const cocktail = document.querySelector(".favorite-cocktails__item");
    if(cocktail){
      document
      .querySelector(`[data-id = '${cocktailId}']`)
      .closest('.favorite-cocktails__item')
      .remove();
    }
    
    return;
  }
  onAddBtn(targetBtn);
  onAddCocktailBtn(parentBtn[1], cocktailId);
  storage.addCocktail(cocktailId);
}

function onModalIngredientBtnClick(event) {
  const targetBtn = event.target;
  const ingredientId = event.target.dataset.id;
  if (storage.ingredients.includes(ingredientId)) {
    onRemoveBtn(targetBtn);
    storage.removeIngredient(ingredientId);
    const ingredient = document.querySelector(".favorite-ingredients__item");
    if(ingredient){
      document
      .querySelector(`[data-id = '${ingredientId}']`)
      .closest('.favorite-ingredients__item')
      .remove();
    }
    if (storage.ingredients.length === 0) {
      renderListIngredient();
    }
    return;
  }

  onAddBtn(targetBtn);
  onAddIngredientBtn(ingredientId);
  storage.addIngredient(ingredientId);
}

function onAddBtn(button) {
  button.textContent = `Remove from favorites`;
}

async function onAddCocktailBtn(button, id) {
  if(document.querySelector(".gallery__list")){button.innerHTML = `
  Remove
  <svg class="empty__heart" width="21" height="19">
      <use href="${icons}#icon-full-heart"></use>
  </svg>
  `;
  }
  const cocktail = document.querySelector(".favorite-cocktails");
  if(cocktail){
    const data = await fetchDataCoctail(id);
    createCardCoctail(data);
  }
}

async function onAddIngredientBtn(id) {
  const ingredient = document.querySelector(".favorite-ingredients");
  if(ingredient){
    const data = await fetchDataIngredients(id);
    createCardIngridient(data);
  }
}
function onRemoveBtn(button) {
  button.textContent = `Add to favorites`;
}
function onRemoveGalleryBtn(button) {
  if(document.querySelector(".gallery__list")){
    button.innerHTML = `
    Add to
    <svg class="empty__heart" width="21" height="19">
        <use href="${icons}#icon-empty-heart"></use>
    </svg>
    `;
  }
}
export { onModalRecipeBtnClick, onModalIngredientBtnClick };


