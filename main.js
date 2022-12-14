window.addEventListener('DOMContentLoaded', main)

/** Start of the program */
function main () {
    burgerMenuOnClick();
    scrollTop();
}
/** acess nav from burger menu */
function burgerMenuOnClick(){
    const burgerMenuButton = document.getElementById('burger-menu');
    burgerMenuButton.onclick = toggeleMenu;

    const listItems = document.querySelectorAll('nav li');
    for (const li of listItems) {
        li.addEventListener('click', toggeleMenu);
    }
}
/** cntrols header when open */
function toggeleMenu(){
    const header = document.querySelector('header');
    header.classList.toggle('open');
}
/** Declare Varialbles  */
let className = "inverted";
let scrollTrigger = 60;
/** adds scroll to top button and background to heder after scroll */
function scrollTop (){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 540) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')

    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.getElementsByTagName("header")[0].classList.add(className);
      } else {
        document.getElementsByTagName("header")[0].classList.remove(className);
      }
}

window.addEventListener('scroll', scrollTop)