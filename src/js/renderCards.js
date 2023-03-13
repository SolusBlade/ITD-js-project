import './base-url';
const galleryListRef = document.querySelector('.gallery__list');

export default function renderCards(data) {
  let card = data
    .map(
      item =>
        `<li class="gallery__item">
        <div class="coctails__card">
          <div class="img_wrapper">
            <img src="${item.strDrinkThumb}" alt="" />
          </div>
          <div class="coctails__info">
            <h3 class="coctails__title">${item.strDrink}</h3>
            <div class="coctails__btn">
              <button class="primary__btn" type="button">Learn more</button>
              <button class="secondary__btn" type="button">
                Add to
                <svg class="empty__heart" width="21" height="19">
                  <use href="./images/icons.svg#icon-empty-heart"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </li>`
    )
    .join('');

  galleryListRef.insertAdjacentHTML('beforeend', card);
}
