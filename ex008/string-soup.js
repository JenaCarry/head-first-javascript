// Propriedade length e Método charAt()
let input = "jenny@wickedlysmart.com";
for (let i = 0; i < input.length; i++) {
  if (input.charAt(i) === "@") {
    console.log("There's an @ sign at index " + i);
  }
}

let abc = "abcdef";
console.log(abc.charAt(0), abc.charAt(5));

// Método indexOf()
// Um Argumento
let phrase = "the cat in the hat";
let index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index);
// Dois Argumentos
index = phrase.indexOf("the", 5);
console.log("there's a the sitting at index " + index);
// Retorna -1 se não existir
index = phrase.indexOf("dog");
console.log("there's a dog sitting at index " + index);

// Método substring()
// Um Argumento
let dataSub = "name|phone|address";
let val = dataSub.substring(5, 10);
console.log("Substring is " + val);
// Dois Argumentos
val = dataSub.substring(5);
console.log("Substring is now " + val);

// Método split()
let dataSplit = "name|phone|address";
let vals = dataSplit.split("|");
console.log("Split array is ", vals);

// toLowerCase e Replace
let nameLower = "LUCAS MAIA LUCAS";
console.log(nameLower.toLowerCase());
console.log(nameLower.replace("LUCAS", "PEDRO"));
console.log(nameLower.replaceAll("LUCAS", "PEDRO"));

// slice() e lastIndexOf()
// Um Argumento
console.log(nameLower.slice(2));
// Dois Argumento
console.log(nameLower.slice(2, 8));
console.log(nameLower.lastIndexOf("LUCAS"));

// trim e toUpperCase()
let nameSpace = "  Jean  ";
let concatenar = "Dias";
console.log(nameSpace.trim());
console.log(concatenar.concat(" Pedro"));
console.log(concatenar.toLocaleUpperCase());
