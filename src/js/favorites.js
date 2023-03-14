import axios from 'axios';
// const keyInput = JSON.parse(localStorage.getItem(KEYS));

const listCocktails = document.querySelector('.favorite-cocktails__list');
const listIngridient = document.querySelector('.favorite-ingredients__list');
const buttonRemove = document.querySelector('.favorite-button__remove');
buttonRemove.addEventListener('click', removeFromLocalStorege);

function removeFromLocalStorege(card) {
  localStorage.removeItem(card);
}

function createCardCoctail() {
  return `<li class="favorite-cocktails__item">
            <img class="favorite-cocktails__item-img" src="" alt="" />
            <div class="favorite-cocktails__item-container">
              <h2 class="favorite-cocktails__item-title">Campari</h2>
              <div class="button-container">
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
            </div>
          </li>
    `;
}

function createCardIngridient() {
  return `<li class="favorite-ingredients__item">
            <h2 class="favorite-ingredients__item-title">Campari</h2>
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
}
