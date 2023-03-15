import buildCard from './render-cards';

const paginationContainer = document.querySelector('.pagination');
const galleryList = document.querySelector('.gallery__list');
const STORAGE_KEY = 'coctail-data-state';

let page = 1;
if(paginationContainer){
  paginationContainer.addEventListener('click', changeCoctails);
}

function changeCoctails(e) {
  const coctailData = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
  const currentActiveBtn = document.querySelector('.active');

  if (e.target.classList.contains('numbers')) {
    currentActiveBtn.classList.remove('active');
    e.target.classList.add('active');
    page = +e.target.textContent;
    galleryList.innerHTML = '';
    buildCard(coctailData[page]);
  }

  if (e.target.classList.contains('next')) {
    currentActiveBtn.classList.remove('active');
    currentActiveBtn.nextElementSibling.classList.add('active');
    page += 1;
    galleryList.innerHTML = '';
    buildCard(coctailData[page]);
  }

  if (e.target.classList.contains('previous')) {
    currentActiveBtn.classList.remove('active');
    currentActiveBtn.previousElementSibling.classList.add('active');
    page -= 1;
    galleryList.innerHTML = '';
    buildCard(coctailData[page]);
  }
}

export { paginationContainer, galleryList, STORAGE_KEY, changeCoctails, page };
