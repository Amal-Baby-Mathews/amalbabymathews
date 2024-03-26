document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector('.fancy-cursor');
const body = document.querySelector('body');
let prevX = 0;
let prevY = 0;
if (cursor) {
  // Your existing cursor code here

document.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;
    // Update cursor position
    cursor.style.left = `${x - 15}px`;
    cursor.style.top = `${y - 15}px`;
  
    // Create trail squares 
    if (Math.abs(x - prevX) > 10 || Math.abs(y - prevY) > 10) {
      const trail = document.createElement('div');
      trail.classList.add('trail');
      trail.style.left = `${x - 5}px`;
      trail.style.top = `${y - 5}px`;
      body.appendChild(trail);
    }
  
    prevX = x;
    prevY = y;
  });

} else {
  console.log('Cursor element not found.');
}
document.addEventListener('mousedown', () => {
    cursor.classList.add('hover');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('hover');
});

function debounce(func, wait) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

let prevScrollPos = window.pageYOffset;

function handleScroll() {
  const currentScrollPos = window.pageYOffset;
  const fadeInElements = document.querySelectorAll('.fade-in');

  if (currentScrollPos > prevScrollPos) {
    // Scrolling down
    fadeInElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const isVisible = (elementTop < window.innerHeight && elementBottom >= 0);

      if (isVisible) {
        element.classList.add('content-large');
      } else {
        element.classList.remove('content-large');
      }
    });
  } else {
    // Scrolling up
    fadeInElements.forEach((element) => {
      element.classList.remove('content-large');
    });
  }

  prevScrollPos = currentScrollPos;
}

const debouncedScroll = debounce(handleScroll, 100);

document.addEventListener('scroll', debouncedScroll);

});
