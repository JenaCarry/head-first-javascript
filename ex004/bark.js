function bark(name, weight) {
  if (weight > 20) {
    return console.log(`${name} says WOOF WOOF`);
  }
  return console.log(`${name} says woof woof`);
}

bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);
