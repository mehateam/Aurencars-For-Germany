document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 850, easing: 'ease-out-cubic', once: true, offset: 70 });
  initNav();
  initParallax();
  initCounters();
  initFilter();
  initForm();
  initMobile();
  initParticles();
});

/* ── NAV SCROLL ── */
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('on', window.scrollY > 70);
  }, { passive: true });
}

/* ── PARALLAX (hero bg + text only, not car) ── */
function initParallax() {
  if (window.innerWidth <= 768) return;
  const hero = document.querySelector('.hero');
  const cnt  = document.querySelector('.hero-content');
  window.addEventListener('scroll', () => {
    const s = window.scrollY;
    if (s < window.innerHeight * 1.4) {
      hero.style.backgroundPositionY = `calc(50% + ${s * 0.38}px)`;
      if (cnt) cnt.style.transform = `translateY(${s * 0.13}px)`;
    }
  }, { passive: true });
}

/* ── COUNTERS ── */
function initCounters() {
  const sec = document.getElementById('stats');
  if (!sec) return;
  let done = false;
  new IntersectionObserver(([e]) => {
    if (e.isIntersecting && !done) {
      done = true;
      document.querySelectorAll('[data-count]').forEach(el => {
        counter(el, +el.dataset.count, el.dataset.sfx || '');
      });
    }
  }, { threshold: 0.3 }).observe(sec);
}

function counter(el, target, sfx, dur = 2200) {
  let t0 = null;
  (function step(ts) {
    if (!t0) t0 = ts;
    const p = Math.min((ts - t0) / dur, 1);
    const e = 1 - Math.pow(1 - p, 4);
    el.textContent = Math.floor(e * target) + sfx;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target + sfx;
  })(performance.now());
}

/* ── CATALOG FILTER ── */
function initFilter() {
  const btns  = document.querySelectorAll('.flt');
  const cards = document.querySelectorAll('.car');
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    const f = btn.dataset.f;
    let i = 0;
    cards.forEach(c => {
      const cats = (c.dataset.cat || '').split(' ');
      const show = f === 'all' || cats.includes(f);
      if (show) {
        c.style.display = '';
        c.style.animation = 'none';
        void c.offsetHeight;
        c.style.animation = `fadeUp .42s ease ${i++ * 0.07}s both`;
      } else {
        c.style.display = 'none';
      }
    });
  }));
}

/* ── FORM ── */
function initForm() {
  const form  = document.getElementById('cform');
  const toast = document.getElementById('toast');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name  = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    if (!name || !phone) {
      const bad = !name ? form.querySelector('[name="name"]') : form.querySelector('[name="phone"]');
      bad.style.borderColor = '#ff4040';
      bad.focus();
      setTimeout(() => (bad.style.borderColor = ''), 2200);
      return;
    }
    toast.classList.add('on');
    form.reset();
    setTimeout(() => toast.classList.remove('on'), 5500);
  });
}

/* ── MOBILE MENU ── */
function initMobile() {
  const burger = document.getElementById('burger');
  const mob    = document.getElementById('mob');
  if (!burger) return;
  burger.addEventListener('click', () => {
    burger.classList.toggle('on');
    mob.classList.toggle('on');
  });
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('on');
    mob.classList.remove('on');
  }));
}

/* ── PARTICLES ── */
function initParticles() {
  const box = document.getElementById('pts');
  if (!box) return;
  for (let i = 0; i < 9; i++) {
    const p = document.createElement('div');
    p.className = 'pt';
    const s = 2 + Math.random() * 4;
    p.style.cssText = `
      left:${Math.random() * 100}%;
      width:${s}px;height:${s}px;
      animation-duration:${9 + Math.random() * 12}s;
      animation-delay:${Math.random() * 10}s;
    `;
    box.appendChild(p);
  }
}
