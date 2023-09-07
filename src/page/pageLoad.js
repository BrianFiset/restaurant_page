import {default as loadHome} from './homepage.js';
import menuPage, {default as loadMenu} from './menuPage.js';

import {createDiv, appendElement, clearMainContent} from './functions.js';

function createNavbar() {
    const navbar = createDiv('', 'navbar');
    const homeText = createDiv('Home', 'text');
    const menuText = createDiv('Menu', 'text');
    const contactText = createDiv('Contact', 'text');
    const home = createDiv('', 'home');
    const menu = createDiv('', 'menu');
    const contact = createDiv('', 'contact');
    homeText.classList.add('active');
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

function changePage() {
    const navbar = document.querySelectorAll('.navbar .text');
    navbar.forEach(item => item.addEventListener('click', (e) => {
        clearMainContent();
        if (e.target.textContent === 'Home') {
            loadHome();
            addActive(e.target);
        } else if(e.target.textContent === 'Menu'){
            menuPage();
            addActive(e.target);
        };
    }));
    
}


export function menuBtn() {
    const menu = document.querySelector('.menu > .text');
    const btn = document.querySelector('.explore-btn');
    btn.addEventListener('click', () => {
        clearMainContent();
        menuPage();
        addActive(menu);
    })
}

function addActive(e) {
    const navbar = document.querySelectorAll('.navbar .text');
    navbar.forEach(item => item.classList.remove('active'));
    e.classList.add('active');
}

export default function loadPage() {
    createHeader();
    createMain();
    createFooter();
    menuPage();
    changePage();
}