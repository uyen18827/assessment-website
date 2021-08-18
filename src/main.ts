import './style.css'

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');

hamburger!.addEventListener('click', () => {
    menu!.classList.toggle('active');
});