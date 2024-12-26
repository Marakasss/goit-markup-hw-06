// Елементи
const mobileMenu = document.getElementById('mobile-menu');
const burgerBtn = document.getElementById('burger-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const menuContainer = document.getElementById('menu-container');

// Функція відкриття меню
const openMenu = () => {
  mobileMenu.classList.add('is-open');
};

// Функція закриття меню
const closeMenu = () => {
  mobileMenu.classList.add('is-closing');
  setTimeout(() => {
    mobileMenu.classList.remove('is-open', 'is-closing');
  }, 300); // Час відповідає transition у CSS
};

// Свайп для закриття
let startX = 0;

const handleTouchStart = (e) => {
  startX = e.touches[0].clientX; // Початкова координата свайпу
};

const handleTouchMove = (e) => {
  const touchX = e.touches[0].clientX; // Поточна координата свайпу
  const swipeDistance = touchX - startX; // Відстань свайпу

  if (swipeDistance > 50) { // Якщо свайп вправо більше 50px
    closeMenu();
  }
};

// Події
burgerBtn.addEventListener('click', openMenu); // Відкрити меню
closeMenuBtn.addEventListener('click', closeMenu); // Закрити меню
mobileMenu.addEventListener('touchstart', handleTouchStart); // Початок свайпу
mobileMenu.addEventListener('touchmove', handleTouchMove); // Рух свайпу
