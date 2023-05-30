class Dog {
  constructor(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }
  bark() {
    if (this.weight > 25) {
      console.log(this.name + " says Woof!");
    } else {
      console.log(this.name + " says Yip!");
    }
  }
  run() {
    console.log("Run!");
  }
  wag() {
    console.log("Wag!");
  }
  sit() {
    if (this.sitting) {
      console.log(`${this.name} is already sitting`);
    } else {
      this.sitting = true;
      console.log(`${this.name} is now sitting`);
    }
  }
}

Dog.prototype.species = "Canines";

const fido = new Dog("Fido", "Mixed", 38);
const fluffy = new Dog("Fluffy", "Poodle", 30);
const spot = new Dog("Spot", "Chihuahua", 10);

fido.bark();
fido.run();
fido.wag();
fluffy.bark();
fluffy.run();
fluffy.wag();
spot.bark();
spot.run();
spot.wag();

const barnaby = new Dog("Barnaby", "Basset Hound", 55);

Dog.prototype.sitting = false;

barnaby.sit();
barnaby.sit();

console.log(spot.hasOwnProperty("species"));
console.log(fido.hasOwnProperty("species"));

spot.sit();
console.log(spot.hasOwnProperty("sitting"));
