export function appendElement(element, selector) {
    const content = document.querySelector(selector);
    content.appendChild(element);
}


export function createDiv (text, selector) {
    const div = document.createElement('div');
    div.textContent = text;
    div.classList.add(selector);
    return div
};

export function createImg(text, selector) {
    const div = document.createElement('img');
    div.src = text;
    div.classList.add(selector);
    return div
};

export function createBtn(text, selector) {
    const div = document.createElement('button');
    div.textContent = text;
    div.classList.add(selector);
    return div
};
