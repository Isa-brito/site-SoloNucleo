// Seleciona o botão do menu e o menu de navegação
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Abre e fecha o menu no celular
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Fecha o menu quando o usuário clicar em algum link
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});


// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));