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
}

Dog.prototype.species = "Canines";

class ShowDog extends Dog {
  constructor(name, breed, weight, handler) {
    // Dog.call(this, name, breed, weight) maneira antiga
    super(name, breed, weight);
    this.handler = handler;
  }
  stack() {
    console.log("Stack");
  }
  bait() {
    console.log("Bait");
  }
  gait(kind) {
    console.log(kind + "ing");
  }
  groom() {
    console.log("Groom");
  }
}

ShowDog.prototype = new Dog();
// Prática recomendada antigamente
// ShowDog.prototype.constructor = ShowDog
ShowDog.prototype.league = "Webville";

const fido = new Dog("Fido", "Mixed", 38);
const fluffy = new Dog("Fluffy", "Poodle", 30);
const spot = new Dog("Spot", "Chihuahua", 10);
const scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
const beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");

fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();

if (fido instanceof Dog) {
  console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
  console.log("Fido is a ShowDog");
}

if (scotty instanceof Dog) {
  console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
  console.log("Scotty is a ShowDog");
}

console.log(`Fido constructor is ${fido.constructor.name}`);
console.log(`Scotty constructor is ${scotty.constructor.name}`);

console.log(Dog.isPrototypeOf(ShowDog));
