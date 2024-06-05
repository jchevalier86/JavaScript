// Partie 1 - Création de l'objet

let personne = {
    nom: "Doe",
    prenom: "John",
    age: 32,
    email: "john.doe@john.doe",
    afficherInfos: function() {
        console.log(`Nom : ${this.nom}, Prénom : ${this.prenom}, Âge : ${this.age}, Email : ${this.email}`);
    },
    miseAJourEmail: function(email) {
        this.email = email;
    }
};

personne.afficherInfos();

// Partie 2 - Manipulation des propriétés

personne.age = 34;

personne.afficherInfos();

personne.telephone = '0623585452';

console.log(personne.telephone);

personne.miseAJourEmail('doe.john@doe.john');

personne.afficherInfos();

// Partie 3 - Stockage et manipulation d'objets dans un tableau

let personne1 = {
    nom: "Doe",
    prenom: "Toto",
    age: 40,
    email: "toto.doe@toto.doe",
    afficherInfos: function() {
        console.log(`Nom : ${this.nom}, Prénom : ${this.prenom}, Âge : ${this.age}, Email : ${this.email}`);
    }
};

let personne2 = {
    nom: "Doe",
    prenom: "Jean",
    age: 42,
    email: "jean.doe@jean.doe",
    afficherInfos: function() {
        console.log(`Nom : ${this.nom}, Prénom : ${this.prenom}, Âge : ${this.age}, Email : ${this.email}`);
    }
};

let personne3 = {
    nom: "Doe",
    prenom: "Jane",
    age: 44,
    email: "jane.doe@jane.doe",
    afficherInfos: function() {
        console.log(`Nom : ${this.nom}, Prénom : ${this.prenom}, Âge : ${this.age}, Email : ${this.email}`);
    }
};

let annuaire = [
    {personne1},
    {personne2},
    {personne3}
];
    
function afficherAnnuaire(annuaire) {
    for (let personne of annuaire) {
        personne.afficherInfos()
    }
};

afficherAnnuaire(annuaire);
personne1.afficherInfos();
personne2.afficherInfos();
personne3.afficherInfos();

// Partie 4 - Recherche et filtrage dans un tableau d'objets

function trouverPersonneParNom (annuaire, nom) {
    for (let personne of annuaire) {
        if (personne.nom === nom) {
            personne.afficherInfos()
        }
    }
};

trouverPersonneParNom(annuaire, 'Doe');

function filtrerPersonneParAge (annuaire, ageMinimum, ageMaximum) {
    let newAnnuaire = [];
    for (let personne of annuaire) {
        if (personne.age >= ageMinimum && personne.age <= ageMaximum) {
            newAnnuaire.push(personne)
        }
    }
    return newAnnuaire
}

console.log(filtrerPersonneParAge(annuaire, 10, 35));