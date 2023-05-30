var passengers = [
  { name: "Jane Doloop", paid: true, ticket: "coach" },
  { name: "Dr. Evel", paid: true, ticket: "firstclass" },
  { name: "Sue Property", paid: false, ticket: "premium" },
  { name: "John Funcall", paid: true, ticket: "coach" },
];

function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
      // false
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return passenger.name === "Dr. Evel";
  // true
}

function checkNotPaid(passenger) {
  return !passenger.paid;
  // true
}

const allCanFly = processPassengers(passengers, checkNoFlyList);

if (!allCanFly) {
  console.log(
    "The plane can't take off: we have a passenger on the no-fly-list."
  );
}

const allPaid = processPassengers(passengers, checkNotPaid);

if (!allPaid) {
  console.log("The plane can't take off: not everyone has paid.");
}

function printPassenger(passenger) {
  let message = passenger.name;
  if (passenger.paid === true) {
    message += " has paid";
  } else {
    message += "has not paid";
  }
  console.log(message);
  return false;
}

processPassengers(passengers, printPassenger);

function serveCustomer(passenger) {
  const getDrinkOrderFunction = createDrinkOrder(passenger);
  const getDinnerOrderFunction = createDinnerOder(passenger);

  getDrinkOrderFunction();
  getDinnerOrderFunction();
}

function createDrinkOrder(passenger) {
  let orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function () {
      console.log("Would you like a cocktail or wine?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function () {
      console.log("Would you like some wine, cola or water?");
    };
  } else {
    orderFunction = function () {
      console.log("Your choice is cola or water.");
    };
  }
  return orderFunction;
}

function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}

function createDinnerOder(passenger) {
  let orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function () {
      console.log("Would you like chicken or pasta?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function () {
      console.log("Would you like snack box or cheese plate?");
    };
  } else {
    orderFunction = function () {
      console.log("Would you like peanuts or pretzels?");
    };
  }
  return orderFunction;
}

servePassengers(passengers);
