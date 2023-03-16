import * as icons from '../images/icons.svg';
import StorageClass from './favorites-storage-class';
const storage = new StorageClass();

const galleryRef = document.querySelector('.gallery');
if(galleryRef){
    galleryRef.addEventListener('click', onBtnClick);
}


function onBtnClick(event) {
    const targetBtn = event.target;
  if (targetBtn.dataset.favorite === 'cocktail') {
    const cocktailId = event.target.dataset.id;
    if(storage.cocktails.includes(cocktailId)){
        onRemoveBtn(targetBtn);
        storage.removeCocktail(cocktailId);
        return;
    }
    onAddBtn(targetBtn);
    storage.addCocktail(cocktailId);
  }
}

function onAddBtn(e){
    e.innerHTML = `
        Remove
        <svg class="empty__heart" width="21" height="19">
            <use href="${icons}#icon-full-heart"></use>
        </svg>
    `;
}
function onRemoveBtn(e){
    e.innerHTML = `
        Add to
        <svg class="empty__heart" width="21" height="19">
            <use href="${icons}#icon-empty-heart"></use>
        </svg>
    `;
}