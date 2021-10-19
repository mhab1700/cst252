//@authors Joshua Rodriguez, Matthew Habrial
//@Date 10/18/21


for (var num=1; num <= 200; num++) {
  var outputStr = ""
  // if multiple of 3, add fizz
  if (num % 3 == 0) {
    outputStr += "Fizz"
  }
  // if multiple of 5, add buzz
  if (num % 5 == 0) {
    outputStr += "Buzz"
  }
  // if multiple of 7, add boom
  if (num % 7 == 0) {
    outputStr += "Boom"
  }
  // if string is still blank, print it
  if (outputStr == "") {
    console.log(num);
  }
  // Print String Console, and HTML
  else {
    console.log(outputStr + '!');
  }
  outputStr += "Fizz";
  $("#output").append("<p>" + num + "<br>" + outputStr );
}
