// Initial array of mopeds
var tmnt = ["Raphael", "Leonardo", "Donatello", "Michelangelo", "Splinter", "April O'Niel", "Shredder", "Krang", "Foot Soldier"];

// Function for displaying moped data
function renderButtons() {

  // Deleting the moped buttons prior to adding new moped buttons
  $("#tmnt-view").empty();

  // Looping through the array of mopeds
  for (var i = 0; i < tmnt.length; i++) {

    // Then dynamicaly generating buttons for each moped in the array.
    var a = $("<button>");
    // Adding a class
    a.addClass("tmnt");
    // Adding a data-attribute with a value of the moped at index i
    a.attr("data-name", tmnt[i]);
    // Providing the button's text with a value of the moped at index i
    a.text(tmnt[i]);
    // Adding the button to the HTML
    $("#tmnt-view").append(a);
  }
  giphy();
}

// This function handles events where one button is clicked
$("#add-tmnt").on("click", function(event) {
  // We're using a form so that the user can hit enter instead of clicking the button if they want
  event.preventDefault();

  // This line will grab the text from the input box
  var turtles = $("#tmnt-input").val().trim();
  // The moped from the textbox is then added to our array
  tmnt.push(turtles);

  // calling renderButtons which handles the processing of our moped array
  renderButtons();
});


// Calling the renderButtons function at least once to display the initial list of mopeds
renderButtons();

function giphy() {

$("button").on("click", function() {
      var tmntTwo = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        tmntTwo + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {

        console.log(response);


      var results = response.data;

      for (var i = 0; i < results.length; i++) {

      var tmntDiv = $("<div class='item'>");
      var rating = results[i].rating;
      var p = $("<p>").text("Rating: " + rating);
      var tmntImage = $("<img>");
      tmntImage.attr("src", results[i].images.fixed_height.url);
      tmntDiv.append(p);
      tmntDiv.append(tmntImage);
      $("#gifs-appear-here").prepend(tmntDiv);

        }

      });
    });
}
