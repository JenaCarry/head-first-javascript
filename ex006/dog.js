let dog = {
  name: "Fido",
  weight: 20.2,
  age: 4,
  breed: "mixed",
  activity: "fetch balls",
};

let bark;

if (dog.weight > 20) {
  bark = "WOOF WOOF";
} else {
  bark = "woof woof";
}

let speak = `${dog.name} says ${bark} when he wants to ${dog.activity}`;
console.log(speak);

// dog.dogYears = 35;
// delete dog.dogYears;
// console.log(dog);
