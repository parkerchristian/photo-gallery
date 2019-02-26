function makeHtmlTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML = `
    <li>
        ${image.title}
        <img src="${image.url}">
    </li>
    `;
    return template.content;
}

export default makeHtmlTemplate;