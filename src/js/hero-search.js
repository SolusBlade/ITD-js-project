import BASE_URL from './base-url';
import renderCards from "./renderCards";
import renderNotFind from "./renderOnNotFind";

import axios from 'axios';

const alphabetList = document.querySelector('.alphabet-list');

async function searchByLetter(letter) {
  try {
    const {data} = await axios.get(`${BASE_URL}search.php?f=${letter}`);
    return data;    
  } catch (error) {
    console.error(error);
  }
}

async function onClick(event) {
  event.preventDefault();
  const letter = event.target.textContent;
  const {drinks} = await searchByLetter(letter);
  if(drinks === null){
    renderNotFind();
    return;
  }
  renderCards(drinks);
}

const alphabetItems = alphabetList.querySelectorAll('.alphabet-list-item');
alphabetItems.forEach(item => {
  item.addEventListener('click', onClick);
});