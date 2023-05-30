function dogCatcher(obj) {
  if (obj instanceof Dog) {
    return true;
  }
  return false;
}

class Cat {
  constructor(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
  }
}

const meow = new Cat("Meow", "Siamese", 10);
const whiskers = new Cat("Whiskers", "Mixed", 12);

// Object
const fido = { name: "Fido", breed: "Mixed", weight: 38 };

class Dog {
  constructor(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
      if (this.weight > 25) {
        alert(this.name + " says Woof!");
      } else {
        alert(this.name + " says Yip!");
      }
    };
  }
}

const fluffy = new Dog("Fluffy", "Poodle", 30);
const spot = new Dog("Spot", "Chihuahua", 10);

const dogs = [meow, whiskers, fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
  if (dogCatcher(dogs[i])) {
    console.log(`${dogs[i].name} is a Dog!`);
  }
}
