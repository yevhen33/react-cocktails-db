export default class CocktailServices {
    constructor() {
        this._apiBase = 'https://www.thecocktaildb.com/api/json/v1/1';
    }

    getResourses = async (url) => {
        let resull = await fetch(`${this._apiBase}${url}`);
    
        if (!resull.ok) {
            throw new Error(`Could not fetch ${url}, status ${resull.status}`);
        }
    
        return await resull.json();
    }

    getRandomCocktail = async () => {
        const res = await this.getResourses('/random.php');
        const {drinks} = res;
        const cockt = drinks.map(this._transformRandomCocktail);
        return cockt[0];
    }

    getByIngredient = async (id) => {
        const res = await this.getResourses(`/filter.php?i=${id}`);
        const {drinks} = res;
        return drinks.map(this._transformCocktail);
    }

    getByCategory = async (id) => {
        const res = await this.getResourses(`/filter.php?c=${id}`);
        const {drinks} = res;
        return drinks.map(this._transformCocktail);
    }

    getByGlass = async (id) => {
        const res = await this.getResourses(`/filter.php?g=${id}`);
        const {drinks} = res;
        return drinks.map(this._transformCocktail);
    }

    getFullCocktailDetails = async (id) => {
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
            ingredient1: res.strIngredient1,
            ingredient2: res.strIngredient2,
            ingredient3: res.strIngredient3,
            ingredient4: res.strIngredient4,
            ingredient5: res.strIngredient5,
            ingredient6: res.strIngredient6,
            ingredient7: res.strIngredient7,
            ingredient8: res.strIngredient8,
            ingredient9: res.strIngredient9,
            ingredient10: res.strIngredient10,
            measure1: res.strMeasure1,
            measure2: res.strMeasure2,
            measure3: res.strMeasure3,
            measure4: res.strMeasure4,
            measure5: res.strMeasure5,
            measure6: res.strMeasure6,
            measure7: res.strMeasure7,
            measure8: res.strMeasure8,
            measure9: res.strMeasure9,
            measure10: res.strMeasure10
        }
    }
}