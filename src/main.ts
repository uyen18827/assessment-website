import './style.css'

let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');

hamburger!.addEventListener('click', () => {
    hamburger!.classList.toggle('isactive');
    menu!.classList.toggle('active');

});

// alert('heeeewwoo uwu')