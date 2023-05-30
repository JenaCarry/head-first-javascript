// Encadeamento opcional

const users = [
  { primero: "Jean", segundo: "Dias" },
  { primero: "Lucas", segundo: "Pedro" },
  { primero: "João", segundo: "Vitor", terceiro: "Silva" },
];

function fullName(fullName) {
  return `${fullName.primero?.toUpperCase()} ${fullName.segundo?.toUpperCase()} ${
    fullName.terceiro?.toUpperCase() ?? ""
  }`;
}

users.forEach((user) => console.log(fullName(user)));
