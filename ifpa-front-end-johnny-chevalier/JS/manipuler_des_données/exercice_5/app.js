//function estPalindrome (mot) {
    //let motInverse = mot.split('').reverse().join('');
    //if (mot === motInverse) {
        //return true;
    //}
    //return false;
//}
//console.log(estPalindrome("kayak"));

// OU

function estPalindrome (mot) {
    let motInverse = mot.split('').reverse().join('');
    return mot === motInverse
}
console.log(estPalindrome("banane"));
