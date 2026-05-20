/* ══════════════════════════════════════════════════
   script.js — Portfolio Carlos Esteban Ramírez Leal
══════════════════════════════════════════════════ */
 
// ─── SKILL DATA ────────────────────────────────────
const skillData = {
  js: {
    title: 'JavaScript',
    category: 'Lenguaje de programación · Frontend & Backend',
    desc: 'JavaScript es el lenguaje de programación universal de la web. Permite crear lógica dinámica tanto en el navegador (DOM, eventos, animaciones) como en el servidor con Node.js. Es asíncrono por naturaleza (Promises, async/await) y tiene un ecosistema enorme. Es la base de todo mi stack.',
    tags: ['ES2024+', 'Async/Await', 'DOM', 'JSON', 'REST APIs'],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#F7DF1E"/><path d="M6.5 17.5c.4.7 1 1.2 2 1.2 1.1 0 1.8-.55 1.8-1.55V11h-1.8v6.1c0 .4-.2.6-.5.6-.3 0-.5-.2-.7-.5l-.8.8zm5.5-.2c.5.9 1.3 1.4 2.5 1.4 1.3 0 2.3-.7 2.3-1.9 0-1.1-.7-1.6-1.8-2.1l-.4-.2c-.5-.2-.7-.4-.7-.7 0-.3.2-.5.6-.5.3 0 .6.1.8.5l1-.6c-.4-.8-1.1-1.1-1.8-1.1-1.2 0-1.9.7-1.9 1.7 0 1.1.7 1.6 1.6 2l.4.2c.6.3.9.5.9.8 0 .3-.3.6-.8.6-.5 0-.9-.3-1.1-.7l-1.1.6z" fill="#000"/></svg>`,
  },
  html: {
    title: 'HTML5',
    category: 'Lenguaje de marcado · Frontend',
    desc: 'HTML5 es el esqueleto de toda página web. Define la estructura semántica del contenido: encabezados, párrafos, formularios, multimedia y más. Con HTML5 se añadieron APIs nativas como Canvas, Web Storage, Geolocation y elementos semánticos como <section>, <article> y <header>, permitiendo webs más accesibles e indexables.',
    tags: ['Semántica', 'Accesibilidad', 'Canvas', 'Forms', 'Web APIs'],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#E34F26"/><path d="M4 3l1.5 17L12 22l6.5-2L20 3H4zm13.2 5.5H8.5l.2 2.2h8.3l-.7 7-4.3 1.2-4.3-1.2-.3-3.3h2.2l.1 1.5 2.3.6 2.3-.6.2-2.5H7.7L7.2 8.5h9.2l-.2-1.4H7.2L6.8 5h10.6l-.2 3.5z" fill="#fff"/></svg>`,
  },
  css: {
    title: 'CSS3',
    category: 'Hoja de estilos · Frontend',
    desc: 'CSS3 es el lenguaje de presentación visual de la web. Con él controlo colores, tipografía, layouts (Flexbox, Grid), animaciones, responsive design y efectos visuales complejos. Domino técnicas avanzadas como variables CSS, pseudo-elementos, media queries y transiciones suaves que elevan la experiencia de usuario.',
    tags: ['Flexbox', 'Grid', 'Animaciones', 'Variables', 'Responsive'],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#1572B6"/><path d="M4 3l1.5 17L12 22l6.5-2L20 3H4zm9 15.4l-3.6-1-.2-2.7h1.9l.1 1.2 1.8.5 1.8-.5.2-2.3-7.8-2v-2.1l7.7-2.1.2-2.1H7.3l-.2-2.3h9.8l-.6 6.7-4.3 1.2-4.3-1.2-.1 1 4.4 1.1 4.4-1.1-.3 4.2-4 1.1z" fill="#fff"/></svg>`,
  },
  node: {
    title: 'Node.js',
    category: 'Runtime · Backend',
    desc: 'Node.js lleva JavaScript al servidor. Es asíncrono, basado en eventos y altamente eficiente para aplicaciones I/O intensivas como APIs REST, servidores en tiempo real y microservicios. Mi entorno principal para el desarrollo backend: puedo construir desde scripts simples hasta APIs robustas con autenticación, middleware y conexión a bases de datos.',
    tags: ['Runtime', 'NPM', 'Streams', 'Event Loop', 'HTTP Server'],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#339933"/><path d="M12 3L4 7.5v9L12 21l8-4.5v-9L12 3zm5.5 12.5L12 18.7l-5.5-3.2V8.5L12 5.3l5.5 3.2v7z" fill="#fff"/></svg>`,
  },
  express: {
    title: 'Express.js',
    category: 'Framework · Backend / Node.js',
    desc: 'Express es el framework web minimalista de Node.js. Con él construyo APIs RESTful, manejo rutas, middlewares, autenticación y conexión a bases de datos de forma rápida y estructurada. Su simplicidad lo convierte en la columna vertebral de mis backends: desde endpoints simples hasta arquitecturas MVC completas.',
    tags: ['REST API', 'Middleware', 'Routing', 'MVC', 'JWT'],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#fff" fill-opacity=".08" stroke="rgba(255,255,255,.2)" stroke-width="1"/><text x="4" y="16" font-size="9" font-family="monospace" fill="#fff" font-weight="700">EX</text></svg>`,
  },
  sql: {
    title: 'SQL',
    category: 'Base de datos · Relacional',
    desc: 'SQL (Structured Query Language) es el lenguaje estándar para gestionar bases de datos relacionales como MySQL y PostgreSQL. Diseño esquemas normalizados, escribo consultas complejas con JOINs, subqueries, índices y stored procedures. Garantizo integridad referencial y rendimiento óptimo en mis modelos de datos.',
    tags: ['MySQL', 'PostgreSQL', 'JOINs', 'Indices', 'Transacciones'],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#4479A1"/><ellipse cx="12" cy="8" rx="6" ry="2.5" fill="#fff" fill-opacity=".9"/><path d="M6 8v4c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5V8" stroke="#fff" stroke-width="1.2" fill="none"/><path d="M6 12v4c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-4" stroke="#fff" stroke-width="1.2" fill="none"/></svg>`,
  },
  php: {
    title: 'PHP',
    category: 'Lenguaje · Backend / Web Server',
    desc: 'PHP es uno de los lenguajes de backend más utilizados del mundo, responsable de plataformas como WordPress, Laravel y Symfony. Permita crear aplicaciones web dinámicas con acceso a bases de datos, manejo de sesiones, autenticación y generación de HTML en el servidor. Lo uso para proyectos donde se requiere integración con CMSs o entornos LAMP.',
    tags: ['PHP 8+', 'MySQL', 'Laravel', 'Sessions', 'CRUD'],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#777BB4"/><ellipse cx="12" cy="12" rx="8" ry="4.5" fill="#fff" fill-opacity=".15"/><text x="6" y="15.5" font-size="8" font-family="monospace" fill="#fff" font-weight="700">PHP</text></svg>`,
  },
  mongo: {
    title: 'MongoDB',
    category: 'Base de datos · NoSQL / Documentos',
    desc: 'MongoDB es una base de datos NoSQL orientada a documentos JSON. Es ideal para datos no estructurados o con esquemas flexibles: catálogos, perfiles de usuario, contenido dinámico. Lo integro con Node.js usando Mongoose para modelado de datos, validaciones y consultas eficientes. Perfecto para aplicaciones que necesitan escalar horizontalmente.',
    tags: ['NoSQL', 'Mongoose', 'Aggregation', 'Atlas', 'BSON'],
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="3" fill="#47A248"/><path d="M12 3c0 0-4 5.5-4 9.5a4 4 0 008 0C16 8.5 12 3 12 3z" fill="#fff" fill-opacity=".9"/><path d="M12 3v15" stroke="#fff" stroke-width="1.5" stroke-opacity=".6"/></svg>`,
  },
};
 
// ─── SCROLL OBSERVER ───────────────────────────────
const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
};
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);
 
document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
  observer.observe(el);
});
 
// ─── NAVBAR ────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
 
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
 
// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});
 
// Sticky header opacity
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    header.style.background = 'rgba(0,0,0,0.95)';
  } else {
    header.style.background = 'rgba(0,0,0,0.75)';
  }
}, { passive: true });
 
// ─── SKILL MODAL ───────────────────────────────────
const modal        = document.getElementById('skillModal');
const modalTitle   = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDesc    = document.getElementById('modalDesc');
const modalIcon    = document.getElementById('modalIcon');
const modalTags    = document.getElementById('modalTags');
const modalClose   = document.getElementById('modalClose');
 
function openSkillModal(skillKey) {
  const skill = skillData[skillKey];
  if (!skill) return;
 
  modalTitle.textContent    = skill.title;
  modalCategory.textContent = skill.category;
  modalDesc.textContent     = skill.desc;
  modalIcon.innerHTML       = skill.iconSvg;
 
  modalTags.innerHTML = '';
  skill.tags.forEach(tag => {
    const span = document.createElement('span');
    span.className = 'modal-tag';
    span.textContent = tag;
    modalTags.appendChild(span);
  });
 
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}
 
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('click', () => openSkillModal(card.dataset.skill));
  // Keyboard accessibility
  card.setAttribute('tabindex', '0');
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openSkillModal(card.dataset.skill);
    }
  });
});
 
modalClose.addEventListener('click', closeModal);
 
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
 
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
 
// ─── SMOOTH SCROLL with offset ──────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
 
// ─── ACTIVE NAV HIGHLIGHT ───────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');
 
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.4 });
 
sections.forEach(s => sectionObserver.observe(s));
 
// CSS for active nav
const style = document.createElement('style');
style.textContent = `.nav-link.active { color: var(--color-frost-white); } .nav-link.active::after { width: 100%; }`;
document.head.appendChild(style);
 
// ─── CURSOR GLOW (optional) ──────────────────────────
const cursorGlow = document.createElement('div');
cursorGlow.style.cssText = `
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(160,224,171,0.06) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: left 0.15s ease, top 0.15s ease;
  will-change: left, top;
`;
document.body.appendChild(cursorGlow);
 
window.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top  = e.clientY + 'px';
}, { passive: true });
 
// ─── TYPED HERO SUBTITLE ─────────────────────────────
// Subtle role rotation in hero tag
const roles = [
  'Fullstack Developer · Backend Specialist',
  'Node.js & Express · API Builder',
  'SQL & MongoDB · Data Architect',
  'PHP & JavaScript · Problem Solver',
];
const heroTag = document.querySelector('.hero-tag');
if (heroTag) {
  let rIdx = 0;
  setInterval(() => {
    rIdx = (rIdx + 1) % roles.length;
    heroTag.style.opacity = '0';
    heroTag.style.transform = 'translateY(8px)';
    heroTag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    setTimeout(() => {
      heroTag.textContent = roles[rIdx];
      heroTag.style.opacity = '1';
      heroTag.style.transform = 'translateY(0)';
    }, 320);
  }, 3200);
}
 