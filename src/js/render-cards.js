const galleryRef = document.querySelector('.gallery .container');
import * as icons from '../images/icons.svg';

export default function renderCards(data) {
  let cStorage = JSON.parse(localStorage.getItem('favorite-cocktails'));
  galleryRef.innerHTML = `
  <h2 class="gallery__title">Cocktails</h2>
  <ul class="gallery__list">
  </ul>
  `;
  const galleryListRef = document.querySelector('.gallery__list');
  let card = data
    .map(item => {
      if (cStorage && cStorage.includes(item.idDrink)) {
        return `
              <li class="gallery__item">
              <div class="coctails__card">
                <div class="img_wrapper">
                  <img src="${item.strDrinkThumb}" alt=""/>
                </div>
                <div class="coctails__info">
                  <h3 class="coctails__title">${item.strDrink}</h3>
                  <div class="coctails__btn">
                    <button class="primary-load-more" data-type="open-learn-more" data-id="${item.idDrink}" type="button">Learn more</button>
                    <button class="secondary-add-favorites" data-id="${item.idDrink}" data-favorite="cocktail" type="button">
                      Remove
                      <svg class="empty__heart" width="21" height="19">
                          <use href="${icons}#icon-full-heart"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            `;
      }
      return `
              <li class="gallery__item">
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
                        <use href="${icons}#icon-empty-heart"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            `;
    })
    .join('');

  galleryListRef.innerHTML += card;
}

// {
//   const svg = document.createElement('svg');
//   svg.classList.add('empty__heart');
//   svg.setAttribute('width', 21);
//   svg.setAttribute('height', 19);
//   const use = document.createElement('use');
//   use.setAttribute('href', './images/icons.svg#icon-empty-heart');
//   svg.append(use);
//   galleryListRef.append(svg);
// }
