const galleryRef = document.querySelector('.gallery .container');

export default function renderCards(data) {
  galleryRef.innerHTML = `
  <h2 class="gallery__title">Cocktails</h2>
  <ul class="gallery__list">
  </ul>
  `;
  const galleryListRef = document.querySelector('.gallery__list');
  let card = data
    .map(
      item =>
        `<li class="gallery__item">
        <div class="coctails__card">
          <div class="img_wrapper">
            <img src="${item.strDrinkThumb}" alt=""/>
          </div>
          <div class="coctails__info">
            <h3 class="coctails__title">${item.strDrink}</h3>
            <div class="coctails__btn">
              <button class="primary-load-more" data-type="open-learn-more" data-id="${item.idDrink}" type="button">Learn more</button>
              <button class="secondary-add-favorites" data-id="${item.idDrink}" data-favorite="cocktail" type="button">
                Add to
                <svg class="empty__heart" width="21" height="19">
                  <use href="/icons.adfc4680.svg#icon-empty-heart"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </li>`
    )
    .join('');

  galleryListRef.innerHTML += card;
}
