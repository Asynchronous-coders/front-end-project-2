$(document).ready(function () {
  // List Filters EndPoint
  listFilters();
  function listFilters() {
    $.ajax({
      "async": true,
      "crossDomain": true,
      "url": "https://the-cocktail-db.p.rapidapi.com/list.php?a=list",
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3"
      }

    }).then(function (response) {
      for (i = 0; i < 3; i++) {
        $('.filterOption').append(`<a class="dropdown-item" href="${response.drinks[i].strAlcoholic}">${response.drinks[i].strAlcoholic}</a>`)
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
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
      }
    }).then(function (response) {
      for (i = 0; i <= 100; i++) {
        $('.ingredientsOption').append(`<a class="dropdown-item" href="${response.drinks[i].strIngredient1}">${response.drinks[i].strIngredient1}</a>`)
      };
    })
  };
  // End Ingredient List

  // List Glasses List
  listGlasses();
  function listGlasses() {
    $.ajax({
      async: true,
      url: "https://the-cocktail-db.p.rapidapi.com/list.php?g=list",
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
      }
    }).then(function (response) {
      for (i = 0; i <= 32; i++) {
        $('.glassesOption').append(`<a class="dropdown-item" href="${response.drinks[i].strGlass}">${response.drinks[i].strGlass}</a>`)
      }
    });
  }
  // End Glasses List

  // List Glasses List
  listCategories();
  function listCategories() {
    $.ajax({
      async: true,
      url: "https://the-cocktail-db.p.rapidapi.com/list.php?c=list",
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
      }
    }).then(function (response) {
      for (i = 0; i <= 32; i++) {
        $('.categoriesOption').append(`<a class="dropdown-item" href="${response.drinks[i].strCategory}">${response.drinks[i].strCategory}</a>`)
      }
    })
  };
  // End Glasses List
  // Drinks for Div 
  getDrinksForDiv();
  getDrinksForDiv();
  function getDrinksForDiv() {
    $.ajax({
      async: true,
      url: "https://the-cocktail-db.p.rapidapi.com/random.php",
      method: "GET",
      "headers": {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
      }
    }).then(function (response) {
      console.log(response);
      for (i = 0; i < 8; i++) {
        $(".content-first").append(`
        <div>
          <img class="drinksForDiv" src =${response.drinks[i].strDrinkThumb}>
          <div class="drinksForDivTextContent">
            <h5 class="heading">\"${response.drinks[i].strDrink}\"</h5>
            <h5 class="heading"><u>Ingredients:</u></h5>
              <ul>
                <li>${response.drinks[i].strIngredient1}</li>
                <li>${response.drinks[i].strIngredient2}</li>
                <li>${response.drinks[i].strIngredient3}</li>
              </ul>
          </div>
        </div>
        `);
      }
    })
  };
  // End Drinks For Div 

  //corona_cocktail calls
  function appendImgGlassRate(rate, id) {
    if (rate < 0 || null) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        `);
    } else if (rate > 0.01 && rate <= 2) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        `);
    } else if (rate > 2.01 && rate <= 4) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-60"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        `);
    }
    else if (rate > 4.01 && rate <= 6) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-60"></div>
        <div class="col-md-2 glass-00"></div>
        <div class="col-md-2 glass-00"></div>
        `);
    } else if (rate > 6.01 && rate <= 8) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-60"></div>
        <div class="col-md-2 glass-00"></div>
        `);
    } else if (rate > 8.01 && rate < 10) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-60"></div>
        `);
    } else if (rate >= 10) {
      $(`.glasses${id}`).append(`
        <div class="col-md-1"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        <div class="col-md-2 glass-100"></div>
        `);
    }
  }

  function appendReviewDetails(info) {
    $('.rightsideTextTwo').append(`
      <div class="review-card border-rounded">
        <div id="${info.id}" class="col-md">
          <div class="row review-user"> User: ${info.user_id}</div> 
          <div class="row glasses${info.id}"></div>
          <div class="row review-rate">${info.rate_cocktail}/10</div>
          <div class="row review-cocktail">${info.review_cocktail}</div>
        </div>
      </div>
      `);
  }

  // corona_cocktail calls

  function getReviewbyId(reviews_id) {
    $.ajax({
      async: true,
      url: `https://backend-project-2.herokuapp.com/review/${reviews_id}`,
      method: "GET"
    }).then((res) => {
      console.log(res);
    });
  };

  // not sure if we necessarily need getrating/ get review by id... 
  function getRatingbyId(reviews_id) {
    $.ajax({
      async: true,
      // url: `https://backend-project-2.herokuapp.com/rating/${reviews_id}`,
      url: `http://localhost:9000/rating/${reviews_id}`,
      method: "GET"
    }).then((res) => {
      console.log(res);
    });
  };

  function getReviewsByCocktail(reviews_id) {
    $.ajax({
      async: true,
      url: `https://backend-project-2.herokuapp.com/reviews/cocktail/${reviews_id}`,
      method: "GET"
    }).then((res) => {
      console.log(res);
    });
  };

  //the post and patch have not been tested out nor am I sure if I wrote it correctly. --Juan
  function postNewReview() {
    $.ajax({
      async: true,
      url: `https://backend-project-2.herokuapp.com/reviews`,
      method: "POST"
    }).then((res) => {
      console.log(res);
    });
  };

  function patchReviewById(reviews_id) {
    $.ajax({
      async: true,
      url: `https://backend-project-2.herokuapp.com/reviews/${reviews_id}`,
      method: "PATCH"
    }).then((res) => {
      console.log(res);
    });
  };

  // login button / modal function

  function getReviewsByCocktail(cocktail_id) {
    $.ajax({
      async: true,
      // url: `https://backend-project-2.herokuapp.com/reviews/cocktail/${cocktail_id}`,
      url: `http://localhost:9000/reviews/cocktail/${cocktail_id}`,
      method: "GET"
    }).then((res) => {
      const reviews = res;
      for (const review in reviews) {
        const info = reviews[review];
        appendReviewDetails(info);
        const rate = info.rate_cocktail;
        appendImgGlassRate(rate, info.id);
      }
    });
  };



  // the post and patch have not been tested out nor am I sure if I wrote it correctly. --Juan
  function postNewReview(review_obj) {
    $.post(// `https://backend-project-2.herokuapp.com/reviews`,
      `http://localhost:9000/reviews`, review_obj, (data) => {
        console.log(data);
      });
  };


  function patchReviewById(reviews_id, updated_review) {
    $.ajax({
      method: "PATCH",
      // url: `https://backend-project-2.herokuapp.com/reviews/${reviews_id}`,
      url: `http://localhost:9000/reviews/${reviews_id}`,
      data: updated_review
    }).then((res) => {
      console.log(res);
    });
  };


  // Reviews for Div
  function getAllReviews() {
    $.ajax({
      async: true,
      // url: `https://backend-project-2.herokuapp.com/reviews`,
      url: `http://localhost:9000/reviews`,
      method: "GET"
    }).then((res) => {
      const reviews = res;
      for (const review in reviews) {
        const info = reviews[review];
        appendReviewDetails(info);
        const rate = info.rate_cocktail;
        appendImgGlassRate(rate, info.id);
      }
    });
  };
  getAllReviews();
  // End reviews for Div


}
  // 


  // // if this option is clicked and matches the obj.filters then open modal
  // $('.filterOption').on("click", function(){
  //   $("#myModal").modal('show');
  //   return false
  // });

);
