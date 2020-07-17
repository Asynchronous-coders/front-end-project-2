let cocktail = {};

const searchByName = (data) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita`)
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        }
        response.json().then(function(data) {
            //console.log(data);
            getDrinkName(data);
            getIngredients(data);
            getDirections(data);
            getImage(data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

const searchByIngredient = (data) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin`)
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        }
        response.json().then(function(data) {
            console.log(data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

const cocktailById = (data) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11008`)
    .then(
        function(response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        }
        response.json().then(function(data) {
            //console.log(data);
            getDrinkName(data);
            getIngredients(data);
            getDirections(data);
            getImage(data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}


const getImage = (data) => {
    cocktail.imageURL = data.drinks[0].strDrinkThumb;
}

const getDrinkName = (data) => {
    cocktail.name = (data.drinks[0].strDrink);  
}

const getIngredients = (data) => {
    let ingredientList = [];
    for (let i = 1; i < 16; i++) {
        if (data.drinks[0][`strIngredient${i}`] == null){
            break;
        } else {
            const ingredients = ((data.drinks[0][`strMeasure${i}`]) + ': ' + data.drinks[0][`strIngredient${i}`]);
            ingredientList.push(ingredients);
        }
    }
    cocktail.ingredients = ingredientList;
}

const getDirections = (data) => {
    const directions = (data.drinks[0].strInstructions);
    cocktail.directions = directions
    console.log(cocktail); 
}

searchByName();
searchByIngredient();
cocktailById();



$("#searchBtn").on("click", function(event) {
    if (event.which === 13) {
        drinkName = $('#searchBtn').val();

    }
});





