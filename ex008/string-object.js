let emot = "XOxxOO";
let hugs = 0;
let kisses = 0;

emot = emot.trim(); // Remove os espaços iniciais e finais
emot = emot.toUpperCase();

console.log(emot);

for (let i = 0; i < emot.length; i++) {
  if (emot.charAt(i) === "X") {
    hugs++;
  } else if (emot.charAt(i) == "O") {
    kisses++;
  }
}

console.log(hugs, kisses);

let name = "Jenny";
let phone = "867-5309";
let fact = "This is a prime number";
let songName = phone + "/" + name;
let index = phone.indexOf("-");
if (fact.substring(10, 15) === "prime") {
  console.log(fact);
}
