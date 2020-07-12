$(document).ready(function (){
  // List Filters EndPoint
  listFilters();
  function listFilters(){
    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://the-cocktail-db.p.rapidapi.com/list.php?a=list",
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3"
        }
        
    }).then(function(response){
      for(i = 0; i < 3; i ++){
        $('.filterOption').append("<div>" + response.drinks[i].strAlcoholic + "</div>" + "<br>"); 
      }
    });

  };
  // End Filters Endpoint

  // List Ingredients
  listIngredients();
    function listIngredients() {
        $.ajax({
            async: true,
            url: "https://the-cocktail-db.p.rapidapi.com/list.php?i=list",
            method: "GET",
            headers : {	
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
          }
        }).then(function (response) {
          for(i = 0; i <= 100; i ++){
            $('.ingredientsOption').append("<div>" + response.drinks[i].strIngredient1  + "</div>" + "<br>"); 
          }
        });
        // End Ingredient List

        // List Glasses List
        listGlasses();
        function listGlasses() {
            $.ajax({
                async: true,
                url: "https://the-cocktail-db.p.rapidapi.com/list.php?g=list",
                method: "GET",
                headers : {	
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
              }
            }).then(function (response) {
              for(i = 0; i <= 32; i ++){
                $('.glassesOption').append("<div>" + response.drinks[i].strGlass  + "</div>" + "<br>"); 
              }
            });
        // End Glasses List

        // List Glasses List
listCategories();
      function listCategories() {
          $.ajax({
              async: true,
              url: "https://the-cocktail-db.p.rapidapi.com/list.php?c=list",
              method: "GET",
              headers : {	
              "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
              "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
            }
          }).then(function (response) {
            for(i = 0; i <= 32; i ++){
              $('.categoriesOption').append("<div>" + response.drinks[i].strCategory + "</div>" + "<br>"); 
            }
          });
      // End Glasses List
        








  // login button / modal function

  $(document).on("click",".login-modal",function(){
    $("#myModal").modal('show');
    return false
  });
  // end login button / modal function
  
// sign up button start
$(document).on("click",".signUp",function(){
  $("#signUpModal").modal('show');
  $('myModal').modal('hide')
  return false
})
//end sign up button

// Search Button
$(document).on("click", ".go" ,function(){
  console.log("searched")
})
}
  }
    }
     });
