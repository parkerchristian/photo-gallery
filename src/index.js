import makeHtmlTemplate from '../src/create-html-element.js';
import images from '../data/images.js';

const imagesContainer = document.getElementById('images-container');

images.forEach((image) => {
    const domGenerator = makeHtmlTemplate(image);
    imagesContainer.appendChild(domGenerator);
});