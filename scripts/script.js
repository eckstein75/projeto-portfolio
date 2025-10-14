document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('botao-tema');
  const body = document.body;

  // Persistência do tema
  const temasalvo = localStorage.getItem('tema');
  temaEscuro(temasalvo === 'escuro');

  function temaEscuro(ativo) {
    if (ativo) {
      body.classList.add('escuro');
      botao.textContent = '☀️'; // Sol = tema claro
    } else {
      body.classList.remove('escuro');
      botao.textContent = '🌙'; // Lua = tema escuro
    }
  }

  if (botao) {
    botao.addEventListener('click', () => {
      const isescuro = body.classList.toggle('escuro');
      temaEscuro(isescuro);
      localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
    });
  }

  // Scroll suave
  const navLinks = document.querySelectorAll('#menu ul a.link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
