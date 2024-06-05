// Résultat dans la console :

//Les dix premiers nombres sont : 1,2,3,4,5,6,7,8,9,10
//Les dix premiers nombres pairs sont : 2,4,6,8,10,12,14,16,18,20

let nombres = [];

//1a.
for (let i = 1; i <= 10; i++) {
    nombres.push(i);
}
console.log(nombres);

let phrase = "Les dix premiers nombres sont : ";

//1b.
for (let i = 1; i <= nombres.length; i++) {
    if (nombres.length -1 === i) {
        phrase += `${nombres[i]}`;
    } else {
        phrase += `${nombres[i]}`;
    }
}
//console.log(`Les dix premiers nombres sont : ${nombres}`);

let nombresPairs = [];

//2a.
for (let j = 2; j <= 20; j++) {
    nombresPairs.push(j++);
}
console.log(`Les dix premiers nombres pairs sont : ${nombresPairs}`);