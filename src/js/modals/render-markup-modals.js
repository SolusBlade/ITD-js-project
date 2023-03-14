import { refs } from '../config/refs';

const { modalRecipeRenderEl } = refs;

function renderRecipe(data) {
  const { strDrink, strInstructions, strDrinkThumb } = data[0];

  const markup = ` <h2 class="modal-recipe__title">${strDrink}</h2>
    <div class="modal-recipe__instructions-wrap">
      <h3 class="modal-recipe__instructions-title">INSTRUCTIONS</h3>
      <p class="modal-recipe__instructions-text">
        ${strInstructions}
      </p>
    </div>
    <div class="modal-recipe__img-thumb">
      <img
        class="modal-recipe__img"
        src=${strDrinkThumb}
        alt="${strDrink} photo"
      />
    </div>
    <div class="modal-recipe__ingredients-wrap">
      <h3 class="modal-recipe__ingredients-title">INGREDIENTS</h3>
      <p class="modal-recipe__ingredients-sub-title">Per cocktail</p>
      <ul class="modal-recipe__ingredients-list">${renderRecipeIngredients(
        data[0]
      )}
      </ul>
    </div>`;
  modalRecipeRenderEl.insertAdjacentHTML('beforeend', markup);
}

function renderRecipeIngredients(data) {
  let markup = '';

  for (let i = 1; i < 15; i += 1) {
    let ingredient = data[`strIngredient${i}`];
    let measure = data[`strMeasure${i}`];

    if (!ingredient) break;

    markup += `<li class="modal-recipe__ingredient"><a class="modal-recipe__ingredient-link" data-type='open-ingredient' data-name="${ingredient}"><span class="modal-recipe__ingredient-measure">${measure} </span>${ingredient}</a></li>`;
  }
  return markup;
}

function clearRenderEl() {
  modalRecipeRenderEl.replaceChildren();
}

export { renderRecipe, renderRecipeIngredients, clearRenderEl };
