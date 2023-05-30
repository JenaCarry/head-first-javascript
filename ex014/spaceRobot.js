class Robot {
  constructor(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
  }
}

Robot.prototype.maker = "ObjectsRUs";

Robot.prototype.speak = function () {
  console.log("Warning warning!");
};

Robot.prototype.makeCoffee = function () {
  console.log("Making coffee");
};

Robot.prototype.blinkLights = function () {
  console.log("Blink blink!");
};

class SpaceRobot extends Robot {
  constructor(name, year, owner, homePlanet) {
    super(name, year, owner);
    this.homePlanet = homePlanet;
  }
}

SpaceRobot.prototype.speak = function () {
  console.log(`${this.name} says Sir, If I may venture an opinion...`);
};
SpaceRobot.prototype.pilot = function () {
  console.log(`${this.name} says Thrusters? Are they important?`);
};

const c3po = new SpaceRobot("C3PO", 1977, "Luke Skywalker", "Tatooine");

c3po.speak();
c3po.pilot();
console.log(`${c3po.name} was made by ${c3po.maker}`);

const simon = new SpaceRobot("Simon", 2009, "Carla Diana", "Earth");

simon.makeCoffee();
simon.blinkLights();
simon.speak();

console.log(`${c3po.name} constructor is ${c3po.constructor.name}`);
console.log(`${simon.name} constructor is ${simon.constructor.name}`);
