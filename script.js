function showContent(id) {
  // Esconde todas as seções
  const sections = document.querySelectorAll('.content');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Mostra a seção selecionada
  const activeSection = document.getElementById(id);
  activeSection.classList.add('active');
}

// Carrossel (Galeria)
const carouselItems = document.querySelectorAll('.carousel-item');
let currentItem = 0;

function moveCarousel() {
  carouselItems[currentItem].classList.remove('active');
  currentItem = (currentItem + 1) % carouselItems.length;
  carouselItems[currentItem].classList.add('active');
}

setInterval(moveCarousel, 3000); // Muda a imagem a cada 3 segundos
