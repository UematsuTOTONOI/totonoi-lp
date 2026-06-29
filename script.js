/* =====================
   RESERVATION URL
   ここを予約URLに変更してください
===================== */
const RESERVATION_URL = "https://reserve.489ban.net/client/g-totonoi/0/";

/* =====================
   RESERVE LINKS
===================== */
document.querySelectorAll('.js-reserve-link').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    window.open(RESERVATION_URL, '_blank');
  });
});

/* =====================
   HEADER SCROLL
===================== */
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
}, { passive: true });

/* =====================
   FLOATING CTA
===================== */
const floatingCta = document.querySelector('.floating-cta');
const hero = document.querySelector('.hero');
const finalCta = document.querySelector('.final-cta');

const ctaObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target === hero && !entry.isIntersecting) {
      floatingCta.classList.add('is-visible');
    } else if (entry.target === hero && entry.isIntersecting) {
      floatingCta.classList.remove('is-visible');
    }
    if (entry.target === finalCta && entry.isIntersecting) {
      floatingCta.classList.remove('is-visible');
    }
  });
}, { threshold: 0.1 });

ctaObserver.observe(hero);
ctaObserver.observe(finalCta);

/* =====================
   HERO KEN BURNS
===================== */
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  setTimeout(() => heroBg.classList.add('is-loaded'), 100);
}

/* =====================
   FADE-IN ON SCROLL
===================== */
const fadeTargets = document.querySelectorAll(
  '.voice-card, .feature-card, .timeline-card, .spot-card, .option-card'
);

fadeTargets.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

fadeTargets.forEach(el => fadeObserver.observe(el));

/* =====================
   SMOOTH ANCHOR
===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
