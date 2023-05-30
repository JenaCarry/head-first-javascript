class Dog {
  constructor(params) {
    this.name = params.name;
    this.breed = params.breed;
    this.weight = params.weight;
    this.bark = () => {
      if (this.weight > 25) {
        console.log(`${this.name} says Woof!`);
      } else {
        console.log(`${this.name} says Yip!`);
      }
    };
  }
}

const fidoParams = { name: "Fido", breed: "Mixed", weight: 38 };
const fluffyParams = { name: "Fluffy", breed: "Poodle", weight: 30 };
const spotParams = { name: "Spot", breed: "Chihuahua", weight: 10 };
const limoParams = { name: "Rhapsody In Blue", breed: "Poodle", weight: 40 };

const fido = new Dog(fidoParams);
const fluffy = new Dog(fluffyParams);
const spot = new Dog(spotParams);
const limo = new Dog(limoParams);

const dogs = [fido, fluffy, spot, limo];

for (let i = 0; i < dogs.length; i++) {
  let size = "small";
  if (dogs[i].weight > 10) {
    size = "large";
  }
  console.log(`Dog ${dogs[i].name} is a ${size} ${dogs[i].breed}`);
  dogs[i].bark();
}

if (fluffy instanceof Dog) {
  console.log("Congrats, it's a Dog!");
}
