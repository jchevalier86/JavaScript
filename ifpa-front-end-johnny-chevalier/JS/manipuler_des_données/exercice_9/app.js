function calculeVoyelles(nombres) {
    const voyelles = ["a", "e", "i", "o", "u", "y"];
    let compteur = 0;
    for (const lettre of nombres) {
        if (voyelles.includes(lettre)) {
            compteur++
        }
    }
    return compteur;
}

let mot = "JavaScript";
console.log(calculeVoyelles(mot));