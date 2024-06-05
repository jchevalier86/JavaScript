const titreH1 = document.createElement('h1');
titreH1.style.fontSize = '50px';
titreH1.style.color = 'blue';
titreH1.innerText = 'Voici mon titre';

const enTete = document.querySelector('header');
enTete.appendChild(titreH1);

const piedDePage = document.querySelector('footer')
piedDePage.remove();