// Json string
const fidoString1 = '{ "name": "Fido", "breed": "Mixed", "weight": 38 }';
const fido1 = JSON.parse(fidoString1);
console.log(fido1.name);

const fido2 = {
  name: "Fido",
  breed: "Mixed",
  weight: 38,
};
const fidoString2 = JSON.stringify(fido2);
console.log(fidoString2);
