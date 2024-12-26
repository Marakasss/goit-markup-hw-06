// Елементи
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const burgerBtn = document.getElementById('burger-btn');

// Відкрити меню
const openMenu = () => {
  mobileMenu.classList.add('is-open');
};

// Закрити меню
const closeMenu = () => {
  mobileMenu.classList.add('is-closing');
  setTimeout(() => {
    mobileMenu.classList.remove('is-open', 'is-closing');
  }, 300); // Час відповідає transition у CSS
};

// Свайп для закриття
let startX = 0; // Початкова координата свайпу

const handleTouchStart = (e) => {
  startX = e.touches[0].clientX; // Початкова точка дотику
};

const handleTouchMove = (e) => {
  const touchX = e.touches[0].clientX;
  const swipeDistance = touchX - startX;

  // Якщо свайп вправо на 50px або більше
  if (swipeDistance > 50) {
    closeMenu();
  }
};

// Події
burgerBtn.addEventListener('click', openMenu); // Кнопка відкриття
closeMenuBtn.addEventListener('click', closeMenu); // Кнопка закриття
mobileMenu.addEventListener('touchstart', handleTouchStart); // Початок свайпу
mobileMenu.addEventListener('touchmove', handleTouchMove); // Рух свайпу
