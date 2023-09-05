function appendToBody(element) {
    const content = document.querySelector('#content');
    content.appendChild(element);
}

function createDiv (text, selector) {
    const div = document.createElement('div');
    div.textContent = text;
    div.classList.add(selector);
    return div
};

function createNavbar() {
    const navbar = createDiv('', 'navbar');
    const home = createDiv('Home', 'home');
    const menu = createDiv('Menu', 'menu');
    const contact = createDiv('Contact', 'contact');
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    return navbar

};

function createHeader () {
    const header = createDiv('', 'header');
    const title = createDiv(`Paul's Restaurant`, 'title');
    const navbar = createNavbar();

    header.appendChild(title);
    header.appendChild(navbar);
    appendToBody(header);
};

function createMain() {
    const main = createDiv('', 'main');
    const mainContent = createDiv('', 'content');
    main.appendChild(mainContent);
    appendToBody(main);
};

function createFooter() {
    const footer = createDiv('', 'footer');
    const copyright = createDiv('Copyright © 2023', 'copyright');
    footer.appendChild(copyright);
    appendToBody(footer);
};

export default function loadPage() {
    createHeader();
    createMain();
    createFooter();
}