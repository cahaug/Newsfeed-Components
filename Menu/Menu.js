
const toggleMenu = () => {
// Toggle the "menu--open" class on your menu refence. 
// TweenMax.from(".menu", 3, {x:-800})
menu.classList.toggle('menu--open');
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
console.log(menu);
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
console.log(menuButton);
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {toggleMenu();});
const slideIn = TweenMax.from(".menu", 3, {x:-800});
menuButton.addEventListener('click', () => {slideIn});
