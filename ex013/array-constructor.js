const emptyArray = new Array();
const oddNumbers = new Array(3);

emptyArray.push(2);
emptyArray.push(4);
emptyArray.push(6);

oddNumbers[0] = 1;
oddNumbers[1] = 3;
oddNumbers[2] = 5;

oddNumbers.reverse();

const aString = oddNumbers.join(" - ");

console.log(emptyArray);
console.log(oddNumbers);
console.log(aString);

const areAllOdd = oddNumbers.every((x) => {
  return x % 2 !== 0;
});

console.log(areAllOdd);

function getNumberOfWidgetsFromDatabase() {
  return 8;
}

function getDatabaseRecord() {
  return [1, 2, 3, 4, 5, 6, 7, 8];
}

const n = getNumberOfWidgetsFromDatabase();

const widgets = new Array(n);

for (let i = 0; i < n; i++) {
  widgets[i] = getDatabaseRecord()[i];
}

console.log(widgets);
