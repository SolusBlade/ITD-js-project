const searchAlphabetInput = document.querySelector('.search-alphabet-input');
const modalSearch = document.querySelector('.hero-modal-search');

searchAlphabetInput.addEventListener('click', () => {
  modalSearch.style.display = 'block';
  searchAlphabetInput.style.backgroundColor = '#fd5103';
  searchAlphabetInput.style.color = '#FCFCFC';

  window.addEventListener('click', function closeOnClick(event) {
    if (!event.target.closest('.hero-modal-search') && !event.target.closest('.search-alphabet-input')) {
        modalSearch.style.display = 'none';
        searchAlphabetInput.style.backgroundColor = '';
        searchAlphabetInput.style.color = '';
        window.removeEventListener('click', closeOnClick);
    }
  })
});
