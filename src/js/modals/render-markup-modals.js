import { refs } from '../config/refs';

const { modalRecipeRenderEl, modalIngredientRenderEl } = refs;

function renderRecipe(drink) {
  const { idDrink, strDrink, strInstructions, strDrinkThumb } = drink;
  let cStorage = JSON.parse(localStorage.getItem('favorite-cocktails'));

  if (cStorage && cStorage.includes(idDrink)) {
    const markup = `<div class="modal-recipe__top-wrap">
  <div class="modal-recipe__title-ingred-wrap">
  <h2 class="modal-recipe__title">${strDrink}</h2>

      <div class="modal-recipe__ingredients-wrap">
        <h3 class="modal-recipe__ingredients-title">INGREDIENTS</h3>
        <p class="modal-recipe__ingredients-sub-title">Per cocktail</p>
        <ul class="modal-recipe__ingredients-list">${renderRecipeIngredients(
          drink
        )}
        </ul>
      </div></div>
      <div class="modal-recipe__img-thumb">
        <img
        class="modal-recipe__img"
        src=${strDrinkThumb}
        alt="${strDrink} photo"
        />
      </div>
    </div>
     <div class="modal-recipe__instructions-wrap">
      <h3 class="modal-recipe__instructions-title">INSTRUCTIONS</h3>
      <p class="modal-recipe__instructions-text">
        ${strInstructions}
      </p>
    </div>
    <button class="modal-recipe__btn" type="button" data-id="${idDrink}" data-favorite="cocktail">
      Remove from favorites
    </button>`;
    modalRecipeRenderEl.insertAdjacentHTML('beforeend', markup);
    return;
  }
  const markup = `<div class="modal-recipe__top-wrap">
  <div class="modal-recipe__title-ingred-wrap">
  <h2 class="modal-recipe__title">${strDrink}</h2>

      <div class="modal-recipe__ingredients-wrap">
        <h3 class="modal-recipe__ingredients-title">INGREDIENTS</h3>
        <p class="modal-recipe__ingredients-sub-title">Per cocktail</p>
        <ul class="modal-recipe__ingredients-list">${renderRecipeIngredients(
          drink
        )}
        </ul>
      </div></div>
      <div class="modal-recipe__img-thumb">
        <img
        class="modal-recipe__img"
        src=${strDrinkThumb}
        alt="${strDrink} photo"
        />
      </div>
    </div>
     <div class="modal-recipe__instructions-wrap">
      <h3 class="modal-recipe__instructions-title">INSTRUCTIONS</h3>
      <p class="modal-recipe__instructions-text">
        ${strInstructions}
      </p>
    </div>
    <button class="modal-recipe__btn" type="button" data-id="${idDrink}" data-favorite="cocktail">
      Add to favorites
    </button>`;
  modalRecipeRenderEl.insertAdjacentHTML('beforeend', markup);
}

function renderRecipeIngredients(drink) {
  let markup = '';

  for (let i = 1; i < 15; i += 1) {
    let ingredient = drink[`strIngredient${i}`];
    let measure = drink[`strMeasure${i}`] || '';

    if (!ingredient) break;

    markup += `<li class="modal-recipe__ingredient"><a class="modal-recipe__ingredient-link" data-type='open-ingredient' data-name="${ingredient}"><span class="modal-recipe__ingredient-measure">${measure} </span>${ingredient}</a></li>`;
  }
  return markup;
}

function renderIngredient(ingredient) {
  const {
    idIngredient,
    strIngredient,
    strDescription,
    strType,
    strAlcohol,
    strABV,
  } = ingredient;

  const textCut = strDescription
    ? strDescription.slice(strIngredient.length, strDescription.length)
    : '-';

  const alcohol = strAlcohol || 'None';
  const abv = strABV || '-';

  let iStorage = JSON.parse(localStorage.getItem('favorite-ingredients'));

  if (iStorage && iStorage.includes(idIngredient)) {
    const markup = `<div class="modal-ingredient__img-thumb">
      <img
        class="modal-ingredient__img"
        src="https://thecocktaildb.com/images/ingredients/${strIngredient}-Small.png"  alt="${strIngredient} photo"
      /></div>
  <div class="modal-ingredient__title-wrap"><h2 class="modal-ingredient__title">${strIngredient}</h2>
    <p class="modal-ingredient__sub-title">${strType}</p></div>
    <p class="modal-ingredient__text">
      <span class="modal-ingredient__text--first">${strIngredient}</span> ${textCut}
    </p>
    <ul class="modal-ingredient__list">
      <li class="modal-ingredient__item">Type: ${strType}</li>
      <li class="modal-ingredient__item">Alcohol: ${alcohol}</li>
      <li class="modal-ingredient__item">Alcohol by volume: ${abv}</li>
    </ul>
    <button class="modal-ingredient__btn" type="button" data-id="${idIngredient}" data-favorite="ingredient">
      Remove from favorites
    </button>`;

    modalIngredientRenderEl.insertAdjacentHTML('beforeend', markup);

    return;
  }

  const markup = `<div class="modal-ingredient__img-thumb">
      <img
        class="modal-ingredient__img"
        src="https://thecocktaildb.com/images/ingredients/${strIngredient}-Small.png"  alt="${strIngredient} photo"
      /></div>
  <div class="modal-ingredient__title-wrap"><h2 class="modal-ingredient__title">${strIngredient}</h2>
    <p class="modal-ingredient__sub-title">${strType}</p></div>
    <p class="modal-ingredient__text">
      <span class="modal-ingredient__text--first">${strIngredient}</span> ${textCut}
    </p>
    <ul class="modal-ingredient__list">
      <li class="modal-ingredient__item">Type: ${strType}</li>
      <li class="modal-ingredient__item">Alcohol: ${alcohol}</li>
      <li class="modal-ingredient__item">Alcohol by volume: ${abv}</li>
    </ul>
    <button class="modal-ingredient__btn" type="button" data-id="${idIngredient}" data-favorite="ingredient">
      Add to favorites
    </button>`;
  modalIngredientRenderEl.insertAdjacentHTML('beforeend', markup);
}

function clearRenderEl(element) {
  element.replaceChildren();
}

export {
  renderRecipe,
  renderRecipeIngredients,
  clearRenderEl,
  renderIngredient,
};
