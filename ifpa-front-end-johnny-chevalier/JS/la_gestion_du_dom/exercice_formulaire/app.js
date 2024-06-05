const inputElement = document.querySelector('input'); 

inputElement.addEventListener('input', function(event) {
    // recupere la valeur de l'input a chaque fois que l'utilisateur tape un caractere
    let valeur = event.target.value
    if (valeur >= 50 && valeur <= 100) {
        inputElement.style.background = 'green';
    } else {
        inputElement.style.background = 'red';
    }
    console.log(event.target.value);
});