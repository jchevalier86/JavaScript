const mdp = prompt("Votre mot de passe svp"); // exemple : 12345
const motDePasseValide = mdp.length >= 5 && mdp.length <= 12;
        

if (motDePasseValide) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe invalide");
}