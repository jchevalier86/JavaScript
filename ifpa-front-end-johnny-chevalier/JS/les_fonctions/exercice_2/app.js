//function phrase(prenom) {
    //if (prenom) {
        //return 'Un pour ${prenom}, un pour moi';
    //} else {
        //return 'Un pour toi, un pour moi';
    //}
//}

//const result = phrase();
//console.log(result);

function phrase(prenom = "toi") {
    return `Un pour ${prenom} un pour moi`;
}

const result = phrase();
console.log(result);