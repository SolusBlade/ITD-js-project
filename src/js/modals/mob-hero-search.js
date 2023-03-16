const searchAlphabetInput = document.querySelector('.search-alphabet-input');
const modalSearch = document.querySelector('.hero-modal-search');
const inputIcon = document.querySelector('.input-icon');
const mobAlphabetListItem = document.querySelectorAll('.mob-alphabet-list-item');
const inputLetter = document.querySelector('.input-letter');
const mobAlphabetList = document.querySelector('.mob-alphabet-list');

function changeInputValue(event) {
  modalSearch.style.display = 'none';
  inputLetter.textContent = event.target.textContent;
  searchAlphabetInput.classList.toggle('ass');
}

if(mobAlphabetList){
  const alphabetItems = document.querySelectorAll('.mob-alphabet-list-item');
  alphabetItems.forEach(item => {
    item.addEventListener('click', changeInputValue);
  });
}

if (searchAlphabetInput) {
  searchAlphabetInput.addEventListener('click', () => {
    modalSearch.style.display = 'block';
    searchAlphabetInput.style.backgroundColor = '#fd5103';
    searchAlphabetInput.style.color = '#FCFCFC';
    inputIcon.style.fill = '#FCFCFC';
    if (searchAlphabetInput.classList.contains('ass')) {
      modalSearch.style.display = 'none';
    }
    searchAlphabetInput.classList.toggle('ass');
    window.addEventListener('click', function closeOnClick(event) {
      if (!event.target.closest('.hero-modal-search') && !event.target.closest('.search-alphabet-input')) {
          modalSearch.style.display = 'none';
          searchAlphabetInput.style.backgroundColor = '';
          searchAlphabetInput.style.color = '';
          inputIcon.style.fill = '';
          searchAlphabetInput.classList.toggle('ass');
          window.removeEventListener('click', closeOnClick);
      }
    })
  });
}
