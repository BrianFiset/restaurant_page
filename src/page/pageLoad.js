import {default as loadHome} from './homepage.js';

import {createDiv, appendElement} from './functions.js';

function createNavbar() {
    const navbar = createDiv('', 'navbar');
    const homeText = createDiv('Home', 'text');
    const menuText = createDiv('Menu', 'text');
    const contactText = createDiv('Contact', 'text');
    const home = createDiv('', 'home');
    const menu = createDiv('', 'menu');
    const contact = createDiv('', 'contact');
    home.appendChild(homeText);
    menu.appendChild(menuText);
    contact.appendChild(contactText);
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    return navbar

};

function createHeader () {
    const header = createDiv('', 'header');
    const navbar = createNavbar();

    header.appendChild(navbar);
    appendElement(header, '#content');
};

function createMain() {
    const main = createDiv('', 'main');
    const mainContent = createDiv('', 'content');
    main.appendChild(mainContent);
    appendElement(main, '#content');
};

function createFooter() {
    const footer = createDiv('', 'footer');
    const copyright = createDiv(`Copyright © 2023 Paul's Restaurant`, 'copyright');
    footer.appendChild(copyright);
    appendElement(footer, '#content');
};

export default function loadPage() {
    createHeader();
    createMain();
    createFooter();
    loadHome();
}