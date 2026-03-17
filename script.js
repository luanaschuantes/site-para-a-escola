// 1️⃣ Texto piscante no header
const highlight = document.querySelector('.highlight');
setInterval(() => {
    highlight.style.opacity = highlight.style.opacity == 0 ? 1 : 0;
}, 800);

// 2️⃣ Scroll suave para links do menu
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita o comportamento padrão
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// 3️⃣ Zoom nas imagens da galeria (extra)
const galeriaFotos = document.querySelectorAll('.foto-card img');

galeriaFotos.forEach(foto => {
    foto.addEventListener('mouseover', () => {
        foto.style.transform = 'scale(1.08)';
    });
    foto.addEventListener('mouseout', () => {
        foto.style.transform = 'scale(1)';
    });
});

// 4️⃣ Botão voltar ao topo
const btnTopo = document.createElement('button');
btnTopo.innerText = "⬆ Topo";
btnTopo.id = "btnTopo";
document.body.appendChild(btnTopo);

btnTopo.style.position = "fixed";
btnTopo.style.bottom = "20px";
btnTopo.style.right = "20px";
btnTopo.style.padding = "10px 15px";
btnTopo.style.backgroundColor = "#ff416c";
btnTopo.style.color = "white";
btnTopo.style.border = "none";
btnTopo.style.borderRadius = "8px";
btnTopo.style.cursor = "pointer";
btnTopo.style.display = "none";
btnTopo.style.zIndex = "1000";

// Mostrar botão ao rolar a página
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

// Função do botão voltar ao topo
btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
