import STORAGE_KEY from './change-coctails';

export default function renderBtn(number) {
  document.querySelector('.numbers-container').insertAdjacentHTML(
    'beforeend',
    ` 
  <button class="numbers" type="button">${number}</button>`
  );
}
