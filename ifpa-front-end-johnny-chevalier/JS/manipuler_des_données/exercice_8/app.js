//nombreAleatoire(1, 3) => renvoie 1, 2, ou 3

const min = 1;
const max = 3;

const nombreAleatoire = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(nombreAleatoire);