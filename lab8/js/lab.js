//@author Matthew Habrial
//@Date 9/27/2021

var outputEl = document.getElementById("output");

//array
a = [5,6,10,2,1,20];
console.log("Array", a)
// array into html
var newEl = document.createElement("p");
newEl.innerHTML = "Array:" + JSON.stringify(a);
outputEl.appendChild(newEl);
//add 5 function
function add5(n) {
  return(n + 5);
}
//calling the function adding 5 to each # in the array with .map
a.map(add5)

var result = a.map(add5);
//for the console
console.log("Adding 5 to Array", result)
//output to html
var newEl = document.createElement("p");
newEl.innerHTML = "Adding 5 to Array:" + JSON.stringify(result);
outputEl.appendChild(newEl);
//a new result for squareroot of each # in array
var result = a.map(function(n){
  return n ** 0.5;
})
//for the console
console.log("Squareroot of the array", result);
//output to html
var newEl = document.createElement("p");
newEl.innerHTML = "Squareroot of the array:" + JSON.stringify(result);
outputEl.appendChild(newEl);
