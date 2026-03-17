// Texto piscante no header
const highlight = document.querySelector('.highlight');

setInterval(() => {
  highlight.style.opacity = highlight.style.opacity == 0 ? 1 : 0;
}, 800);
