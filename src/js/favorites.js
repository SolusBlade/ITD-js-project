

const listCocktails = document.querySelector('.favorite-cocktails__list');
const listIngridient = document.querySelector('.favorite-ingredients__list');
const buttonRemove = document.querySelector('.favorite-button__remove');



function renderListFavorites() {
  listCocktails.innerHTML = `
     <p class="favorite-cocktails__text">
          You haven't added any favorite cocktails yet
        </p>`;
  listIngridient.innerHTML = `  <p class="favorite-ingredients__text">
          You haven't added any favorite ingridients yet
        </p>`;
}

function createCardCoctail(data) {
  let card = data
    .map(
      item =>
        `<li class="favorite-cocktails__item">
            <img class="favorite-cocktails__item-img" src="${item.strDrinkThumb}" alt="" />
            <div class="favorite-cocktails__item-container">
              <h2 class="favorite-cocktails__item-title">${item.strDrink}</h2>
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
    `
    )
    .join('');
  listCocktails.insertAdjacentHTML(data);
}

function createCardIngridient() {
  let card = data
    .map(
      item =>
        `<li class="favorite-ingredients__item">
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
  `
    )
    .join('');
  listIngridient.insertAdjacentHTML(data);
}
