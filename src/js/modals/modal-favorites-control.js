import StorageClass from '../favorites-storage-class';
const storage = new StorageClass();

function onModalRecipeBtnClick(event) {
  const targetBtn = event.target;
  const cocktailId = event.target.dataset.id;
  if (storage.cocktails.includes(cocktailId)) {
    onRemoveBtn(targetBtn);
    storage.removeCocktail(cocktailId);
    return;
  }
  onAddBtn(targetBtn);
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
function onRemoveBtn(button) {
  button.textContent = `Add to favorites`;
}
export { onModalRecipeBtnClick, onModalIngredientBtnClick };
