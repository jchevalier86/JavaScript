const noteEleve = parseInt(prompt("Veuillez entrer votre note"));

        if (noteEleve < 12) {
            console.log("Pas de mention");
        } if (noteEleve >= 12 && noteEleve < 14) {
            console.log("Passable");
        } if (noteEleve >= 14 && noteEleve < 16) {
            console.log("Bien");
        } if (noteEleve >= 16 && noteEleve < 18) {
            console.log("Très bien");
        } if (noteEleve >= 18 && noteEleve < 20) {
            console.log("Excellent");
        } if (noteEleve === 20) {
            console.log("Extraordinaire");
        }