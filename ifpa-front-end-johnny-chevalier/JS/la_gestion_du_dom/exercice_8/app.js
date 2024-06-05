const elements = document.querySelectorAll('li');

for (const element of elements) {
    element.addEventListener('click', function() {
        if (element.style.textDecoration === "none") {
            element.style.textDecoration = "line-through"; // Barrer le texte
        } else {
            element.style.textDecoration = "none"; // Débarrer le texte
        }
    });
}