$(document).ready(function() {
  $("form").submit(function(event) {
    var foodInput = $("input#food").val();
    var moviesInput = $("input#movies").val();
    var dogsInput = $("input#dogs").val();
    var wineInput = $("input#wine").val();

    var favorites = [foodInput, moviesInput, dogsInput, wineInput];

    $(".food").text(displayFood);
    $(".movies").text(displayMovies);
    $(".dogs").text(displayDogs);
    $(".wine").text(displayWine);

    var displayFood = favorites[0];






    event.preventDefault();
    });
  });
