const formElement = document.querySelector('form');
const errorMessageSpan = document.querySelector('.error-message');

formElement.addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nom = data.get('nom');

    if (nom.length === 0) {
        console.log('le champ ne doit pas être vide');
        errorMessageSpan.innerText = 'le champ ne doit pas être vide';
    } else if (nom.length < 5) {
        console.log('le nom doit comporter au moins 5 caractères');
        errorMessageSpan.innerText = 'le nom doit comporter au moins 5 caractères';
    } else {
        //alert('Votre nom est correct');
        errorMessageSpan.innerText = '';
        formElement.submit();
    }
});