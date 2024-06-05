// Exemple de déroulement :

//"Veuillez entrer le mot de passe :"

// Si incorrect, informez l'utilisateur : 
//Mot de passe incorrect, essayez à nouveau.

// Si correct, informez l'utilisateur 
//Accès autorisé.

const monMotDePasse = "1234";
let passwordUser = prompt("Saisissez votre mot de passe");

while (passwordUser !== monMotDePasse) {
    passwordUser = prompt("Mot de passe incorrect, essayez à nouveau.");
}
alert("Accès autorisé.");

// Tant que le mot de passe est différent du mien, l'utilisateur doit mettre un nouveau mot de passe.