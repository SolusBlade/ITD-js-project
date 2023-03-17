import StorageClass from '../favorites-storage-class';
const storage = new StorageClass();

import * as icons from '../../images/icons.svg';

function onModalRecipeBtnClick(event) {
  const parentBtn = document.querySelectorAll(`[data-id='${event.target.dataset.id}']`)
  const targetBtn = event.target;
  const cocktailId = event.target.dataset.id;
  if (storage.cocktails.includes(cocktailId)) {
    onRemoveBtn(targetBtn);
    onRemoveGalleryBtn(parentBtn[1]);
    storage.removeCocktail(cocktailId);
    return;
  }
  onAddBtn(targetBtn);
  onAddGalleryBtn(parentBtn[1]);
  storage.addCocktail(cocktailId);
}

function onModalIngredientBtnClick(event) {
  const targetBtn = event.target;
  const ingredientId = event.target.dataset.id;
  if (storage.ingredients.includes(ingredientId)) {
    onRemoveBtn(targetBtn);
    storage.removeIngredient(ingredientId);
    return;
  }
  onAddBtn(targetBtn);
  storage.addIngredient(ingredientId);
}

function onAddBtn(button) {
  button.textContent = `Remove from favorites`;
}
function onAddGalleryBtn(button) {
  button.innerHTML = `
  Remove
  <svg class="empty__heart" width="21" height="19">
      <use href="${icons}#icon-full-heart"></use>
  </svg>
`;
}
function onRemoveBtn(button) {
  button.textContent = `Add to favorites`;
}
function onRemoveGalleryBtn(button) {
  button.innerHTML = `
  Add to
  <svg class="empty__heart" width="21" height="19">
      <use href="${icons}#icon-empty-heart"></use>
  </svg>
`;
}
export { onModalRecipeBtnClick, onModalIngredientBtnClick };
