import axios from 'axios';
import FavoritesList from './favorites-storage-class';
import BASE_URL from './base-url';
import * as icons from '../images/icons.svg';
import { openModalRecipe } from './modals/modal-recipe';

const storageData = new FavoritesList();
const listCocktails = document.querySelector('.favorite-cocktails__list');
const galeryFavorits = document.querySelector('.favorite-cocktails');

if(galeryFavorits){
  galeryFavorits.addEventListener('click', onBtnClick);
  listCocktails.addEventListener('click', openModalRecipe);
}

// Пустий список//
function renderListCocktail() {
  const message = `<p class="favorite-cocktails__text">
          You haven't added any favorite cocktails yet
        </p>`;
  if(listCocktails){
    listCocktails.insertAdjacentHTML('beforebegin', message);
  }
}

//Запит API//
async function fetchDataCoctail(id) {
  try {
    const { data } = await axios.get(`${BASE_URL}lookup.php?i=${id}`);
    return data.drinks[0];
  } catch (error) {

  }
}
//Перевірка на пустий localStorage//
if (storageData.cocktails.length === 0) {
  renderListCocktail();
  if(galeryFavorits) {
    galeryFavorits.removeEventListener('click', onBtnClick);
  }
}
apiForIdCoctail();
//Запит по id на коктель//
async function apiForIdCoctail() {
  try {
    const cocktails = storageData.cocktails;

    const coctl = await Promise.all(
      cocktails.map(async id => {
        return await fetchDataCoctail(id);
      })
    );
    if (!storageData.cocktails) {
      renderListCocktail();
    }
    return createCardCoctail(coctl);
  } catch (error) {

  }
}
//Видалити з localStorage//
function onBtnClick(event) {
  const cocktailId = event.target.dataset.id;
  if (event.target.dataset.favorite === 'cocktail') {
    if (storageData.cocktails.includes(cocktailId))
    storageData.removeCocktail(cocktailId);
    document
    .querySelector(`[data-id='${cocktailId}']`)
    .closest('.favorite-cocktails__item')
    .remove();
    if (storageData.cocktails.length === 0) {
      renderListCocktail();
      galeryFavorits.removeEventListener('click', onBtnClick);
    }
    return;
  }
}

//Рендер картки//
function createCardCoctail(data) {
  let card = data
    .map(item => {
      return `<li class="favorite-cocktails__item">
            <img class="favorite-cocktails__item-img" src="${item.strDrinkThumb}" alt="${item.strCategory}" />
            <div class="favorite-cocktails__item-container">
              <h2 class="favorite-cocktails__item-title">${item.strDrink}</h2>
              <div class="favorite-button-container">
                <button type="button" data-type='open-learn-more' data-id="${item.idDrink}" class="favorite-button__learn-more">
                  Learn more
                </button>
                <button type="button" data-id="${item.idDrink}" data-favorite="cocktail" class="favorite-button__remove">
                  Remove
                  <svg class="favorite-button__icon" width="17" height="15">
                    <use href="${icons}#icon-full-heart"></use>
                  </svg>
                </button>
              </div>
            </div>
          </li>
    `;
    })
    .join('');

  listCocktails.insertAdjacentHTML('beforeend', card);
}
export {createCardCoctail};