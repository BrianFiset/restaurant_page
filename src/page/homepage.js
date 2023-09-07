import { createDiv , appendElement, createImg , createBtn} from "./functions.js";
import { menuBtn } from "./pageLoad.js";
import Img from '../images/owner.jpeg';
import Brownies from '../images/brownie-marihuana-hierba-scaled.jpg';
import Cookies from '../images/cookies.jpg';
import Burger from '../images/burger.jpeg';

function createTopSection() {
    const topSection = createDiv('', 'top-section');
    const title = createDiv(`Welcome to Paul's Restaurant`, 'title');
    const subheading = createDiv('Savor Unforgettable Moments', 'subheading');
    const imgContainer = createDiv('','image-container');
    const img = createImg(Img, 'main-img');

    imgContainer.appendChild(img);
    topSection.appendChild(title);
    topSection.appendChild(subheading);
    topSection.appendChild(imgContainer);
    appendElement(topSection, '.main > .content');
};

function createDisplayFood(img,title,subheading) {
    const imgContainer = createDiv('', 'food-container');
    const titleDiv = createDiv(title, 'title');
    const imgDiv = createDiv('', 'img-container')
    const subheadingDiv = createDiv(subheading, 'subheading');
    imgDiv.style.backgroundImage = `url(${img})`
    imgContainer.appendChild(imgDiv);
    imgContainer.appendChild(titleDiv);
    imgContainer.appendChild(subheadingDiv);
    return imgContainer
};

function createMiddleSection() {
    const middleSection = createDiv('', 'middle-section');
    const title = createDiv(`Taste the Extraordinary`, 'title');
    const subheading = createDiv('Our Culinary Masterpieces Await You', 'subheading');
    const btn = createBtn('Explore Our Menu', 'explore-btn');
    const displayFood = createDiv('','display-food');
    const food1 = createDisplayFood(Brownies, 'Weed Brownies','Experience a Culinary High with Our Cannabis-Infused Dessert');
    const food2 = createDisplayFood(Cookies, 'Weed Cookies','Satisfy Your Sweet Tooth with Our Homemade Cannabis-Infused Treats');
    const food3 = createDisplayFood(Burger, 'Sizzling Weed Burger','Grill, Chill, and Elevate Your Burger Game with Cannabis-Infused Goodness');

    displayFood.appendChild(food1);
    displayFood.appendChild(food2);
    displayFood.appendChild(food3);
    middleSection.appendChild(title);
    middleSection.appendChild(subheading);
    middleSection.appendChild(displayFood);
    middleSection.appendChild(btn);
    appendElement(middleSection, '.main > .content');
};

export default function loadHome() {
    createTopSection();
    createMiddleSection();
    menuBtn();
};