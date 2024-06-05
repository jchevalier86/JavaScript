let mots = [
	"arbre", 
	"soleil", 
	"lumière", 
	"pomme", 
	"ordinateur", 
	"livre", 
	"bouteille", 
	"téléphone", 
	"fenêtre", 
	"chaise", 
	"table", 
	"voiture", 
	"ciel", 
	"eau", 
	"ordinateur", 
	"souris", 
	"clavier", 
	"écran", 
	"lampe", 
	"bureau"
];

let petitsMots = [];
let grandsMots = [];

for (let mot of mots) {
    if (mot.length < 7) {
		petitsMots.push(mot);
	} else {
		grandsMots.push(mot);
	}
}
console.log(`Il y a ${petitsMots.length} petits mots et ${grandsMots.length} grands mots.`);

// Résultat dans la console :

//Il y a X petits mots et Y grands mots.