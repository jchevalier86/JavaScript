const annee = parseInt(prompt("Veuillez entrer une année"));

if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
    console.log(annee + " est une année bissextile");
} else {
    console.log(annee + " n'est pas une année bissextile");
}