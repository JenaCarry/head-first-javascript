String.prototype.palindrome = function () {
  return this.valueOf() === this.split("").reverse().join("");
};

const phrases = ["eve", "kayak", "mom", "wow", "Not a palindrome"];

for (let i = 0; i < phrases.length; i++) {
  if (phrases[i].palindrome()) {
    console.log(`"${phrases[i]}" is a palindrome`);
  } else {
    console.log(`"${phrases[i]}" is NOT a palindrome`);
  }
}
