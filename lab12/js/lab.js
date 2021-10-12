//@author Matthew Habrial, Joshua Rodriguez
//@Date 10/11/2021


//click button function changes challenge head red
$("#challenge-button").click(function(){
	$("#text1").toggleClass("red-text");
});
//click button function changes problems head green
$("#problems-button").click(function(){
	$("#text2").toggleClass("green-text");
});
//click button function changes results head orange
$("#results-button").click(function(){
	$("#text3").toggleClass("orange-text");
});
