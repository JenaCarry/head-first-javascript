const products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];

// Compara os nomes
products.sort((a, b) => a.name.localeCompare(b.name));
console.log("Products sorted by name: ");
printProducts(products);
console.log();

// Compara as calorias
products.sort((a, b) => a.calories - b.calories);
console.log("Products sorted by calories: ");
printProducts(products);
console.log();

// Compara as cores
products.sort((a, b) => a.color.localeCompare(b.color));
console.log("Products sorted by color: ");
printProducts(products);
console.log();

// Compara as vendas
products.sort((a, b) => a.sold - b.sold);
console.log("Products sorted by sold: ");
printProducts(products);

function printProducts(products) {
  for (let i = 0; i < products.length; i++) {
    console.log(
      `Name: ${products[i].name}, Calories: ${products[i].calories}, Color: ${products[i].color}, Sold: ${products[i].sold}`
    );
  }
}

/*
Compara os nomes
products.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name === b.name) {
    return 0;
  }
  return -1;
});

Compara as vendas
function compareSold(colaA, colaB) {
  if (colaA.sold > colaB.sold) {
    return 1;
  } else if (colaA.sold === colaB.sold) {
    return 0;
  } else {
    return -1;
  }
}
*/
