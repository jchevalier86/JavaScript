function createTag(tagName, content) {
    const element = document.createElement(tagName);
    element.textContent = content;
    return element;
}

const elementHTML = createTag('div', 'bonjour le monde');
// retourn une div qui contient le texte 'bonjour le monde'
document.body.appendChild(elementHTML);