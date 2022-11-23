window.addEventListener('DOMContentLoaded', main)

function main () {
    burgerMenuOnClick();
}

function burgerMenuOnClick(){
    const burgerMenuButton = document.getElementById('burger-menu');
    burgerMenuButton.onclick = toggeleMenu;
}

function toggeleMenu(){
    const header = document.querySelector('header');
    header.classList.toggle('open');
}