export const refs = {
  body: document.querySelector('body'),
  backdrop: document.querySelector('.backdrop'),
  gallery: document.querySelector('.gallery'),

  modalRecipeEl: document.querySelector('[data-modal-recipe]'),
  modalRecipeCloseBtn: document.querySelector('[data-modal-recipe-close]'),
  modalRecipeRenderEl: document.querySelector(
    '.modal-recipe__render-container'
  ),
  modalIngredientEl: document.querySelector('[data-modal-ingredient]'),
  modalIngredientCloseBtn: document.querySelector(
    '[data-modal-ingredient-close]'
  ),
  modalIngredientRenderEl: document.querySelector(
    '.modal-ingredient__render-container'
  ),
};
