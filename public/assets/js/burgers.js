$(function() {
    $(".change-eat").on("click", function(event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");
        console.log("what is going on")
        console.log(id)
        var newBurgerState = {
            isEaten: newBurger
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("changed isEaten to", newBurger);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bur").val().trim(),
            isEaten: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function(event) {
        event.preventDefault();
        console.log("delete")
        var id = $(this).data("id");
        console.log(id)
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
            id: id
        }).then(
            function() {
                console.log("devoured the burger");
                location.reload();
            }
        );
    })

});