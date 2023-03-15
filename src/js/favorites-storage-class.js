let cStorage = JSON.parse(localStorage.getItem("favorite-cocktails"));
let iStorage = JSON.parse(localStorage.getItem("favorite-ingredients"));

export default class FavoritesList {
    constructor(){
        if (cStorage){
            this.cocktails = cStorage;
        } else {
            this.cocktails = [];
        }

        if (iStorage){
            this.ingredients = iStorage;
        } else {
            this.ingredients = [];
        }
    }
    addCocktail(item){
        this.cocktails.push(item);
        localStorage.setItem("favorite-cocktails", JSON.stringify(this.cocktails));
    }
    addIngredient(item){
        this.ingredients.push(item);
        localStorage.setItem("favorite-ingredients", JSON.stringify(this.ingredients));
    }
    removeCocktail(item){
        const index = this.cocktails.indexOf(item);
        this.cocktails.splice(index, 1);
        localStorage.setItem("favorite-cocktails", JSON.stringify(this.cocktails));
    }
    removeIngredient(item){
        const index = this.ingredients.indexOf(item);
        this.ingredients.splice(index, 1);
        localStorage.setItem("favorite-ingredients", JSON.stringify(this.ingredients));
    }
}