//@author Matthew Habrial, Joshua Rodriguez
//@Date 9/29/2021

var outputEl = document.getElementById("output");

var oneEl = document.createElement("button");

var twoEl = document.createElement("button");


outputEl.appendChild(oneEl);
outputEl.appendChild(twoEl);

// New id
oneEl.id = "Uno";
twoEl.id = "Dos";

// change button text to something
oneEl.innerHTML = "Push Here";
oneEl.style.backgroundColor = "orange";
// next button
twoEl.innerHTML = "Dont Touch";
twoEl.style.backgroundColor ="red";
