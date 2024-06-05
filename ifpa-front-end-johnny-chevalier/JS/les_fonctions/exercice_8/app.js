// exemples

//numberToWord(5) // "cinq"
//numberToWord(8) // "huit"

function numberToWord(nombre) {
    const nombresEnMots = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix"];
    return nombresEnMots[nombre];
}

console.log(numberToWord(5));