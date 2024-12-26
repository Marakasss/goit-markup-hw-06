// Elements
const mobileMenu = document.getElementById('mobile-menu');
const burgerBtn = document.getElementById('burger-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const menuContainer = document.getElementById('menu-container');

// Close function
const openMenu = () => {
  mobileMenu.classList.add('is-open');
};


const closeMenu = () => {
  mobileMenu.classList.add('is-closing');
  setTimeout(() => {
    mobileMenu.classList.remove('is-open', 'is-closing');
  }, 300); 
};

// Swipe
let startX = 0;

const handleTouchStart = (e) => {
  startX = e.touches[0].clientX; 
};

const handleTouchMove = (e) => {
  const touchX = e.touches[0].clientX; 
  const swipeDistance = touchX - startX; 

  if (swipeDistance > 50) { 
    closeMenu();
  }
};

ї
burgerBtn.addEventListener('click', openMenu); 
closeMenuBtn.addEventListener('click', closeMenu); 
mobileMenu.addEventListener('touchstart', handleTouchStart); 
mobileMenu.addEventListener('touchmove', handleTouchMove); 