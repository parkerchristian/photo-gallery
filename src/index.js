import createHtmlElement from '../src/create-html-element.js';
import images from '../data/images.js';

const imagesContainer = document.getElementById('images-container');

images.forEach((image) => {
    const template = document.createElement('template');
    template.innerHTML = createHtmlElement(image);
    const domGenerate = template.content;
    imagesContainer.appendChild(domGenerate);
}); 