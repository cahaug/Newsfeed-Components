
const toggleMenu = () => {
// Toggle the "menu--open" class on your menu refence. 
menu.classList.toggle('menu--open');
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
console.log(menuButton);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {toggleMenu(); TweenMax.from(".menu", 1, {x:-800}); TweenMax.to(".menu", 3, {x:0});});
// const slideIn = TweenMax.from(".menu", 3, {x:-800});
// menuButton.addEventListener('click', () => {slideIn});
