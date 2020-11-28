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

    async getByIngredient(id) {
        const res = await this.getResourses(`/filter.php?i=${id}`);
        const {drinks} = res;
        return drinks.map(this._transformCocktail);
    }

    async getByCategory(id) {
        const res = await this.getResourses(`/filter.php?c=${id}`);
        const {drinks} = res;
        return drinks.map(this._transformCocktail);
    }

    async getByGlass(id) {
        const res = await this.getResourses(`/filter.php?g=${id}`);
        const {drinks} = res;
        return drinks.map(this._transformCocktail);
    }

    async getFullCocktailDetails(id) {
        const res = await this.getResourses(`/lookup.php?i=${id}`);
        const {drinks} = res;
        const cockt = drinks.map(this._transformDetailsCocktail);
        return cockt[0];
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

    _transformCocktail(res) {
        return {
            strDrink: res.strDrink,
            idDrink: res.idDrink 
        }
    }

    _transformDetailsCocktail(res) {
        return {
            strDrink: res.strDrink,
            strDrinkThumb: res.strDrinkThumb,
            strAlcoholic: res.strAlcoholic,
            strCategory: res.strCategory,
            strGlass: res.strGlass,
            strInstructions: res.strInstructions,
            strIngredient1: res.strIngredient1,
            strIngredient2: res.strIngredient2,
            strIngredient3: res.strIngredient3,
            strIngredient4: res.strIngredient4,
            strIngredient5: res.strIngredient5,
            strIngredient6: res.strIngredient6,
            strIngredient7: res.strIngredient7,
            strIngredient8: res.strIngredient8,
            strIngredient9: res.strIngredient9,
            strIngredient10: res.strIngredient10,
            strMeasure1: res.strMeasure1,
            strMeasure2: res.strMeasure2,
            strMeasure3: res.strMeasure3,
            strMeasure4: res.strMeasure4,
            strMeasure5: res.strMeasure5,
            strMeasure6: res.strMeasure6,
            strMeasure7: res.strMeasure7,
            strMeasure8: res.strMeasure8,
            strMeasure9: res.strMeasure9,
            strMeasure10: res.strMeasure10
        }
    }
}