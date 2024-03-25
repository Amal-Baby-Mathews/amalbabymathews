document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector('.fancy-cursor');
const body = document.querySelector('body');
let prevX = 0;
let prevY = 0;
if (cursor) {
  // Your existing cursor code here

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    console.log("Cursor moved")
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
});
