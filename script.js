// 1. PARALLAX EFFECT FOR HERO IMAGE
// Moves the profile picture slightly slower than scroll to create depth
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const squircle = document.querySelector('.squircle-frame');
  // Only animate if we are near the top to save performance
  if (scrolled < 800 && squircle) {
      squircle.style.transform = `translateY(${scrolled * 0.15}px) rotate(-3deg)`;
  }
});

// 2. STAGGERED SCROLL ANIMATION
// Defines the observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show-up');
          observer.unobserve(entry.target); // Only animate once
      }
  });
}, observerOptions);

// 3. APPLY ANIMATIONS DYNAMICALLY
// This finds specific elements and applies the hidden class + staggered delays
const elementsToAnimate = [
  { selector: '#hero h1', delay: '0s' },
  { selector: '#hero .role', delay: '0.1s' },
  { selector: '#hero .status-badge', delay: '0.2s' },
  { selector: '#hero .hero-cta', delay: '0.3s' },
  { selector: '.squircle-frame', delay: '0.2s' }, // Hero Image
  { selector: '.section-title', delay: '0s' },
  { selector: '.about-grid > div', delay: '0.1s' },
  { selector: '.skill-card', delay: 'stagger' }, // Special 'stagger' logic
  { selector: '.project-card', delay: '0s' },
  { selector: '.footer-main h2', delay: '0s' }
];

elementsToAnimate.forEach(item => {
  const elements = document.querySelectorAll(item.selector);
  elements.forEach((el, index) => {
      el.classList.add('hidden-up');
      
      // Calculate delay
      let delay = item.delay;
      if (item.delay === 'stagger') {
          delay = `${index * 0.1}s`; // 0s, 0.1s, 0.2s...
      }
      
      el.style.transitionDelay = delay;
      observer.observe(el);
  });
});
