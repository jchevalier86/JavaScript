// Résultat dans la console :

//Le jour 1 de la semaine est Lundi
//Le jour 2 de la semaine est Mardi
//Le jour 3 de la semaine est Mercredi
//Le jour 4 de la semaine est Jeudi
//Le jour 5 de la semaine est vendredi
//Le jour 6 de la semaine est Samedi
//Le jour 7 de la semaine est Dimanche

const jours = [
    "Lundi", 
    "Mardi", 
    "Mercredi", 
    "Jeudi", 
    "Vendredi", 
    "Samedi", 
    "Dimanche"
];

console.table(jours);

for (let i = 1; i <= 6; i++) {
    console.log(`Le jour ${i} de la semaine est ${jours[i-1]}`);
}
for (let j = 1; j <= 1; j++) {
    console.log(`Le jour ${j+6} de la semaine est ${jours[jours.length -1]}, et le ${jours[jours.length -1]} c'est Gratuit !`);
}

// Résultat dans la console :

//Le jour 1 de la semaine est Lundi
//Le jour 2 de la semaine est Mardi
//...
//Le jour 7 de la semaine est Dimanche, et le Dimanche c'est Gratuit !
