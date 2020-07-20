$(document).ready(function () {

    const searchByName = (drinkName) => {
        $.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`, function (data) {
            $(".leftsideTwo").append(`
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
            `);
        });
    }

    const searchByIngredient = (item) => {
        $.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${item}`, function (data) {
            $(".leftsideTwo").append(`
    
                `);
        });
    }

    function postNewCocktail(cocktailObj) {
        $.ajax({
            async: true,
            //url: `https://backend-project-2.herokuapp.com/reviews/cocktail/${cocktail_id}`,
            url: `http://localhost:9000/cocktail/`,
            method: "POST",
            data: cocktailObj
        }).then((res) => {
            console.log(cocktailObj);
            //show user the recipe they just added with buttons to update and delete
        });
    };

    function getAllCocktails() {
        $.ajax({
            async: true,
            //url: `https://backend-project-2.herokuapp.com/reviews/cocktail/${cocktail_id}`,
            url: `http://localhost:9000/cocktails/`,
            method: "GET"
        }).then((res) => {
            cocktails = res;
            for (const cocktail in cocktails) {
                $(".rightsideTwo").append(`
                <h3>${cocktails[cocktail].cocktail_name}</h3>
                <div class="line"></div>
                <h5 class='heading'><u>Ingredients:</u></h5>
                    ${cocktails[cocktail].ingredients}
                <h5 class='heading'><u>Directions:</u></h5>
                    ${cocktails[cocktail].directions}
                <div class="line"></div>
                `);   
            }
        });
    }    

    $(document).on('click', '#search', function () {
        $(".leftsideTwo").empty();
        drinkName = $('#userInput').val();
        searchByName(drinkName);
        $('#userInput').val('');
    });

    $(document).on('click', '#submitRecipe', function () {
        const cocktailObj = {
            cocktail_name: $('#cocktailName').val(),
            ingredients: $('#cocktailIngredients').val(),
            directions: $('#cocktailDirections').val(),
        };
        postNewCocktail(cocktailObj);
        $('#cocktailName').val('');
        $('#cocktailIngredients').val('');
        $('#cocktailDirections').val('');
    });

    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })

// make an on search for the search that opens a modal //
    $(document).on('click', '#userRecipes', function () {
        $(".rightsideTwo").empty();
        getAllCocktails();
    });
});
