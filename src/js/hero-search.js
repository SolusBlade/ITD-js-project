import axios from 'axios';
import base from './base-url';
import buildCard from './render-cards';
import buildNotFind from './render-on-not-found';
import pagination from './pagination';
import screenWidth from './random-coctails';
import renderBtn from './renderPaginationBtn';
import {
  galleryList,
  paginationContainer,
  STORAGE_KEY,
  changeCoctails,
  page,
} from './changeCoctails';

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

  const letter = event.target.textContent;
  const { drinks } = await searchByLetter(letter);
  if (drinks.length <= screenWidth()) {
    paginationContainer.style.display = 'none';
  }
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
    const renderDots = keys.length > 3;
    for (let i = 1; i <= keys.length; i++) {
      renderBtn(i);
      if (i === 3 && renderDots) {
        renderBtn('...');
        break;
      }
    }
    if (keys.length > 4) {
      renderBtn(keys.length);
    }
    paginationContainer.style.display = 'flex';
    numbersContainer.firstElementChild.classList.add('active');
  }

  buildCard(coctailData[page]);
  // onAddItems();
}

if(alphabetList){
  const alphabetItems = document.querySelectorAll('.alphabet-list-item');
  alphabetItems.forEach(item => {
    item.addEventListener('click', onClick);
  });
}

// function onAddItems(){
//   const galleryListRef = document.querySelector('.gallery__list');
//   const { height: cardHeight } = galleryListRef.firstElementChild.getBoundingClientRect();

//   window.scrollBy({
//           top: cardHeight * 5,
//           behavior: "smooth",
//   });
// }