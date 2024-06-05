// Exemple de déroulement :
//Votre nombre secret est 7 par exemple.
//L'utilisateur saisit 5, informez l'utilisateur :
//Trop petit
//L'utilisateur saisit 9, informez l'utilisateur :
//Trop grand
//L'utilisateur saisit 7, informez l'utilisateur :
//Félicitations, vous avez trouvé !

const nombreSecret = 7;
let nombreUser = parseInt(prompt("Devinez le nombre"));
let essai = 1;
let essaiRestant = 5;

while (nombreUser !== nombreSecret && essaiRestant > 0) {
    if (nombreUser < nombreSecret) {
        nombreUser = parseInt(prompt(`Trop petit ! Il vous reste ${essaiRestant} essais`));
    } if (nombreUser > nombreSecret) {
        nombreUser = parseInt(prompt(`Trop grand ! Il vous reste ${essaiRestant} essais`));
    }
    essai++
    essaiRestant--
}
if (nombreUser === nombreSecret) {
    alert(`Félicitations, vous avez trouvé en ${essai} essais !`);
} else {
    alert("Vous avez échoué");
}

// Résultat attendus :
//Félicitations, vous avez trouvé en 3 essais !

// Exemples de résultat attendus :
//Trop petit ! Il vous reste 4 essais !
//Trop grand ! Il vous reste 1 essai !