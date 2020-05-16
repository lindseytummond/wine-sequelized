// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(document).ready(){

// }
$(function() {
  $(".change-taste").on("click", function(event) {
    // console.log(wines)
    var id = $(this).data("id");
    var newTaste = $(this).data("newtaste");

    var newTasteState = {
      taste: newTaste
    };

    // Send the PUT request.
    $.ajax("/api/wines/" + id, {
      type: "PUT",
      data: newTasteState
    }).then(
      function() {
        console.log("changed taste to", newTaste);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newWine = {
      name: $("#wine").val().trim(),
      // taste: $("[name=taste]:checked").val().trim(),
      taste: 0

    };
    console.log(newWine)

    // Send the POST request.
    $.ajax("/api/wines/create", {
      type: "POST",
      data: newWine
    }).then(
      function() {
        console.log("created new wine");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-wine").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/wines/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted wine", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});