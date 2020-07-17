

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
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "800dedb80dmsh5623edb79c19968p10818fjsnd60acfd537d3",
      }
    }).then(function (response) {
      for (i = 0; i <= 100; i++) {
        $('.ingredientsOption').append("<div>" + response.drinks[i].strIngredient1 + "</div>" + "<br>");
      }
    });
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
        $('.glassesOption').append("<div>" + response.drinks[i].strGlass + "</div>" + "<br>");
      }
    });
  };
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
        $('.categoriesOption').append("<div>" + response.drinks[i].strCategory + "</div>" + "<br>");
      }
    });
  };
  // End Glasses List

  function appendImgGlassRate(rate, id) {
    if (rate < 0 || null) {
      $(`.glasses${id}`).append(`
        <div class="col-md glass-00"></div>
        <div class="col-md glass-00"></div>
        <div class="col-md glass-00"></div>
        <div class="col-md glass-00"></div>
        <div class="col-md glass-00"></div>
        `);
    } else if (rate > 0.01 && rate <= 2) {
      $(`.glasses${id}`).append(`
        <div class="col-md glass-100"></div>
        <div class="col-md glass-00"></div>
        <div class="col-md glass-00"></div>
        <div class="col-md glass-00"></div>
        <div class="col-md glass-00"></div>
        `);
    } else if (rate > 2.01 && rate <= 4) {
      $(`.glasses${id}`).append(`
        <div class="col-md glass-100"></div>
        <div class="col-md glass-60"></div>
        <div class="col-md glass-00"></div>
        <div class="col-md glass-00"></div>
        <div class="col-md glass-00"></div>
        `);
    }
    else if (rate > 4.01 && rate <= 6) {
      $(`.glasses${id}`).append(`
        <div class="col-md glass-100"></div>
        <div class="col-md glass-100"></div>
        <div class="col-md glass-60"></div>
        <div class="col-md glass-00"></div>
        <div class="col-md glass-00"></div>
        `);
    } else if (rate > 6.01 && rate <= 8) {
      $(`.glasses${id}`).append(`
        <div class="col-md glass-100"></div>
        <div class="col-md glass-100"></div>
        <div class="col-md glass-100"></div>
        <div class="col-md glass-60"></div>
        <div class="col-md glass-00"></div>
        `);
    } else if (rate > 8.01 && rate < 10) {
      $(`.glasses${id}`).append(`
        <div class="col-md glass-100"></div>
        <div class="col-md glass-100"></div>
        <div class="col-md glass-100"></div>
        <div class="col-md glass-100"></div>
        <div class="col-md glass-60"></div>
        `);
    } else if (rate >= 10) {
      $(`.glasses${id}`).append(`
        <div class="col-md glass-100"></div>
        <div class="col-md glass-100"></div>
        <div class="col-md glass-100"></div>
        <div class="col-md glass-100"></div>
        <div class="col-md glass-100"></div>
        `);
    }

  };

  function appendReviewDetails(info) {
    $('.content-first').append(`
      <div class="review-card border-rounded">
        <div id="${info.id}" class="col-md">
          <div class="row">${info.rate_cocktail}/10</div>
          <div class="row col-md-5 glasses${info.id}"></div>
          <div class="row">${info.review_cocktail}</div>
          <div class="row"> By User ${info.user_id}</div>
        </div>
      </div>
      `);
  }

  //corona_cocktail calls
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

  //not sure if we necessarily need getrating/ get review by id... 
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


  function getReviewbyId(reviews_id) {
    $.ajax({
      async: true,
      // url: `https://backend-project-2.herokuapp.com/review/${reviews_id}`,
      url: `http://localhost:9000/review/${reviews_id}`,
      method: "GET"
    }).then((res) => {
      console.log(res);
    });
  };


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



  //the post and patch have not been tested out nor am I sure if I wrote it correctly. --Juan
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




  // Search bar / find drink by name



  // login button / modal function

  $(document).on("click", ".login-modal", function () {
    $("#myModal").modal('show');
    return false
  });
  // end login button / modal function

  // sign up button start
  $(document).on("click", ".signUp", function () {
    $("#signUpModal").modal('show');
    $('myModal').modal('hide')
    return false
  });
  //end sign up button

  // Search Button
  $(document).on("click", ".go", function () {
    console.log("searched")
  });



});
