function makePassword(password) {
  return (passwordGuess) => {
    return passwordGuess === password;
  };
}

const tryGuess = makePassword("secret");
console.log(`Guessing 'nope': ${tryGuess("nope")}`);
console.log(`Guessing 'secret': ${tryGuess("secret")}`);

function multN(n) {
  return (x) => {
    return x * n;
  };
}

var multBy3 = multN(3);
console.log(`Multiplying 2: ${multBy3(2)}`);
console.log(`Multiplying 2: ${multBy3(3)}`);

function makeCounter() {
  let count = 0;
  return {
    increment: function () {
      count = count + 1;
      return count;
    },
  };
}

const counter = makeCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
