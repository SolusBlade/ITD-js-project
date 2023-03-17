import axios from 'axios';
import base from './base-url';
import buildCard from './render-cards';
import buildNotFind from './render-on-not-found';
import pagination from './pagination';
import screenWidth from './random-coctails';
import renderBtn from './render-pagination-btn';
import {
  galleryList,
  paginationContainer,
  STORAGE_KEY,
  changeCoctails,
  page,
} from './change-coctails';

const mobAlphabetList = document.querySelector('.mob-alphabet-list');
const alphabetList = document.querySelector('.alphabet-list');
const numbersContainer = document.querySelector('.numbers-container');

if (paginationContainer) {
  paginationContainer.style.display = 'none';
  paginationContainer.addEventListener('click', changeCoctails);
}

async function searchByLetter(letter) {
  try {
    const { data } = await axios.get(`${base}search.php?f=${letter}`);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function onClick(event) {
  event.preventDefault();
  galleryList.innerHTML = '';
  numbersContainer.innerHTML = '';
  sessionStorage.removeItem(STORAGE_KEY);

  const letter = event.target.textContent;
  const { drinks } = await searchByLetter(letter);

  if (drinks === null) {
    paginationContainer.style.display = 'none';
    buildNotFind();
    return;
  }

  const coctailData = pagination(drinks);

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(coctailData));
  if (sessionStorage.getItem(STORAGE_KEY)) {
    const coctailDataParse = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    const keys = Object.keys(coctailDataParse);
    for (let i = 1; i <= keys.length; i++) {
      renderBtn(i);
    }
    paginationContainer.style.display = 'flex';
    numbersContainer.firstElementChild.classList.add('active');
  }

  if (drinks.length <= screenWidth()) {
    paginationContainer.style.display = 'none';
  }
  
  const galleryTitleRef = document.querySelector('.gallery__title');
  galleryTitleRef.innerHTML = `
    Searching results
  `;
  buildCard(coctailData[page]);
}

if (alphabetList) {
  const alphabetItems = document.querySelectorAll('.alphabet-list-item');
  alphabetItems.forEach(item => {
    item.addEventListener('click', onClick);
  });
}

if (mobAlphabetList) {
  const alphabetItems = document.querySelectorAll('.mob-alphabet-list-item');
  alphabetItems.forEach(item => {
    item.addEventListener('click', onClick);
  });
}
