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

function checkContentHeight() {
  const content = document.querySelector('.fade-in');
  if (!content) {
    console.error('No element with the class fade-in found');
    return;
  }
  const contentHeight = content.scrollHeight;
  const windowHeight = window.innerHeight;
  if (contentHeight > windowHeight+10) {
    console.log('Content is tall');
    document.body.classList.add('content-large');
  } else {
    document.body.classList.remove('content-large');
  }
}
  
  // Execute checkContentHeight() on initial load
  window.addEventListener('DOMContentLoaded', checkContentHeight);
  
  // Execute checkContentHeight() when the window is resized
  window.addEventListener('resize', checkContentHeight);
  
  // Execute checkContentHeight() when the page is scrolled
  window.addEventListener('scroll', checkContentHeight);
});
