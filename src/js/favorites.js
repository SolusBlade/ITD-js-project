import axios from 'axios';

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
