import axios from 'axios';
import FavoritesList from './favorites-storage-class';
import BASE_URL from './base-url';
import * as icons from '../images/icons.svg';
import { openModalIngredient } from './modals/modal-ingredient';

const storageData = new FavoritesList();

const listIngridient = document.querySelector('.favorite-ingredients__list');
const galleryFavoritsIng = document.querySelector('.favorite-ingredients');

if (galleryFavoritsIng) {
  galleryFavoritsIng.addEventListener('click', onBtnClick);
  listIngridient.addEventListener('click', openModalIngredient);
}
// Пустий список//

function renderListIngredient() {
  const message = `  <p class="favorite-ingredients__text">
          You haven't added any favorite ingridients yet
      </p>`;
  if(listIngridient){
    listIngridient.insertAdjacentHTML('beforebegin', message);
  }
}

//Запит API//
async function fetchDataCoctail(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}lookup.php?iid=${id}`);
    return data.ingredients[0];
  } catch (error) {

  }
}
//Перевірка на пустий localStorage//
if (storageData.ingredients.length === 0) {
  return renderListIngredient();
}
apiForIdIngredient();
//Запит по id на коктель//
async function apiForIdIngredient() {
  try {
    const ingredients = storageData.ingredients;

    const ingredient = await Promise.all(
      ingredients.map(async id => {
        return await fetchDataCoctail(id);
      })
    );
    if (!storageData.ingredients) {
      renderListCocktail();
    }
    return createCardIngridient(ingredient);
  } catch (error) {

  }
}
//Видалити з localStorage//
function onBtnClick(event) {
  const ingredientId = event.target.dataset.id;
  if (event.target.dataset.favorite === 'ingredient') {
    if (storageData.ingredients.includes(ingredientId)) {
      storageData.removeIngredient(ingredientId);
      document
        .querySelector(`[data-id = '${ingredientId}']`)
        .closest('.favorite-ingredients__item')
        .remove();
      if (storageData.ingredients.length === 0) {
        renderListIngredient();
        galleryFavoritsIng.removeEventListener('click', onBtnClick);
      }
      return;
    }
  }
  
}
//Рендер картки//

function createCardIngridient(data) {
  let card = data
    .map(item => {
      return `<li class="favorite-ingredients__item">
            <h2 class="favorite-ingredients__item-title">${item.strIngredient}</h2>
            <p class="favorite-ingredients__item-text">${item.strType}</p>
            <div class="favorite-button-container">
              <button type="button"  data-type="open-ingredient" data-name="${item.strIngredient}" class="favorite-button__learn-more">
                Learn more
              </button>
              <button type="button" data-id="${item.idIngredient}" data-favorite="ingredient" class="favorite-button__remove">
                Remove
                <svg class="favorite-button__icon" width="17" height="15">
                  <use href="${icons}#icon-full-heart"></use>
                </svg>
              </button>
            </div>
          </li>
  `;
    })
    .join('');
  listIngridient.insertAdjacentHTML('beforeend', card);
}

export { renderListIngredient, createCardIngridient};
