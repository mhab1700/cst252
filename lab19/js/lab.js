//@authors Joshua Rodriguez, Matthew Habrial
//@date 11/12/2021



//Get random trivia from numbersapi
URL = "https://www.boredapi.com/api/activity/"


// Click Function
$('#activate').click(function(){
    //AJAX Method
    $.ajax({
        // Endpoint
        url: URL,
        type: "GET",
        // dataType : "json",
    })
    // Request
    .done(function(data) {
        var printableData = "<pre>" + JSON.stringify(data, null, 2) + "</pre>";
        // Output to HTML
         $("#output").append("<p>" + JSON.stringify(data));
    })
});
