/* ============================================================
   Vilma Aires · Podologia em domicílio — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  const WHATSAPP = '5562985585102';

  /* ── HEADER: borda ao rolar ── */
  const header = document.querySelector('.site-header');
  const waFloat = document.getElementById('wa-float');
  const form = document.getElementById('agendar');

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── BOTÃO FLUTUANTE: aparece só quando o formulário sai da tela ── */
  if (waFloat && form && 'IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      const passed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      waFloat.classList.toggle('show', passed);
    }).observe(form);
  } else if (waFloat) {
    waFloat.classList.add('show');
  }

  /* ── AGENDAMENTO: monta a mensagem do WhatsApp ── */
  const bubble = document.getElementById('mensagem');
  const send = document.getElementById('enviar');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const value = (name) => {
    const el = form.querySelector(`[name="${name}"]:checked`);
    return el ? el.value : '';
  };

  const buildMessage = () => {
    const quem = value('quem') === 'familiar'
      ? 'para um familiar'
      : 'para mim';
    const servico = value('servico');
    const periodo = value('periodo');
    const bairro = form.bairro.value.trim();

    const lines = [
      `Olá, Vilma! Gostaria de agendar uma visita de podologia ${quem}.`,
      `Cuidado: ${servico}`,
      `Melhor período: ${periodo}`,
    ];
    if (bairro) lines.push(`Bairro: ${bairro}`);
    return lines.join('\n');
  };

  let last = '';
  const update = (animate = true) => {
    const text = buildMessage();
    if (text === last) return;
    bubble.textContent = text;
    send.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
    if (last && animate && !reduceMotion) {
      bubble.classList.remove('changed');
      void bubble.offsetWidth;
      bubble.classList.add('changed');
    }
    last = text;
  };

  if (form && bubble && send) {
    update();
    let typing;
    form.addEventListener('change', () => update());
    form.bairro.addEventListener('input', () => {
      clearTimeout(typing);
      typing = setTimeout(() => update(false), 400);
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      send.click();
    });
  }

  /* ── "Agendar para um familiar" pré-seleciona a opção ── */
  document.querySelectorAll('[data-quem]').forEach((link) => {
    link.addEventListener('click', () => {
      const radio = form.querySelector(`[name="quem"][value="${link.dataset.quem}"]`);
      if (radio) {
        radio.checked = true;
        update();
      }
    });
  });

  /* ── ÂNCORAS: compensa o cabeçalho fixo ── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = header ? header.offsetHeight + 12 : 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
      if (id === '#agendar') {
        const first = form.querySelector('input:checked') || form.querySelector('input');
        if (first) first.focus({ preventScroll: true });
      }
    });
  });

});
