const upBtn = document.querySelector('.btn-up');

function show() {
  upBtn.classList.remove('btn-up_hide');
}

function hide() {
  upBtn.classList.add('btn-up_hide');
}

window.addEventListener('scroll', () => {
  window.scrollY > 500 ? show() : hide();
});

upBtn.addEventListener('click', onClick);

function onClick() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
