// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-drank").on("click", function(event) {
      var id = $(this).data("id");
      var newDrank = $(this).data("newdrank");
  
      var newDrankState = {
        drank: newDrank
      };
  
      // Send the PUT request.
      $.ajax("/api/wines/" + id, {
        type: "PUT",
        data: newDrankState
      }).then(
        function() {
          console.log("changed drank to", newDrank);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newWine = {
        name: $("#ca").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim(),
        // drank: 0
      };
  
      // Send the POST request.
      $.ajax("/api/wines", {
        type: "POST",
        data: newWine
      }).then(
        function() {
          console.log("created a new wine");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // $(".delete-cat").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });