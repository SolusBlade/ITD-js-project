import * as img from '../images/error-img.png';
const galleryRef = document.querySelector('.gallery .container');
const galleryListRef = document.querySelector('.gallery__list');
const error = `<img
class="error-img"
src="${img}"
alt="error-img"
width="345"
/>
`;

export default function renderCards() {
  const galleryTitleRef = document.querySelector('.gallery__title');
  galleryListRef.replaceChildren();
  galleryTitleRef.innerHTML = `
    Sorry, we didn't find any cocktail for you
    `;
  galleryListRef.innerHTML = `<li class="error_item">${error}</li>`;
}
