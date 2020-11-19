class CocktailServices {
    async getResourses(url) {
        let resull = await fetch(url);
    
        if (!resull.ok) {
            throw new Error(`Could not fetch ${url}, status ${resull.status}`);
        }
    
        return await resull.json();
    }

    getRandomCocktail() {
        return this.getResourses('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    }
}

const get = new CocktailServices();

get.getRandomCocktail()
.then(res => console.log(res));