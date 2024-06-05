// tableaux à tester :

//const tableau1 = [2, 6, 14, 6, 0]
//const tableau2 = [6, 8, 7, 8, 10]

function nombres(tableau) {
    if (tableau % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}

const tableau1 = [2, 6, 14, 6, 0];
const tableau2 = [6, 8, 7, 8, 10];
const nombresPairsOuImpairs = nombres(tableau1);
console.log(nombresPairsOuImpairs);