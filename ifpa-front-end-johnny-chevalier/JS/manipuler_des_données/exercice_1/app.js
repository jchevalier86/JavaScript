const mots = [
    "chat",
    "chien",
    "oiseau",
    "poisson",
    "souris",
    "lapin",
    "tortue",
    "poule"
];

// Résultat attendu :
//"POULE, TORTUE, LAPIN, SOURIS, POISSON, OISEAU, CHIEN, CHAT"

//let mots1 = mots.reverse();
//let mots2 = mots1.join(', ');
//let mots3 = mots2.toUpperCase();
//console.log(mots3);

// OU

let resultat = mots.reverse().join(', ').toUpperCase();
console.log(resultat);