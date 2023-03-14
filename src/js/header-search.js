import base from './base-url';
import buildCard from './render-cards';
import buildNotFind from './render-on-not-found';
import pagination from './pagination';

import axios from 'axios';

const searfchFormRef = document.querySelector('.header__search');
const searchInputRef = document.querySelector('.header__input');

const paginationBtnContainer = document.querySelector('.pagination');
const STORAGE_KEY = 'coctail-data-state';

paginationBtnContainer.style.display = 'none';
let page = 1;

searfchFormRef.addEventListener('submit', onSubmit);
paginationBtnContainer.addEventListener('click', changeCoctails);

async function searchFetch(name) {
  const url = `${base}search.php?s=${name}`;
  try {
    const { data } = await axios.get(`${url}`);
    return data;
  } catch ({ response: { status } }) {
    return status;
  }
}

async function onSubmit(e) {
  e.preventDefault();
  sessionStorage.removeItem(STORAGE_KEY);
  const { drinks } = await searchFetch(searchInputRef.value.trim());

  if (drinks === null) {
    buildNotFind();
    return;
  }
  const coctailData = pagination(drinks);
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(coctailData));
  const keys = Object.keys(coctailData);
  if (keys.length > 1) {
    paginationBtnContainer.style.display = 'flex';
  }

  buildCard(coctailData[page]);
}

function changeCoctails(e) {
  const coctailData = JSON.parse(sessionStorage.getItem(STORAGE_KEY));

  if (e.target.classList.contains('numbers')) {
    page = +e.target.textContent;
    buildCard(coctailData[page]);
  }

  if (e.target.classList.contains('next')) {
    page += 1;
    buildCard(coctailData[page]);
  }

  if (e.target.classList.contains('previous')) {
    page -= 1;
    buildCard(coctailData[page]);
  }
}
