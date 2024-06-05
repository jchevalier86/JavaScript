const elementCorps = document.querySelector('body');
const elementBouton = document.createElement('button');

elementBouton.style.width = '100px';
elementBouton.style.height = '50px';
elementBouton.style.position = 'absolute';
elementBouton.style.left = '50%';
elementBouton.style.top = '50%';
elementCorps.appendChild(elementBouton);

/* elementBouton.addEventListener('click', function() {
    elementCorps.style.background = "blue";
}) */

elementBouton.addEventListener('click', function() {
    // création d'un tableau de couleurs //
    const tableauCouleurs = ['blue', 'red', 'green', 'orange', 'yellow'];

    
    const indexAleatoire = Math.floor(Math.random() * tableauCouleurs.length);
    
    // affichage de couleurs aléatoire sur l'élément body //
    const couleursAleatoire = tableauCouleurs[indexAleatoire];
    elementCorps.style.background = couleursAleatoire;
});