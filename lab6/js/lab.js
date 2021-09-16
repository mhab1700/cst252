// @author: Matthew Habrial
//@created: 9/15/2021


// Define Variables

var myTransport = ["Drive","Walk","Bike"];



var myMainRide = {
 make:"Nissan",
 model:"Altima",
 extras:"Dented",
 year:2007,
 ownIt:"True",
 age:14
};



// Output
document.writeln("The Transportation I Use:", "</br>", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
   JSON.stringify(myMainRide, null, '\t'), "</pre>");
