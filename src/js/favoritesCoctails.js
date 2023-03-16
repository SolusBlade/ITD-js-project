import axios from 'axios';
import FavoritesList from './favorites-storage-class';
import BASE_URL from './base-url';
import * as icons from '../images/icons.svg';

const storageData = new FavoritesList();
const listCocktails = document.querySelector('.favorite-cocktails__list');
const listIngridient = document.querySelector('.favorite-ingredients__list');

// Пустий список//

function renderListCocktail() {
  const message = `<p class="favorite-cocktails__text">
          You haven't added any favorite cocktails yet
        </p>`;
  listCocktails.insertAdjacentHTML('beforebegin', message);
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
if (storageData.cocktails.length === 0) {
  renderListCocktail();
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
    console.log(error);
  }
}
//Видалити з localStorage//
function onBtnClick(event) {
  const cocktailId = event.target.dataset.id;
  if (storageData.cocktails.includes(cocktailId)) {
    storageData.removeCocktail(cocktailId);
  } else if (!storageData.cocktails) {
    renderListCocktail();
  }
  return;
}
//Рендер картки//
function createCardCoctail(data) {
  let card = data
    .map(item => {
      return `<li class="favorite-cocktails__item">
            <img class="favorite-cocktails__item-img" src="${item.strDrinkThumb}" alt="" />
            <div class="favorite-cocktails__item-container">
              <h2 class="favorite-cocktails__item-title">${item.strDrink}</h2>
              <div class="favorite-button-container">
                <button type="button" data-type="open-learn-more" class="favorite-button__learn-more">
                  Learn more
                </button>
                <button type="button" data-id="${item.idDrink}" class="favorite-button__remove">
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
  const galleryFavorits = document.querySelector('.favorite-cocktails');
  galleryFavorits.addEventListener('click', onBtnClick);
}

if (storageData.ingredients.length === 0) {
  renderListIngredient();
}
apiForIdIngredient();

function renderListIngredient() {
  const message = `  <p class="favorite-ingredients__text">
          You haven't added any favorite ingridients yet
      </p>`;

  listIngridient.insertAdjacentHTML('beforbegin', message);
}

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

function createCardIngridient(data) {
  let card = data
    .map(item => {
      return `<li class="favorite-ingredients__item">
            <h2 class="favorite-ingredients__item-title">${item.strDrink}</h2>
            <p class="favorite-ingredients__item-text">Liqueur</p>
            <div class="favorite-button-container">
              <button type="button" class="favorite-button__learn-more">
                Learn more
              </button>
              <button type="button" class="favorite-button__remove">
                Remove
                <svg class="favorite-button__icon" width="17" height="15">
                  <use href="./images/icons.svg#icon-full-heart"></use>
                </svg>
              </button>
            </div>
          </li>
  `;
    })
    .join('');
  if(listIngridient){
    listIngridient.insertAdjacentHTML('beforeend', card);
  }
  const galleryFavorits = document.querySelector('.favorite-cocktails');
  if(galleryFavorits){
    galleryFavorits.addEventListener('click', onBtnClick);
  }
  
}
