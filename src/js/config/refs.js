export const refs = {
  body: document.querySelector('body'),
  backdrop: document.querySelector('.backdrop'),
  // backdropIngredient: document.querySelector('.backdrop.ingredient'),
  gallery: document.querySelector('.gallery'),
  modalRecipeCloseBtn: document.querySelector('[data-modal-recipe-close]'),
  modalRecipeEl: document.querySelector('[data-modal-recipe]'),
  modalIngredientEl: document.querySelector('[data-modal-ingredient]'),
  modalIngredientCloseBtn: document.querySelector(
    '[data-modal-ingredient-close]'
  ),
  modalRecipeRenderEl: document.querySelector(
    '.modal-recipe__render-container'
  ),
  modalRecipeLinkList: document.querySelector(
    '.modal-recipe__ingredients-list'
  ),
};
// console.log('modalRecipeOpenBtns:', refs.modalRecipeOpenBtns);
// data-modal-recipe-close
// console.log('backdropRecipe:', backdropRecipe);
