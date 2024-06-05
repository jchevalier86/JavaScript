function estPair(nombre) {
    if (nombre % 2 === 0) {
        return true;
    }
    return false;
}

const nombrePairOuImpair = estPair(2);
console.log(nombrePairOuImpair);

// OU

function estPair(nombre) {
    return nombre % 2 === 0;
}

console.log(estPair(2));