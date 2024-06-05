const lettres = document.querySelector('h2');

lettres.addEventListener('mousedown', function() {
        lettres.style.color = 'red';
});

lettres.addEventListener('mouseup', function() {
    lettres.style.color = 'black';
});