document.addEventListener('DOMContentLoaded', () => {
    // 1️⃣ Texto animado no header
    const highlight = document.querySelector('.highlight');

    // Melhorando a alternância da opacidade de forma eficiente
    const toggleOpacity = () => {
        highlight.classList.toggle('invisible'); // Toggle via CSS
    };

    setInterval(toggleOpacity, 800);

    // 2️⃣ Scroll suave para links do menu
    const menuLinks = document.querySelectorAll('nav a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 3️⃣ Fade-in das seções ao rolar a página
    const sections = document.querySelectorAll('section');

    // Função que adiciona a classe "visible" para fade-in
    const fadeInOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    };

    // Usando requestAnimationFrame para otimização durante o scroll
    const handleScroll = () => {
        fadeInOnScroll();
        requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', fadeInOnScroll); // Para carregar visível no início

    // 4️⃣ Zoom nas imagens da galeria
    const galeriaFotos = document.querySelectorAll('.foto-card img');

    galeriaFotos.forEach(foto => {
        foto.addEventListener('mouseover', () => foto.classList.add('zoom'));
        foto.addEventListener('mouseout', () => foto.classList.remove('zoom'));
    });

    // 5️⃣ Botão voltar ao topo
    const btnTopo = document.getElementById('btnTopo');

    // Mostrar/Esconder botão baseado na rolagem
    const toggleBtnTopoVisibility = () => {
        if (window.scrollY > 300) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    };

    // Função para voltar ao topo suavemente
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', toggleBtnTopoVisibility);
    btnTopo.addEventListener('click', scrollToTop);
});
