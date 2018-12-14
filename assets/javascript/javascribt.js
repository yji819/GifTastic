var topic = ["elephant", "rabbit", "cat", "dog", "ground hog", "lion", "donkey", "monkey"];

function renderbtn() {
    $("#animalBtn").empty();
    for (var i = 0; i< topic.length; i++) {
        var btn = $('<button>').attr('class','btn btn-outline-primary');
        btn.attr("id", "aniamlTag");
        btn.attr("data-name", topic[i]);
        btn.text(topic[i]);
        $("#animalBtn").append(btn);
    }};
    
    $("#searchBtn").on("click", function(){
        var searchInput = $("#search").val().trim();
        console.log(searchInput);
        topic.push(searchInput);
        renderbtn()
        $("#search").val("");
    });
    
    
    function displayGif() {
        var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=oWjJQ8VTOYxx0kSOODnJs0WnpsAppEjf&limit=10";
                        
        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function(response) {
            var results = response.data
            console.log(queryURL);
            $("#animalgif").empty();
  
        for (var i=0; i< results.length; i++ ){
            var gifDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var animalImages = $("<img>");
            animalImages.attr("class", "gif")
            animalImages.attr("src", results[i].images.fixed_height_still.url)
            animalImages.attr("data-animate", results[i].images.fixed_height.url);
            animalImages.attr("data-still", results[i].images.fixed_height_still.url)
            animalImages.attr("data-state", "still")
            gifDiv.prepend(p);
            gifDiv.prepend(animalImages);
            $("#animalgif").prepend(gifDiv);
        }             
        })
    };

    $(document).on("click", ".gif", function() {
        var state = $(this).attr("data-state");
   
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } 
        if (state == "animate") {
            $(this).attr("src", $(this).attr("data-still"))
            $(this).attr("data-state", "still")
        }
    });

    $(document).on("click", "button", displayGif);
    renderbtn();