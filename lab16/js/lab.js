//@authors Joshua Rodriguez, Matthew HAbrial
//@date 10/27/21


function Vehicle(make, model, year, color, extras) {
          this.carMake = make;
          this.carModel = model;
          this.carYear = year;
          this.carColor = color;
          this.carExtras = extras;

          this.info = function(){
            return this.carMake + " " + this.carModel + " " +
                   this.carYear + " " + this.carColor + " " +
                   this.carExtras + " ";
    };
}


// all cars
var car = new Vehicle("Nissan", "Altima", 2007, "Silver", "Dented");
var car1 = new Vehicle("Nissan", "Sentra", 2010, "Blue", "Minty");
var car2 = new Vehicle("Ford", "Pinto", 1980, "Brass", "Scratched");


//output
$("#output").append("<p>" + car.info() + "</p>");
$("#output").append("<p>" + car1.info() + "</p>");
$("#output").append("<p>" + car2.info() + "</p>");
