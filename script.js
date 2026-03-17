// 1️⃣ Texto animado no header
const highlight = document.querySelector('.highlight');
setInterval(() => {
    highlight.style.opacity = highlight.style.opacity == 0 ? 1 : 0;
}, 800);

// 2️⃣ Scroll suave para links do menu
const menuLinks = document.querySelectorAll('nav a');
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// 3️⃣ Fade-in das seções ao rolar a página
const sections = document.querySelectorAll('section');

const fadeInOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom){
            section.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll); // Para carregar visível no início

// 4️⃣ Zoom nas imagens da galeria
const galeriaFotos = document.querySelectorAll('.foto-card img');

galeriaFotos.forEach(foto => {
    foto.addEventListener('mouseover', () => {
        foto.style.transform = 'scale(1.08)';
    });
    foto.addEventListener('mouseout', () => {
        foto.style.transform = 'scale(1)';
    });
});

// 5️⃣ Botão voltar ao topo
const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
