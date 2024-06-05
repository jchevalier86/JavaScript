function addition(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Paramètres incorrects";
    }
    return a + b
}

const add = addition(5, 5);
console.log(add);

function soustraction(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Paramètres incorrects";
    }
    return a - b;
}

const soustrac = soustraction(10, 5);
console.log(soustrac);

function multiplication(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Paramètres incorrects";
    }
    return a * b;
}

const multi = multiplication(5, 3);
console.log(multi);

function division(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Paramètres incorrects";
    }
    return a * b;
}

const div = division(20, 2);
console.log(div);