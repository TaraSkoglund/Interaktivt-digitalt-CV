window.addEventListener('DOMContentLoaded', main)

function main () {
    burgerMenuOnClick();
}

function burgerMenuOnClick(){
    const burgerMenuButton = document.getElementById('burger-menu');
    burgerMenuButton.onclick = toggeleMenu;

    const listItems = document.querySelectorAll('nav li');
    for (const li of listItems) {
        li.addEventListener('click', toggeleMenu);
    }
}

function toggeleMenu(){
    const header = document.querySelector('header');
    header.classList.toggle('open');
}