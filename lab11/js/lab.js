//@author Matthew Habrial, Joshua Rodriguez
//@Date 10/10/2021

// make a button in jQuery
$("#output").html("<button id = my-button>Push Me!")

//click function
$("#my-button").click(function(){
  $("#output").append("<button class = button>Push Me!");

});
