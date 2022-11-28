window.addEventListener('DOMContentLoaded', main)

function main () {
    burgerMenuOnClick();
    // scrollHeader();
    scrollTop();
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

// function scrollHeader(){
//     const header = document.getElementById('header')
//     if(this.scrollY >= 200) header.classList.add('scroll-header');
//     else header.classList.remove('sceoll-header');
// }

// window.addEventListener('scroll', scrollHeader)

function scrollTop (){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 540) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)