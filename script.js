// ── NAV SCROLL ──
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});
nav.classList.toggle('scrolled', window.scrollY > 60);

// ── COUNTDOWN ──
const TARGET = new Date('2026-05-14T10:00:00+10:00').getTime();
const cdGrid = document.getElementById('countdown-grid');
const cdExpired = document.getElementById('countdown-expired');
const cdDays = document.getElementById('cd-days');
const cdHours = document.getElementById('cd-hours');
const cdMins = document.getElementById('cd-mins');

function pad(n) { return String(n).padStart(2, '0'); }

function tickCountdown() {
  const diff = TARGET - Date.now();
  if (diff <= 0) {
    cdGrid.style.display = 'none';
    cdExpired.style.display = 'block';
    return;
  }
  cdDays.textContent  = pad(Math.floor(diff / 86400000));
  cdHours.textContent = pad(Math.floor((diff % 86400000) / 3600000));
  cdMins.textContent  = pad(Math.floor((diff % 3600000) / 60000));
}
tickCountdown();
setInterval(tickCountdown, 60000);

// ── FAQ ACCORDION ──
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const chevron = btn.querySelector('.faq-chevron');
    const isOpen = answer.classList.contains('open');

    // close all
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.faq-chevron').forEach(c => c.classList.remove('open'));
    document.querySelectorAll('.faq-question').forEach(b => b.setAttribute('aria-expanded', 'false'));

    if (!isOpen) {
      answer.classList.add('open');
      chevron.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ── CONTACT FORM ──
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('form-success').style.display = 'block';
});

// ── SMOOTH SCROLL for nav links ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
