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
