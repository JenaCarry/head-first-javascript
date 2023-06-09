class Robot {
  constructor(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
  }
}

Robot.prototype.reportError = function () {
  console.log(this.name + " says " + this.errorMessage);
};
Robot.prototype.spillWater = function () {
  this.errorMessage = "I appear to have a short circuit!";
};

Robot.prototype.maker = "ObjectsRUs";

Robot.prototype.errorMessage = "All systems go.";

const robby = new Robot("Robby", 1956, "Dr. Morbius");
const rosie = new Robot("Rosie", 1962, "George Jetson");

rosie.reportError();
robby.reportError();

robby.spillWater();

rosie.reportError();
robby.reportError();

console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));
