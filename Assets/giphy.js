$(document).ready(function() {
    

    var fClubs = ["Liverpool" , "Manchester City", "Tottenham" , "Chelsea FC", "Man United" , "Arsenal" , "Newcastle", "Leicester City" , "Wolverhampton FC" , "Everton" , "Watford" , "West Ham" , "Bournemouth", "Crystal Palace" , "Burnley FC" , "Southampton" , "Brighton FC", "Cardiff City" , "Fulham", "Huddersfield"];

    function addButton(){
        $("#button-div").empty();
    
        for( var i = 0; i < fClubs.length; i++){
            var btn = $("<button>");
            btn.addClass("football-btn");
            btn.attr("data-name" , fClubs[i]);
            btn.text(fClubs[i]);
            $("#button-div").append(btn);
        };
    };


    $("#add-club").on("click" , function(event){
        event.preventDefault();
        var clubAdder = $("#club-input").val().trim();
        console.log(clubAdder);
        fClubs.push(clubAdder);
        addButton();
    });

    function displayGIF(){
        console.log("displayGIF");
        console.log(this);

        var search = $(this).attr("data-name");
    
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=jcOlWjxHVxwHfEpveC2M0TxNGXH4cEiE&q=" + search + "&limit=10&offset=0&rating=G&lang=en";

        $(".giphy").html("");
        
        $.ajax({
        url: queryURL,
            method: "GET"
        }).then(function(response){

            var giphyDiv = $("<div class='giphy'>");

            for (var i = 0; i < response.data.length; i ++){
                var imgURL = response.data[i].images.downsized_medium.url;
                var image = $("<img>").attr("src", imgURL);
                giphyDiv.append(image);
                $("#giphy-div").prepend(giphyDiv);
            }
        }); 
    };

    $(document.body).on("click", ".football-btn", displayGIF);

    addButton();

});









