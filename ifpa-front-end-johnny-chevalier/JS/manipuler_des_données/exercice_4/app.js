function convertirEnFahrenheit(degCel) {
    if (typeof degCel !== 'number') {
        return "Donnees en entree non-correctes.";
    }
    const degFar = (degCel * (9/5) + 32);
    return Math.round(degFar);
}

const degreCelsius = 25;
console.log(`${degreCelsius} degre Celsius equivaut à ${convertirEnFahrenheit(degreCelsius)} degre Fahrenheit`);