const favoriteLinkRef = document.querySelector('.header__nav-link.favorite-btn');
const favoriteContainerRef = document.querySelector('.header__menu-container');
const favoriteLinkMobRef = document.querySelector('.header__nav-link.mobile-menu-item-link.favorite-btn');
const favoriteContainerMobRef = document.querySelector('.header__menu-container.mobile-container');

favoriteLinkRef.addEventListener('click', onBtnClick);
favoriteLinkMobRef.addEventListener('click', onBtnMobClick);

function onBtnClick(e) {
    e.preventDefault();
    if (favoriteLinkRef.classList.contains('open')) {
        favoriteContainerRef.style.display = 'none';
        favoriteLinkRef.classList.toggle('open');
        favoriteLinkRef.style.color = '';
        return;
    }
    favoriteContainerRef.style.display = "flex";
    favoriteLinkRef.classList.toggle('open');
    window.addEventListener('click', function closeOnClick(event) {
        if (!event.target.closest('.header__nav-link.favorite-btn') && !event.target.closest('.header__menu-container')) {
            favoriteContainerRef.style.display = 'none';
            favoriteLinkRef.classList.toggle('open');
            favoriteLinkRef.style.color = '';
            window.removeEventListener('click', closeOnClick);
        }
      })
}

function onBtnMobClick(e) {
    e.preventDefault();
    if (favoriteLinkMobRef.classList.contains('open')) {
        favoriteContainerMobRef.style.display = 'none';
        favoriteLinkMobRef.classList.toggle('open');
        favoriteLinkMobRef.style.color = '';
        return;
    }
    favoriteContainerMobRef.style.display = "flex";
    favoriteLinkMobRef.classList.toggle('open');
    window.addEventListener('click', function closeOnClick(event) {
        if (!event.target.closest('.header__nav-link.mobile-menu-item-link') && !event.target.closest('.header__menu-container.mobile-container')) {
            favoriteContainerMobRef.style.display = 'none';
            favoriteLinkMobRef.classList.toggle('open');
            favoriteLinkMobRef.style.color = '';
            window.removeEventListener('click', closeOnClick);
        }
      })
}





