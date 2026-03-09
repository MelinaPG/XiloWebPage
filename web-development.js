/* ============================================================
   XIPE — Web Development Page JS
   Interactions: nav scroll, mobile menu, scroll reveal,
   language toggle
   ============================================================ */

(function () {
  'use strict';

  /* ── NAV scroll ───────────────────────────────────────── */
  const nav = document.getElementById('xnav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile hamburger ─────────────────────────────────── */
  const hamburger = document.getElementById('xHamburger');
  const navLinks  = document.getElementById('xnavLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(a => {
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

  /* ── Language toggle ──────────────────────────────────── */
  document.querySelectorAll('.lang-toggle__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.lang-toggle__btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // Extend here: swap content for the selected language
    });
  });

  /* ── Scroll reveal ────────────────────────────────────── */
  const revealTargets = [
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
  ];

  const elements = document.querySelectorAll(revealTargets.join(','));

  elements.forEach((el) => {
    el.classList.add('x-reveal');
    // Stagger within parent
    const siblings = [...(el.parentElement ? el.parentElement.children : [])];
    const idx = siblings.indexOf(el);
    if (idx > 0) el.style.transitionDelay = `${idx * 0.07}s`;
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

  elements.forEach(el => io.observe(el));

  /* ── Smooth anchor scroll with nav offset ─────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
