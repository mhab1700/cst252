//@author Matthew Habrial, Joshua Rodriguez
//@Date 9/29/2021

var button = document.getElementById('my-button');

function sortText(text) {
	return text.split('').sort().reverse().join('');
}


// Button Click Event
button.addEventListener('click', function() {

  var inputEl = document.getElementById('input');
    // find the value of the input field
  var name = inputEl.value;
  // run through sort
  var newName = sortText(name);
  // Changing h1 text
  var newText = "Hello, " + newName + "!";
  // Find Element
	var heading = document.getElementById('greet');
  // Change h1
  heading.innerHTML = newText;

});
