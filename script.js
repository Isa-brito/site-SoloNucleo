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

// Revela seções ao rolar
function revelarAoRolar() {
  const elementos = document.querySelectorAll('.reveal');
  const alturaJanela = window.innerHeight;

   elementos.forEach(el => {
    const rect = el.getBoundingClientRect();
    const topo = rect.top;
    const fundo = rect.bottom;
    const margem = 100;})
   }

