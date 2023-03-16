import axios from 'axios';
import FavoritesList from './favorites-storage-class';
import BASE_URL from './base-url';
import * as icons from '../images/icons.svg';

const storageData = new FavoritesList();

const listIngridient = document.querySelector('.favorite-ingredients__list');

// Пустий список//

function renderListIngredient() {
  const message = `  <p class="favorite-ingredients__text">
          You haven't added any favorite ingridients yet
      </p>`;

  listIngridient.insertAdjacentHTML('beforebegin', message);
}

//Запит API//
async function fetchDataCoctail(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}lookup.php?i=${id}`);
    return data.drinks[0];
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
}
//Видалити з localStorage//
function onBtnClick(event) {
  const ingredientId = event.target.dataset.id;
  if (storageData.ingredients.includes(ingredientId)) {
    storageData.removeIngredient(ingredientId);
  } else if (!storageData.ingredients) {
    renderListIngredient();
  }
  return;
}
//Рендер картки//

function createCardIngridient(data) {
  let card = data
    .map(item => {
      return `<li class="favorite-ingredients__item">
            <h2 class="favorite-ingredients__item-title">${item.strDrink}</h2>
            <p class="favorite-ingredients__item-text">${item.strIngredient}</p>
            <div class="favorite-button-container">
              <button type="button" data-type="open-learn-more"  class="favorite-button__learn-more">
                Learn more
              </button>
              <button type="button" data-id="${item.idDrink}class="favorite-button__remove">
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
  const galleryFavorits = document.querySelector('.favorite-cocktails');
  galleryFavorits.addEventListener('click', onBtnClick);
}
