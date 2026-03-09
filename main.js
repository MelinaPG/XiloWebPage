/* ============================================================
   XILO — Main JS
   Interactions: nav scroll, mobile menu, scroll animations
   ============================================================ */

(function () {
  'use strict';

  /* ── NAV: scroll class ──────────────────────────────────── */
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── NAV: mobile hamburger ──────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── SCROLL REVEAL ──────────────────────────────────────── */
  const revealStyle = document.createElement('style');
  revealStyle.textContent = `
    .reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.65s cubic-bezier(0.4,0,0.2,1),
                  transform 0.65s cubic-bezier(0.4,0,0.2,1);
    }
    .reveal.visible {
      opacity: 1;
      transform: none;
    }
    .reveal-left {
      opacity: 0;
      transform: translateX(-28px);
      transition: opacity 0.65s cubic-bezier(0.4,0,0.2,1),
                  transform 0.65s cubic-bezier(0.4,0,0.2,1);
    }
    .reveal-left.visible {
      opacity: 1;
      transform: none;
    }
  `;
  document.head.appendChild(revealStyle);

  // Elements to animate
  const revealSelectors = [
    '.hero__tag',
    '.hero__headline',
    '.hero__meta',
    '.intro__left',
    '.intro__right',
    '.service-card',
    '.feature-split__visual',
    '.feature-split__content',
    '.work-card',
    '.process__step',
    '.insight-card',
    '.testimonial',
    '.cta-band__content',
    '.cta-band__action',
    '.stat',
  ];

  const toReveal = document.querySelectorAll(revealSelectors.join(','));

  toReveal.forEach((el, i) => {
    el.classList.add('reveal');
    // Stagger siblings in a grid
    if (el.parentElement) {
      const siblings = [...el.parentElement.children];
      const idx = siblings.indexOf(el);
      el.style.transitionDelay = `${idx * 0.08}s`;
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px',
  });

  toReveal.forEach(el => observer.observe(el));

  /* ── MARQUEE: pause on hover ────────────────────────────── */
  const marqueeTrack = document.querySelector('.marquee-track');
  const marqueeStrip = document.querySelector('.marquee-strip');
  if (marqueeStrip && marqueeTrack) {
    marqueeStrip.addEventListener('mouseenter', () => {
      marqueeTrack.style.animationPlayState = 'paused';
    });
    marqueeStrip.addEventListener('mouseleave', () => {
      marqueeTrack.style.animationPlayState = 'running';
    });
  }

  /* ── SMOOTH ANCHOR OFFSET ───────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

})();
