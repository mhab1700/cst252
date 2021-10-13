//@author Matthew Habrial, Joshua Rodriguez
//@Date 10/13/2021


//a string that retuns an answer
function sortingHat(str) {
    len = str.length;
    mod = len % 4;

  if (mod == 0){
    return "Gryffindor";
  }
  else if (mod == 1){
    return "Ravenclaw";
  }
  else if (mod == 2){
    return "Slytherin";
  }
  else if (mod == 3){
    return "Hufflepuff";
  }
}

//Button event listener
var myButton = document.getElementById("button");
myButton.addEventListener("click", function(){
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
});
