class Car {
  constructor(params) {
    this.make = params.make;
    this.model = params.model;
    this.year = params.year;
    this.color = params.color;
    this.passengers = params.passengers;
    this.convertible = params.convertible;
    this.mileage = params.mileage;
    this.started = false;
    this.start = () => {
      this.started = true;
    };
    this.stop = () => {
      this.started = false;
    };
    this.drive = () => {
      if (this.started) {
        console.log(`${this.make} ${this.model} goes zoom zoom!`);
      } else {
        console.log("Start the engine first.");
      }
    };
  }
}

const chevyParams = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021,
};

const fiatParams = {
  make: "Fiat",
  model: "500",
  year: 1957,
  color: "Medium Blue",
  passengers: 2,
  convertible: false,
  mileage: 88000,
};

const cadiParams = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892,
};

const taxiParams = {
  make: "Webville Motors",
  model: "Taxi",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
};

const limoParams = {
  make: "Webville Motors",
  model: "limo",
  year: 1983,
  color: "black",
  passengers: 12,
  convertible: true,
  mileage: 21120,
};

const chevy = new Car(chevyParams);
const fiat = new Car(fiatParams);
const cadi = new Car(cadiParams);
const taxi = new Car(taxiParams);
const limo = new Car(limoParams);

const cars = [chevy, fiat, cadi, taxi, limo];

for (const car of cars) {
  car.start();
  car.drive();
  car.drive();
  car.stop();
}

if (chevy instanceof Car) {
  console.log("Congrats, it's a Car!");
}
