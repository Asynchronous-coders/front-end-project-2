const searchByName = (drinkName) => {
    $.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`, function (data) {
        $(".leftsideTwo").append(`
        <div class="leftsideTextTwo">
            <h3>${data.drinks[0].strDrink}</h3>
            <div class="line"></div>
            <img class='drinksForLeftDiv' src =${data.drinks[0].strDrinkThumb}>
            <div class="drinksForDivTextContent">            
            <h5 class='heading'><u>Ingredients:</u></h5>
              <ul class="ings">
              <li>${data.drinks[0].strIngredient1}</li>
              <li>${data.drinks[0].strIngredient2}</li>
              <li>${data.drinks[0].strIngredient3}</li>
              </ul>
            </div>
            <div class="drinksForDivTextContent">
            <h5 class='heading'><u>Directions:</u></h5>
            ${data.drinks[0].strInstructions}
          </div>
        </div> 
        `);
        
    });
}

const searchByIngredient = (item) => {
    $.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${item}`, function (data) {
        console.log(data);
        for (let i = 1; i < data.drinks.length; i++) {
            cocktail.image = (data.drinks[i].strDrinkThumb);
            cocktail.name =  (data.drinks[i].strDrink); 
            cocktail.ingredients = getIngredients(data);
            cocktail.directions = (data.drinks[i].strInstructions);
            console.log(cocktail)
            
        }
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
            console.log(data);
        });
        }
    )
    .catch(function(err) {
        console.log('Fetch Error :-S', err);
    });
}

//searchByIngredient();
//cocktailById();

$(document).on('click', '#search', function () {
    $(".leftsideTwo").empty();
    drinkName = $('#userInput').val();
    searchByName(drinkName);
});