import base from "./base-url";
import buildCard from "./renderCards";
import buildNotFind from "./renderOnNotFind";

import axios from 'axios';

const searfchFormRef = document.querySelector('.header__search');
const searchInputRef = document.querySelector('.header__input');

async function searchFetch(name) {
  const url = `${base}search.php?s=${name}`;
  try {
    const { data } = await axios.get(`${url}`);
    return data;
  } catch ({ response: { status } }) {
    return status;
  }
}

searfchFormRef.addEventListener('submit', onSubmit);

async function onSubmit(e) {
    e.preventDefault();
    
    const {drinks} = await searchFetch(searchInputRef.value.trim());

    if(drinks === null){
      buildNotFind();
      return;
    }
    buildCard(drinks);
}
