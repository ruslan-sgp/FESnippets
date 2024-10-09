const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburger = document.querySelector('.menu');
const blackBox = document.querySelector('.blackBox');

hamburgerIcon.addEventListener('click', hamburgerClick);

function hamburgerClick() {
    hamburger.classList.toggle('active')
    blackBox.classList.toggle('hide')
    hamburgerIcon.classList.toggle('cross-icon')
}