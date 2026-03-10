/* ============================================================
   XIPE — Web Development Page
   Language: EN (primary) / ES (secondary)
   ============================================================ */

(function () {
  'use strict';

  /* ════════════════════════════════════════════════════════
     TRANSLATIONS
     Keys mirror the data-i18n / data-i18n-html attributes
     in the HTML. EN is always the source of truth.
  ════════════════════════════════════════════════════════ */
  const T = {
    en: {
      /* page */
      'page.title': 'Web Development — XIPE',

      /* nav */
      'nav.webdev': 'Web Development',
      'nav.portfolio': 'Portfolio',
      'nav.menuAriaOpen': 'Open menu',
      'nav.menuAriaClose': 'Close menu',

      /* hero */
      'hero.tag': 'Web Development',
      'hero.headline': 'GET YOUR WEBSITE<br>LIVE IN <em>DAYS,</em><br>NOT MONTHS.',
      'hero.sub': 'We accelerate your digital start and elevate your online presence with Ai Diana tools — websites built to grow with your business.',
      'hero.cta': 'Start Here',
      'hero.badgeLabel': 'LIVE IN',
      'hero.badgeValue': '7 DAYS',
      'hero.chip1': 'Mobile-First',
      'hero.chip2': 'AI-Powered',
      'hero.chip3': 'SEO Ready',

      /* method */
      'method.label': 'THE METHOD',
      'method.headline': 'HOW DO WE<br>MAKE IT POSSIBLE?',
      'method.body': 'With over 20 years of experience building digital products, we combine proven strategy, thoughtful design, and Ai Diana tools to deliver high-performing websites — faster, simpler, and ready to evolve.',
      'method.link': 'Explore Our Work',

      /* package */
      'package.label': 'THE PACKAGE',
      'package.headline': 'WHAT DO<br>YOU GET?',
      'package.sub': 'More than a landing page. A complete website in a week.',
      'package.cta': 'Start Here',

      /* features */
      'f1.title': 'BUILT-IN CMS',
      'f1.desc': 'A simple, built-in CMS so you can manage your content without technical complexity.',
      'f2.title': 'DESIGNED TO EVOLVE',
      'f2.desc': 'Design and structure prepared for seasonal updates and ongoing growth.',
      'f3.title': 'MOBILE-FIRST DESIGN',
      'f3.desc': 'Mobile-first design, optimized for all devices.',
      'f4.title': 'TOOL INTEGRATIONS',
      'f4.desc': 'Integration with the tools you already use to stay connected — social media, WhatsApp, and calendars.',
      'f5.title': 'EMAIL NOTIFICATIONS',
      'f5.desc': 'Customizable email notifications to stay connected with your audience.',
      'f6.title': 'TRAFFIC ANALYTICS',
      'f6.desc': 'Traffic analytics using Simple Analytics or Google Analytics.',
      'f7.title': 'BILINGUAL READY',
      'f7.desc': 'Bilingual ready — communicate seamlessly in Spanish and English.',
      'f8.title': 'DOMAIN SETUP',
      'f8.desc': "Domain setup included. We handle the technical side so you don't have to.",
      'f9.title': 'DESIGN PROPOSALS',
      'f9.desc': "Get up to 3 custom design proposals. Not satisfied? You'll receive a <strong>50% refund.</strong>",

      /* pricing */
      'pricing.note': 'One-time payment to start.',
      'pricing.cta': 'Start Here',
      'pricing.discount': 'If you have a discount code enter it at checkout ↗',
      'pricing.custom': 'Looking for a more customized website? <a href="#contact" class="wd-pricing__custom-link">Get in touch with us.</a>',

      /* approach */
      'approach.label': 'OUR PHILOSOPHY',
      'approach.headline': 'OUR APPROACH<br>TO BUILDING<br>WEBSITES',
      'approach.cta': 'Build your website with Xipe',
      'pillar1.title': 'YOUR WEBSITE SHOULD ALWAYS EVOLVE',
      'pillar1.desc': "Being online is not enough. Your website needs to stay updated and clearly communicate what you do, what's new, and why it matters to your customers.",
      'pillar2.title': 'YOUR WEBSITE IS YOUR DIGITAL HOME',
      'pillar2.desc': 'It reflects who you are and brings everything together — products, services, content, and value so people can take action at the right moment.',
      'pillar3.title': 'YOU SHOULD ALWAYS STAY IN CONTROL',
      'pillar3.desc': "You deserve the freedom to update, adjust, and improve your website anytime — without relying on third parties or facing technical barriers. That's why we give you an admin panel that lets you manage your site's structure whenever you need.",

      /* process */
      'process.headline': 'A GUIDED &amp; SECURE<br>PROCESS FOR YOU',
      'process.sub': 'Get your website live in just <em>7 days</em>',
      'step1.title': 'CREATE YOUR ACCOUNT',
      'step1.desc': 'Sign up on our platform to start the process.',
      'step2.title': 'MAKE YOUR PAYMENT',
      'step2.desc': 'A secure one-time payment to kick off your project.',
      'step3.title': 'SCHEDULE YOUR CALL',
      'step3.desc': 'A discovery call to understand your vision and goals.',
      'step4.title': 'DESIGN & CONTENT',
      'step4.desc': 'We present up to 3 design proposals for your approval.',
      'step5.title': 'REVISIONS',
      'step5.desc': 'We refine every detail until your site is exactly what you need.',
      'step6.title': 'LAUNCH',
      'step6.desc': 'Your site goes live. Ready, published, and online.',

      /* support */
      'support.label': 'AFTER LAUNCH',
      'support.headline': "YOUR WEBSITE DOESN'T<br>STOP AT LAUNCH",
      'support.sub': 'Continue improving your website with all the power of Ai Diana',
      'support.footnote': 'Designed for businesses that want a website they can continuously improve, not rebuild.',

      /* plans — shared */
      'plan.period': 'USD / monthly',
      'plan.hosting': 'Cloud Hosting',
      'plan.secBasic': 'Basic Hosting Security Level',
      'plan.secAdv': 'Advanced Hosting Security Level',
      'plan.select': 'Select',
      'plan.badge': 'MOST POPULAR',

      /* plan 1 */
      'plan1.name': 'Essential Support',
      'plan1.f1': '100 monthly credits with Ai Diana',

      /* plan 2 */
      'plan2.name': 'Optimization Support',
      'plan2.f1': '300 monthly credits with Ai Diana',

      /* plan 3 */
      'plan3.name': 'Strategic Support',
      'plan3.f1': '100 monthly change credits',
      'plan3.f4': '1:1 strategy — 5 hours/month',

      /* portfolio */
      'portfolio.label': 'PORTFOLIO',
      'portfolio.headline': "WHAT WE'VE BUILT",
      'portfolio.industry': 'Industry',
      'portfolio.visit': 'VISIT WEBSITE →',
      'card1.desc': 'An organization that supports and strengthens the mining industry by promoting collaborative, responsible production and sustainable development across the sector.',
      'card2.desc': 'A construction and industrial project company focused on delivering reliable engineering solutions through modern methods, efficiency, and technical expertise.',
      'card3.desc': 'A creative and technology-driven project that helps companies elevate their presence through digital displays, interactive solutions, and impactful visual communication.',

      /* footer */
      'footer.tagline': 'VENTURE STUDIO',
      'footer.contactLabel': 'Contact:',
      'footer.followLabel': 'Follow us at',
    },

    es: {
      /* page */
      'page.title': 'Desarrollo Web — XIPE',

      /* nav */
      'nav.webdev': 'Desarrollo Web',
      'nav.portfolio': 'Portafolio',
      'nav.menuAriaOpen': 'Abrir menú',
      'nav.menuAriaClose': 'Cerrar menú',

      /* hero */
      'hero.tag': 'Desarrollo Web',
      'hero.headline': 'TU SITIO <br>WEB EN <em>DÍAS,</em><br>NO EN MESES.',
      'hero.sub': 'Aceleramos tu inicio digital y elevamos tu presencia en línea con herramientas de Ai Diana — sitios web hechos para crecer con tu negocio.',
      'hero.cta': 'Empieza Aquí',
      'hero.badgeLabel': 'EN LÍNEA EN',
      'hero.badgeValue': '7 DÍAS',
      'hero.chip1': 'Móvil Primero',
      'hero.chip2': 'Con Inteligencia IA',
      'hero.chip3': 'SEO Optimizado',

      /* method */
      'method.label': 'EL MÉTODO',
      'method.headline': '¿CÓMO LO<br>HACEMOS POSIBLE?',
      'method.body': 'Con más de 20 años de experiencia construyendo productos digitales, combinamos estrategia probada, diseño cuidadoso y herramientas de Ai Diana para entregar sitios web de alto rendimiento — más rápidos, simples y listos para evolucionar.',
      'method.link': 'Ver Nuestro Trabajo',

      /* package */
      'package.label': 'EL PAQUETE',
      'package.headline': '¿QUÉ<br>OBTIENES?',
      'package.sub': 'Más que una landing page. Un sitio web completo en una semana.',
      'package.cta': 'Empezar',

      /* features */
      'f1.title': 'CMS INTEGRADO',
      'f1.desc': 'Un CMS simple e integrado para que puedas gestionar tu contenido sin complejidad técnica.',
      'f2.title': 'DISEÑADO PARA EVOLUCIONAR',
      'f2.desc': 'Diseño y estructura preparados para actualizaciones estacionales y crecimiento continuo.',
      'f3.title': 'DISEÑO MÓVIL PRIMERO',
      'f3.desc': 'Diseño móvil primero, optimizado para todos los dispositivos.',
      'f4.title': 'INTEGRACIONES DE HERRAMIENTAS',
      'f4.desc': 'Integración con las herramientas que ya usas — redes sociales, WhatsApp y calendarios.',
      'f5.title': 'NOTIFICACIONES POR EMAIL',
      'f5.desc': 'Notificaciones de correo personalizables para mantener conexión con tu audiencia.',
      'f6.title': 'ANÁLISIS DE TRÁFICO',
      'f6.desc': 'Análisis de tráfico con Simple Analytics o Google Analytics.',
      'f7.title': 'BILINGÜE',
      'f7.desc': 'Listo para dos idiomas — comunícate sin barreras en español e inglés.',
      'f8.title': 'CONFIGURACIÓN DE DOMINIO',
      'f8.desc': 'Configuración de dominio incluida. Nosotros manejamos la parte técnica.',
      'f9.title': 'PROPUESTAS DE DISEÑO',
      'f9.desc': 'Recibe hasta 3 propuestas de diseño personalizadas. ¿No satisfecho? Recibirás un <strong>reembolso del 50%.</strong>',

      /* pricing */
      'pricing.note': 'Pago único para comenzar.',
      'pricing.cta': 'Empieza Aquí',
      'pricing.discount': 'Si tienes un código de descuento, ingrésalo al finalizar la compra ↗',
      'pricing.custom': '¿Buscas un sitio web más personalizado? <a href="#contact" class="wd-pricing__custom-link">Contáctanos.</a>',

      /* approach */
      'approach.label': 'NUESTRA FILOSOFÍA',
      'approach.headline': 'NUESTRO ENFOQUE<br>PARA CONSTRUIR<br>SITIOS WEB',
      'approach.cta': 'Construye tu sitio con Xipe',
      'pillar1.title': 'TU SITIO WEB DEBE EVOLUCIONAR SIEMPRE',
      'pillar1.desc': 'No es suficiente estar en línea. Tu sitio necesita mantenerse actualizado y comunicar claramente qué haces, qué hay de nuevo y por qué importa a tus clientes.',
      'pillar2.title': 'TU SITIO WEB ES TU HOGAR DIGITAL',
      'pillar2.desc': 'Refleja quién eres y reúne todo — productos, servicios, contenido y valor para que las personas actúen en el momento correcto.',
      'pillar3.title': 'SIEMPRE DEBES ESTAR EN CONTROL',
      'pillar3.desc': 'Mereces la libertad de actualizar, ajustar y mejorar tu sitio en cualquier momento — sin depender de terceros ni enfrentar barreras técnicas. Por eso te damos un panel de administración que te permite gestionar la estructura de tu sitio cuando lo necesites.',

      /* process */
      'process.headline': 'UN PROCESO GUIADO<br>Y SEGURO PARA TI',
      'process.sub': 'Tienes tu sitio web en tan solo <em>7 días</em>',
      'step1.title': 'CREA TU CUENTA',
      'step1.desc': 'Regístrate en nuestra plataforma para comenzar el proceso.',
      'step2.title': 'REALIZA TU PAGO',
      'step2.desc': 'Pago seguro de una sola vez para iniciar tu proyecto.',
      'step3.title': 'AGENDA TU CITA',
      'step3.desc': 'Una llamada de descubrimiento para entender tu visión y objetivos.',
      'step4.title': 'DISEÑO Y CONTENIDO',
      'step4.desc': 'Te presentamos hasta 3 propuestas de diseño para tu aprobación.',
      'step5.title': 'REVISIONES',
      'step5.desc': 'Ajustamos cada detalle hasta que tu sitio sea exactamente lo que necesitas.',
      'step6.title': 'PUBLICACIÓN',
      'step6.desc': 'Tu sitio sale al mundo. Listo, publicado y en línea.',

      /* support */
      'support.label': 'DESPUÉS DEL LANZAMIENTO',
      'support.headline': 'TU SITIO WEB NO<br>SE DETIENE AL LANZAR',
      'support.sub': 'Continúa mejorando tu sitio web con todo el poder de Ai Diana',
      'support.footnote': 'Diseñado para negocios que quieren un sitio web que puedan mejorar continuamente, no reconstruir.',

      /* plans — shared */
      'plan.period': 'USD / mensual',
      'plan.hosting': 'Hosting en la Nube',
      'plan.secBasic': 'Nivel de Seguridad Básico',
      'plan.secAdv': 'Nivel de Seguridad Avanzado',
      'plan.select': 'Seleccionar',
      'plan.badge': 'MÁS POPULAR',

      /* plan 1 */
      'plan1.name': 'Soporte Esencial',
      'plan1.f1': '100 créditos mensuales con Ai Diana',

      /* plan 2 */
      'plan2.name': 'Soporte de Optimización',
      'plan2.f1': '300 créditos mensuales con Ai Diana',

      /* plan 3 */
      'plan3.name': 'Soporte Estratégico',
      'plan3.f1': '100 créditos mensuales de cambios',
      'plan3.f4': 'Estrategia 1:1 — 5 horas/mes',

      /* portfolio */
      'portfolio.label': 'PORTAFOLIO',
      'portfolio.headline': 'LO QUE HEMOS CONSTRUIDO',
      'portfolio.industry': 'Industria',
      'portfolio.visit': 'VISITAR SITIO →',
      'card1.desc': 'Una organización que apoya y fortalece la industria minera promoviendo producción colaborativa, responsable y desarrollo sostenible en el sector.',
      'card2.desc': 'Una empresa de proyectos de construcción e industriales enfocada en soluciones de ingeniería confiables a través de métodos modernos, eficiencia y expertise técnico.',
      'card3.desc': 'Un proyecto creativo y tecnológico que ayuda a empresas a elevar su presencia a través de pantallas digitales, soluciones interactivas y comunicación visual de impacto.',

      /* footer */
      'footer.tagline': 'VENTURE STUDIO',
      'footer.contactLabel': 'Contacto:',
      'footer.followLabel': 'Síguenos en',
    },
  };

  /* ════════════════════════════════════════════════════════
     LANGUAGE ENGINE
  ════════════════════════════════════════════════════════ */
  const STORAGE_KEY = 'xipe-lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  /**
   * Apply a language to the entire page.
   * Handles: data-i18n (textContent), data-i18n-html (innerHTML),
   * page title, html[lang].
   */
  function applyLang(lang) {
    const dict = T[lang];
    if (!dict) return;

    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    /* html[lang] attribute */
    document.documentElement.setAttribute('lang', lang === 'es' ? 'es' : 'en');

    /* page <title> */
    if (dict['page.title']) document.title = dict['page.title'];

    /* [data-i18n] → textContent */
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    /* [data-i18n-html] → innerHTML (headlines with <br>, <em>, etc.) */
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    /* toggle button visual state — sync all instances (nav + footer) */
    document.querySelectorAll('.lang-toggle__btn').forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  /* ════════════════════════════════════════════════════════
     NAV — scroll shadow
  ════════════════════════════════════════════════════════ */
  const nav = document.getElementById('xnav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ════════════════════════════════════════════════════════
     NAV — mobile hamburger
  ════════════════════════════════════════════════════════ */
  const hamburger = document.getElementById('xHamburger');
  const navLinks  = document.getElementById('xnavLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
      /* Update aria-label based on language */
      const closeKey = T[currentLang]?.['nav.menuAriaClose'] || 'Close menu';
      const openKey  = T[currentLang]?.['nav.menuAriaOpen']  || 'Open menu';
      hamburger.setAttribute('aria-label', open ? closeKey : openKey);
    });

    navLinks.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (nav && !nav.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ════════════════════════════════════════════════════════
     LANGUAGE TOGGLE — click handler
  ════════════════════════════════════════════════════════ */
  document.querySelectorAll('.lang-toggle__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang; // 'en' | 'es'
      if (lang !== currentLang) applyLang(lang);
    });
  });

  /* ════════════════════════════════════════════════════════
     SCROLL REVEAL
  ════════════════════════════════════════════════════════ */
  const revealSelectors = [
    '.wd-hero__content',
    '.wd-hero__visual',
    '.wd-possible__headline',
    '.wd-possible__body',
    '.wd-possible__link',
    '.wd-features__header',
    '.wd-feature-card',
    '.wd-pricing',
    '.wd-approach__header',
    '.wd-approach__pillar',
    '.wd-process__header',
    '.wd-process__step',
    '.wd-support__header',
    '.wd-plan',
    '.wd-support__footnote',
    '.wd-portfolio__header',
    '.wd-portfolio-card',
  ].join(',');

  const revealEls = document.querySelectorAll(revealSelectors);

  revealEls.forEach((el) => {
    el.classList.add('x-reveal');
    const siblings = [...(el.parentElement ? el.parentElement.children : [])];
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.transitionDelay = `${idx * 0.07}s`;
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  revealEls.forEach((el) => io.observe(el));

  /* ════════════════════════════════════════════════════════
     SMOOTH ANCHOR SCROLL (nav-height offset)
  ════════════════════════════════════════════════════════ */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ════════════════════════════════════════════════════════
     BACK TO TOP
  ════════════════════════════════════════════════════════ */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ════════════════════════════════════════════════════════
     INIT — apply persisted / default language on load
  ════════════════════════════════════════════════════════ */
  applyLang(currentLang);

})();
