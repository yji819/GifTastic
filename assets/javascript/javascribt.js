var topic = ["elephant", "rabit", "cat", "dog", "ground hog", "lion", "donkey", "monkey"];

function renderbtn() {
    $("#animalBtn").empty();
    for (var i = 0; i< topic.length; i++) {
        var btn = $('<button>').attr('class','btn btn-outline-primary');
        btn.text(topic[i]);
        $("#animalBtn").append(btn);
    }};
    
    $("#searchBtn").on("click", function(){
        var searchInput = $("#search").val();
        console.log(searchInput);
        topic.push(searchInput);
        renderbtn()
    });
    
    


    // $("").on("click", function() {}




    renderbtn();