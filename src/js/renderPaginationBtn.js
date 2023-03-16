import STORAGE_KEY from './changeCoctails';

export default function renderBtn(number) {
  document.querySelector('.numbers-container').insertAdjacentHTML(
    'beforeend',
    ` 
  <button class="numbers" type="button">${number}</button>`
  );
}
