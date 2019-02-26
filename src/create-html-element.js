function createHtmlElement(image) {
    return `
        <li>
        ${image.title}
        <img src="${image.url}">
        </li>
        `;
}

export default createHtmlElement;