const elementButton = document.querySelector('button');
const elementParagraphe = document.querySelector('p');
let compteur = 0;

elementButton.addEventListener('click', function() {
    compteur ++;
    elementParagraphe.innerText = `Compteur : ${compteur}`;
});