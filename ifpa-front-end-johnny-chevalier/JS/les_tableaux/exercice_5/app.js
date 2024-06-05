// Résultat dans la console :

//Lundi, des patates
//Mardi, des patates
//Mercredi, des patates
//Jeudi, des patates
//Vendredi, des patates
//Samedi, des patates
//Dimanche, des patates aussi !

let jours = [
    "Lundi", 
    "Mardi", 
    "Mercredi", 
    "Jeudi", 
    "Vendredi", 
    "Samedi", 
    "Dimanche"
];
const phrase = ", des patates aussi !";

for (const jour of jours) {
    if (jour === "Dimanche") {
        console.log(`${jours[jours.length -1]}${phrase}`);
    } else {
        console.log(`${jour}, des patates`);
    }
}