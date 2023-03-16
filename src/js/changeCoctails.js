import buildCard from './render-cards';

const paginationContainer = document.querySelector('.pagination');
const galleryList = document.querySelector('.gallery__list');
const STORAGE_KEY = 'coctail-data-state';

let page = 1;
if (paginationContainer) {
  paginationContainer.addEventListener('click', changeCoctails);
}

function changeCoctails(e) {
  const coctailData = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
  const currentActiveBtn = document.querySelector('.active');
  const keys = Object.keys(coctailData);

  if (e.target.classList.contains('numbers')) {
    if ((document.querySelector('.next').disabled = true)) {
      document.querySelector('.next').disabled = false;
    }

    if ((document.querySelector('.previous').disabled = true)) {
      document.querySelector('.previous').disabled = false;
    }
    currentActiveBtn.classList.remove('active');
    e.target.classList.add('active');
    page = +e.target.textContent;
    galleryList.innerHTML = '';
    buildCard(coctailData[page]);
  }

  if (e.target.classList.contains('next')) {
    if ((document.querySelector('.previous').disabled = true)) {
      document.querySelector('.previous').disabled = false;
    }
    currentActiveBtn.classList.remove('active');
    currentActiveBtn.nextElementSibling.classList.add('active');
    page += 1;
    if (keys.length === page) {
      document.querySelector('.next').disabled = true;
    }
    galleryList.innerHTML = '';
    buildCard(coctailData[page]);
  }

  if (e.target.classList.contains('previous')) {
    if (page === 1) {
      document.querySelector('.previous').disabled = true;
      return;
    }
    currentActiveBtn.classList.remove('active');
    currentActiveBtn.previousElementSibling.classList.add('active');
    if ((document.querySelector('.next').disabled = true)) {
      document.querySelector('.next').disabled = false;
    }

    page -= 1;
    galleryList.innerHTML = '';
    buildCard(coctailData[page]);
  }
}

export { paginationContainer, galleryList, STORAGE_KEY, changeCoctails, page };
