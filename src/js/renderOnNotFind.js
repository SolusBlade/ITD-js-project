const galleryRef = document.querySelector('.gallery .container');

export default function renderCards() {
    galleryRef.innerHTML = `
    <h2 class="gallery__title">Sorry, we didn't find any cocktail for you</h2>
    `;
  }