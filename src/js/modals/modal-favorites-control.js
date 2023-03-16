import StorageClass from '../favorites-storage-class';
const storage = new StorageClass();

function onModalRecipeBtnClick(event) {
  const targetBtn = event.target;
  const cocktailId = event.target.dataset.id;
  if (storage.cocktails.includes(cocktailId)) {
    onRemoveBtn(targetBtn);
    storage.removeCocktail(cocktailId);
    console.log('onModalRecipeBtnClick -> storage:', storage);

    return;
  }
  onAddBtn(targetBtn);
  storage.addCocktail(cocktailId);
  console.log('onModalRecipeBtnClick -> storage:', storage);
}

function onAddBtn(button) {
  button.textContent = `Remove from favorites`;
}
function onRemoveBtn(button) {
  button.textContent = `Add to favorites`;
}
export { onModalRecipeBtnClick };
