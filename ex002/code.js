const word = "bottles";
let count = 99;

while (count > 0) {
  console.log(`${count} ${word} of beer on the wall`);
  console.log(`${count} ${word} of beer`);
  console.log("Take one down, pass it around,");
  count--;
  if (count === 0) {
    console.log(`No more ${word} of beer on the wall.`);
  }
}
