//@authors Joshua Rodriguez, Matthew Habrial
//@date 11/28/2021





var URL = "https://xkcd.com/info.0.json";

var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";



// a helper function to turn single and double quotes into
// html symbols so they don't confuse html tags

function make_safe(str) {
  return str.replace(/'/g, '&apos;').replace(/"/g, '&quot;');
}

function getComic(num) {
  if (typeof num === 'undefined') {
    numStr = "";
  } else {
    numStr = num.toString() + "/";
  }
  var ourURL = URLpre + numStr + URLpost;
  console.log("Our new URL:", ourURL);

  $.ajax({
      // endpoint
      url: ourURL,
      // get request
      type: "GET",
  })
  // If it succeeds
  .done(function(data) {

      var imageUrl = data.img;

      var title = data.title;

      title = make_safe(title);

      var alt = data.alt;

      alt = make_safe(alt);

      var comicNum = data.num;
      var html = `<div id="imageblock">
          <h2>${title}</h2>
          <img src="${imageUrl}" title="${alt}"><br>
          <button id="prev">Previous</button><button id="next">Next</button>
        </div>`

      $("#output").html(html);


      $("#prev").click(function(){
        getComic(comicNum - 1);
      });

      $("#next").click(function(){
        getComic(comicNum + 1);
      });
  })


}

getComic();
