const motDePasse = 1234;
const motDePasseUtilisateur = parseInt(prompt("Votre mot de passe svp"));


if (motDePasse === motDePasseUtilisateur) {
    alert("OK");
} else {
    alert("Accès interdit");
}