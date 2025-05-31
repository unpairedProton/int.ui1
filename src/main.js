// hamburger menu stuff
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
let isMenuOpen = false;

// toggle menu when clicked
hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  
  isMenuOpen = !isMenuOpen;
  if (isMenuOpen) {
    navMenu.style.right = '0';
    hamburger.classList.add('active');
  } else {
    navMenu.style.right = '-100%';
    hamburger.classList.remove('active');
  }
  console.log('hamburger clicked', isMenuOpen);
});

// close menu when clicking outside - better UX
document.addEventListener('click', (e) => {
  if (isMenuOpen && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.style.right = '-100%';
    hamburger.classList.remove('active');
    isMenuOpen = false;
    console.log('clicked outside');
  }
});

// handle window resize - fixes menu on big screens
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) { // 768px is the md breakpoint in Tailwind
    navMenu.style.right = '0';
    isMenuOpen = false;
    hamburger.classList.remove('active');
  } else {
    navMenu.style.right = '-100%';
  }
});

// navbar scroll behavier - hide on scroll down
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  // only trigger if scrolled more than 5px - prevents tiny scrolls
  if (Math.abs(scrollTop - lastScrollTop) > 5) {
    if (scrollTop > lastScrollTop) {
      // scrolling down - hide navbar
      header.style.transform = 'translateY(-100%)';
    } else {
      // scrolling up - show navbar
      header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
  }
});

// add smooth transition - looks better
header.style.transition = 'transform 0.3s ease-in-out';
