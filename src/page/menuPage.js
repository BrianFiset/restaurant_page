import { createDiv , appendElement, createImg , createBtn} from "./functions.js";
import Brownies from '../images/brownie.png';
import Burger from '../images/burger.png';
import Cookies from '../images/cookies.png';
import Hotdog from '../images/hotdog.png';
import Smoothie from '../images/smoothie.png';
import Pizza from '../images/pizza.png';

function addTitle() {
    const title = createDiv('Menu', 'menu');
    appendElement(title, '.content');
};

function createMenuItem(image,title,price, description) {
    const img = createDiv('', 'img');
    img.style.backgroundImage = `url(${image})`;
    const titleText = createDiv(title, 'title');
    const priceText = createDiv(price, 'price');
    const textContainer = createDiv('', 'info');
    textContainer.appendChild(titleText);
    textContainer.appendChild(priceText);
    const descriptionText = createDiv(description, 'description');
    const container = createDiv('', 'menu-item');
    container.appendChild(img);
    container.appendChild(textContainer);
    container.appendChild(descriptionText);
    return container
};


function addMenu() {
    const container = createDiv('','menu-items');
    const item5 = createMenuItem(Brownies,'Weed Brownies', '6.99', 'Weed, chocolate, flour, sugar, butter, and our secret cannabis blend.');
    const item2 = createMenuItem(Burger,'Weed Burger', '11.99', 'Buns, patty, lettuce, onions, tomato, and our secret weed-infused sauce.');
    const item4 = createMenuItem(Cookies,'Weed Chocolate Chip Cookies', '4.20', 'Chips, dough, cannabis, sugar, butter, and our secret cookie blend.');
    const item3 = createMenuItem(Hotdog,'Weed Hotdog', '7.99', 'Bun, sausage, onions, mustard, ketchup, and our secret weed-infused relish.');
    const item6 = createMenuItem(Smoothie,'Weed Smoothie', '3.99', 'Fruit blend, yogurt, cannabis, honey, and our secret smoothie twist.');
    const item1 = createMenuItem(Pizza,'Weed Pizza', '14.99', 'Dough, sauce, cheese, toppings, cannabis, and our secret pizza magic.');
    container.appendChild(item1);
    container.appendChild(item2);
    container.appendChild(item3);
    container.appendChild(item4);
    container.appendChild(item5);
    container.appendChild(item6);
    appendElement(container,'.content');
};

export default function() {
    addTitle();
    addMenu()
};