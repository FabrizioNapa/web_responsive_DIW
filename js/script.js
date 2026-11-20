//Aquí vamos ha hacer un java script sencillo solo para el menu desplegable

// Abre y cierra el <nav id="menu-lista"> añadiendo/quitando la clase "nav--abierto"

const boton = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu-lista');

// Abre o cierra el menú y mantiene sincronizados los atributos de accesibilidad
function cambiarMenu(abrir) {
  menu.classList.toggle('nav--abierto', abrir);
  boton.setAttribute('aria-expanded', abrir);
  boton.setAttribute('aria-label', abrir ? 'Cerrar menú' : 'Abrir menú');
  boton.textContent = abrir ? '✕' : '☰';
}

// 1. Clic en el botón: alterna entre abierto y cerrado
boton.addEventListener('click', function () {
  const estaAbierto = menu.classList.contains('nav--abierto');
  cambiarMenu(!estaAbierto);
});

// 2. Clic en un enlace del menú: se cierra
menu.querySelectorAll('a').forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    cambiarMenu(false);
  });
});

// 3. Tecla Escape: se cierra y el foco vuelve al botón
document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape' && menu.classList.contains('nav--abierto')) {
    cambiarMenu(false);
    boton.focus();
  }
});

// 4. Al pasar a pantalla de escritorio (≥ 1024px) el nav ya se ve solo: se cierra el desplegable
window.matchMedia('(min-width: 1024px)').addEventListener('change', function (evento) {
  if (evento.matches) {
    cambiarMenu(false);
  }
});