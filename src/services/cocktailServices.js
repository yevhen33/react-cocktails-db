export default class CocktailServices {
    constructor() {
        this._apiBase = 'https://www.thecocktaildb.com/api/json/v1/1';
    }

    async getResourses(url) {
        let resull = await fetch(`${this._apiBase}${url}`);
    
        if (!resull.ok) {
            throw new Error(`Could not fetch ${url}, status ${resull.status}`);
        }
    
        return await resull.json();
    }

    async getRandomCocktail() {
        const res = await this.getResourses('/random.php');
        const {drinks} = res;
        const cockt = drinks.map(this._transformRandomCocktail);
        return cockt[0];
    }

    getByIngredient(id) {
        return this.getResourses(`/filter.php?i=${id}`);
    }

    getByCategory(id) {
        return this.getResourses(`/filter.php?c=${id}`);
    }

    getByGlass(id) {
        return this.getResourses(`/filter.php?g=${id}`);
    }

    getFullCocktailDetails(id) {
        return this.getResourses(`/lookup.php?i=${id}`);
    }

    _transformRandomCocktail(cocktail) {
        return {
            strDrink: cocktail.strDrink,
            strDrinkThumb: cocktail.strDrinkThumb,
            strAlcoholic: cocktail.strAlcoholic,
            strCategory: cocktail.strCategory,
            strGlass: cocktail.strGlass
        } 
    }
}