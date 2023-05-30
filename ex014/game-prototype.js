class Game {
  constructor() {
    this.level = 0;
  }
}

Game.prototype.play = function () {
  this.level++;
  console.log("Welcome to level " + this.level);
  this.unlock();
};
Game.prototype.unlock = function () {
  if (this.level === 42) {
    Robot.prototype.deployLaser = function () {
      console.log(`${this.name} is blasting you with laser beams.`);
    };
  }
};

class Robot {
  constructor(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
  }
}

const game = new Game();
const robby = new Robot("Robby", 1956, "Dr. Morbius");
const rosie = new Robot("Rosie", 1962, "George Jetson");

while (game.level < 42) {
  game.play();
}

robby.deployLaser();
rosie.deployLaser();
