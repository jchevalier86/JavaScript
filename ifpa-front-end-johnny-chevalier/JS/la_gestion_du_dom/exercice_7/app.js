const estUneImageFlou = document.querySelector('img');

estUneImageFlou.addEventListener('mouseover', function() {
    estUneImageFlou.style.filter = 'blur(3px)';
});

estUneImageFlou.addEventListener('mouseout', function() {
    estUneImageFlou.style.filter = 'none';
});