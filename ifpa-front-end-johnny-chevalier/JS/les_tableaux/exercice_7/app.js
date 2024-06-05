const tableau = [10, 22, 3, 47, 5];
let somme = 0;

// Résultat dans la console :

//La somme des nombres du tableau est 87
//La moyenne des nombres du tableau est 17.4
//Le plus grand nombre du tableau est 47
//Le plus petit nombre du tableau est 3

for (let i = 0; i < tableau.length ; i++) {
    somme += tableau[i];
}

let moyenne = somme / tableau.length
console.log(`La somme des nombres du tableau est ${somme}`);
console.log(`La moyenne des nombres du tableau est ${moyenne}`);

let grandNombre = 0;
let petitNombre = tableau[0];

for (let tab of tableau) {
    console.log(`plus petit : ${petitNombre}, tab : ${tab}`); // affichage pour aider à déboguer.
    if (tab > grandNombre) {
        grandNombre = tab;
    }
    else if (tab < petitNombre) {
        petitNombre = tab;
    }
}
console.log(`Le plus grand nombre du tableau est ${grandNombre}`);
console.log(`Le plus petit nombre du tableau est ${petitNombre}`);