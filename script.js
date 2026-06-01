/* ─── Google Drive photo URL helper ─── */
function gd(id, size) { return `https://drive.google.com/thumbnail?id=${id}&sz=${size||'w1200'}`; }

/* ─── Car data ─── */
const CARS = [
  {
    id: 'bmw-x5-2014',
    name: 'BMW X5',
    year: '2014',
    mileage: '137 000 km',
    spec: '3.0 diesel · xDrive',
    categories: ['suv', 'premium'],
    photos: [
      '1sJTYSSDsv_YOjQAYGjUq_7DTDG26TTrr',
      '1uVoKaGEvdjUJi-Nd1Njo-B341G4Kftrs',
      '1ontg5BwHtLTsc2g_0vXfMu_TB9hyNhH8',
      '1iKXoAZaKqWtoJbZHaKNrX-xtDhP-Akv4',
      '1Sqaqqy9zU8UcFe0LynwWjL0HB207R411',
      '14CUwWfHRy1Z2NynXUxrw6YAFfDAsgZst',
      '16qSQVnNgj7W4gKeVyKTpB3xbCnNiNUND',
      '1f2eF4OSQ2bY16XaWYCzxBRInYXrtJIrW',
      '1R8dKq6x_xpO4xwL90DA5MNp4rGq1NpI1',
      '1syxBe9zxsbcmQ-YVcoARYVrtySH8QcIq',
      '1CWs9wzvjKYZrPMPa7El5F2qG6nODvJx5',
      '1DenBTL65eDZJ9CofOuKEQGmszv7H4H3e',
      '1KssQxV-0gp_8XcMna5Robv_Kah2TMqgm',
      '1E-qpoOgkHCLLkoUzba1tQ__w-eSAYw4c',
    ]
  },
  {
    id: 'bmw-x5-2018',
    name: 'BMW X5',
    year: '2018',
    mileage: '112 000 km',
    spec: '3.0 diesel · xDrive',
    categories: ['suv', 'premium'],
    photos: [
      '1TVKw0px21wgdqhLDYrDXxnoYO7ujdunF',
      '1-_iwGIEKKGkl8eTs6EQHbz1z0oql-u8f',
      '12tzqioLSJ1rnH7iwlvn5KlTfhj2GfUT6',
      '1-4465uPwvClQl1ip6nMaCv_p0wHlmgct',
      '1W0BVuYrWepsyJWTUyo50J-PQm9yCSSUV',
      '1XoWoiEuFlyhTox3oiQwmHsPMsLye8hEl',
      '1Jsnqq_6oqdAophJyl-9OclSUxSUVRBcG',
      '1VTBRgNfElWJoxT9EcIr03f9AhBMiFy4A',
      '1xnk0SEidNRSs3ujdgnLeOBZghs-4rt_3',
      '1vrXn8waSzzC3I_18bS2n6AqNsYXirYm7',
      '1QWNOx5lYHVCkhAWGDR69nyxSLHwsvNKI',
      '1QC0I5HZL3JQU1X9nF0e7XDL1TY_W_8G_',
      '1tKB4y4lPurw5ImkkUVgUm9xxPLI0Qe5d',
      '12yN2UfcE5ba_VvV6sjNXhzVMrr1GMdIS',
    ]
  },
  {
    id: 'bmw-520d-2016',
    name: 'BMW 520d',
    year: '2016',
    mileage: '86 000 km',
    spec: '2.0T diesel · M Aerodynamic',
    categories: ['sedan', 'premium'],
    photos: [
      '1BnUvHXuR500mOvhUd9ydaNXhHBXJvhTb',
      '1kMJApLj1wcuc3DXvx-gGXCbZKDNfGymD',
      '1edDWX7YbvfkB-Uol429E8A-a3hzFSqHt',
      '1QQbf2sTDMRavIUwWNTGAXXNPAQbLyxOj',
      '13xBgAs50D65S333liCWkWYh3jLUcyyGY',
      '12M2nxGx7sw5Jl4D_efys9usvrENCVfzf',
      '1sQndpD0Fc6e1Pl2QcfzkcVVCjOdhIItL',
      '1LwIw_od8W1qriALnQotIYRfhm_yDMTsn',
      '1wXt6N5SwysY_X9xscJ64O8GcdS0mJmbT',
      '1UtsxMdxtc7xM8cw6gVOqP2ry1l7XsAii',
      '1PIilqxvlvihh9hGfao2btHvb5KuEaDM7',
      '1d0kJsAVeyjfCd6_IWP2xgVL4p8Bcdda1',
      '1H-Xrc7tHtbm1_xj37vEXUuMgE3W_0mi0',
      '1YcrsrFX7RkGMuiGWOLYVkiNsbUrZj5mE',
    ]
  },
  {
    id: 'bmw-320d-2019',
    name: 'BMW 320d',
    year: '2019',
    mileage: '107 233 km',
    spec: '2.0 diesel · M Sport',
    categories: ['sedan', 'premium'],
    photos: [
      '1NHrLNjac2unh5nfcmgk6BHqbw9YUBdPL',
      '1zyOXKB8AXFFYq6KSD-iSt0WURCUoYRmy',
      '1y6pC08Lv780Y_ujriobQOjG25fct-02K',
      '1swjFoBj2oxVPURX1PjApHZelRwTFboSa',
      '1i4lyX3pNSxw20RVH7B24Loe4agvK2m3h',
      '1cz40AeZZeIWUuXqsIpjTV-sKYljfL9Ku',
      '1pCyV2561BaYCXhGMutft1b82woTZVLdz',
      '1JU-ZBPwX1Qp9MNz0F9AEi_daotEj5ULf',
      '1jSYFuayvXx3sDf2e_UIcgi9-00NCkvt-',
      '1mNOt4zwThLW0_iZX0iuiwYG3F9emPatm',
      '1GsMmmvnqVV6HcuHKMP_vUsbrs059Y8mE',
    ]
  },
  {
    id: 'bmw-x6-2017',
    name: 'BMW X6',
    year: '2017',
    mileage: '122 067 km',
    spec: '3.0 diesel · xDrive30d',
    categories: ['suv', 'premium'],
    photos: [
      '14CUsxaDQe1WV4LjcEqjNz9ijBZgaE4rW',
      '104ABQjcsYULBby2JA1dIJatg09T4d_pM',
      '1FMsiiHHmkpj484BukNsTJnOgRl6Of4vO',
      '1rQ8LzjTtv09p7Porm3GQI9t3ygNNlQiV',
      '1te64UeHfhYWSi2w6QLU0hmPlVlrjEsBZ',
      '16EkpcHQDEn5lBjqH74uHYUjsgtWSZDvv',
      '1vQj9uvjYkzbdb9rcuQ25dBOo2NmG3uaT',
      '1WyinGWnZaeVHLjRS-ypnL0790mHLfYmG',
      '1NsrioM4JeKTtjwjtlIjDP4cav9eFTm_8',
      '1XAu_fJCT7LhKoSGK77g-hIQcaooSyovF',
      '11RvfQvXFObcnxPxnTw-Y6xQ99OXrHJo7',
      '19Ji7b9TRfQlqq3rvpipVXbRm5l3gjmLz',
      '1ryjc_fhCQm6E-xyqmY5_I_8nkaluyJQB',
      '1ADRhg2XFHsmtSwLWA9DHjsJuEX6VDmNS',
      '1-jWfF4DjmHVUHyYbZZhsblEf3dxAA_ed',
    ]
  },
  {
    id: 'audi-a4-2015',
    name: 'Audi A4',
    year: '2015',
    mileage: '150 000 km',
    spec: '2.0T diesel · Quattro',
    categories: ['sedan'],
    photos: [
      '1sBEiuKEI_l0CdOEgk3QGpsOxH7g5dC6T',
      '1aZZHVnjv5k6AEyg0lGBX841aSCY66AoJ',
      '1y9TLLfCSbUlaBtBUtfLjvXfQwokbkbjt',
      '1P6wJoTfbkEGLmVqpKny5Hr0JHKAhPWUv',
      '1EcPR6N1bGEjCHtDOaULxOKcRXqMgy1ZH',
      '1jiFewFAgXJhntvCDEFcssCLveN8VEdYP',
      '1NwthPqWuu6UgH6D-dgNrfiPYHWGyanGW',
      '1ELN1qfYjYguxrjBfYtza9mVNH27Ni82g',
      '1PUPqkbCq0slWP6m-HhnWDdTDVzNMYNCm',
      '1NlchEBQw-bf0A2is0sfkyB11UDlhqUZS',
      '1zB1V_qm_t4gR3x_QeFSW61rU3CFIljOj',
      '1U4Lh1c4yo0YtnTbr_O7zeClQ8dufNeKe',
      '1io6Twk2tMBvdc-Cf69OebD2U5L34SuLf',
    ]
  },
  {
    id: 'mercedes-e220d-2017',
    name: 'Mercedes-Benz E220d',
    year: '2017',
    mileage: '156 000 km',
    spec: '2.0d · 4MATIC',
    categories: ['sedan', 'premium'],
    photos: [
      '1StiLvxu-R8vy_3hSsot7PPNX3Dlk3KmO',
      '12RFWar0qSE7ri5dT0kHdwME0it3MUl3b',
      '1uDymi8KPvsP9koMFXTIIJ7UDxzpU7sZb',
      '1B62r5svxEU-BlNXZFAkli-IAL--nQ8M3',
      '1e8qd9tMKfUKJmKdcH-PxsjBZZQdtTJ8Y',
      '101GfdMkM3Q09cYxcqU-txGvo7SIhFmNS',
      '1c4nVnQSPYTqlisBm4s_hCMK1Mp1XB4QJ',
      '1cjNN00KVjLzicx08w2VTgVxzFEvDcVfE',
      '1IRIhgmSfIP-NsRA3W_doLZ0brFjc3a7k',
      '14JMYghLyT5LQcl0cl3zW8wL3Um8TLpgP',
      '1v0UKj5tv5MI0KW0xlEY0zEXxch7kB5_f',
      '1Tzvbc7yyIgwEG6vWIT2sJSBEk1MVE3Lh',
      '17c2jJQ_ImtUkvB6AxzWKEHkfGfvSpbII',
    ]
  },
  {
    id: 'volvo-xc40-2020',
    name: 'Volvo XC40',
    year: '2020',
    mileage: '144 300 km',
    spec: '2.0 diesel · 4WD',
    categories: ['suv'],
    photos: [
      '1PJzEoZV3eMO3f5YJdYc22WrFnaF0W-8N',
      '1lQ8YbALg2SlhZslRCHVS2aOKP7PTsE1K',
      '1lso-FfvsbznpC_gOF7O6Aa6CxvLH1JDg',
      '1ie9HVH9uvPSKU1H-62aOqDrcmYt6n9OA',
      '1jSPfUfgo4hl40jVPRS6UIsSCuj3zFDtx',
      '1XNESqIv5C3iyvmPmH61em66ExVCRlYFr',
      '1xkaGSMzllwUKRQ-FbfFdEqGP2vaO-G49',
      '1Nve3QMmyFlgHbuEWQQLbEsRJkgmG6RPM',
      '11KDghDWJuGRqAxor70XPhWeg5ZDqrpna',
      '1SPZPpdhr04MZLQj14BJxheVTN4_-1V_o',
      '12URjGRCZ-NaTggrfyU1hhloZDUCvJ-1h',
      '1kcU75uhBOeJW4_adxTuYTGFk3UKkbtNz',
    ]
  },
  {
    id: 'audi-a6-2016',
    name: 'Audi A6',
    year: '2016',
    mileage: '123 000 km',
    spec: '2.0 diesel · 35 TDI · Quattro',
    categories: ['sedan'],
    photos: [
      '1Z0JXuZabZkx0ZWi33DbrjqkCqNHVAWX0',
      '1Sk9XbXczeyLCkv-H12DNVIfgXLwNw-MQ',
      '1efiSdgNHLsL4SXXBZCNxCcd6sEG6Z-sp',
      '1ZLvLCOOXixwsgk5uoR9TDyLGIkg5p3G7',
      '1TFT91SvEl1ImXhSFz4zQe-5fkHz-PSbc',
      '1tNeEd4gbPJ38xnTJjF2adhbxUCh9g60l',
      '1QkvzPvf6i53skIdf8ipXTK2-0IsHHyml',
      '1hvOtl8vCedJ3g-UFJWHZzSnM9HOZhErC',
      '1ny3cnTJ6puVVvs50RqLQwLuuE92Kb1R6',
      '10T8pU0gUrACUGZ9aByCAMpoNvI4-Yao2',
    ]
  },
  {
    id: 'mercedes-c250-2016',
    name: 'Mercedes-Benz C250',
    year: '2016',
    mileage: '114 000 km',
    spec: '2.2 diesel · 4MATIC',
    categories: ['sedan', 'premium'],
    photos: [
      '1QH0JYwHXasCpmSc0LUHneyZpTnQ9Cwew',
      '1bSmHdo6sAU6fKqOFM44dSe_neLa-bBKI',
      '1B1oF-UjrfGpabTMZ6hRET_Q55pFNQEpy',
      '1WkLCqNH1XTlzdUQSfJ02isXLG5ohadTP',
      '1--_LjGkmrecIeV_Y0NnG8bYzGi4UKYbt',
      '1D7BaNscj_VBYjJlvEU8cz9N2aNnWq6G6',
      '1tVnHYknGacqmdsCOF5fGgMICv0AFuiqw',
      '1oNijvfMH4KXd_JNWUA6As1cMuDMNZ8_j',
      '1r_dpUkoU0j-dBTjGIUqJJHjSR0eO6H_g',
      '1AqOL8wHrmNpCgyZ3H7ap4CaXy1OGlDPt',
      '1ya2H6XYzH18Pqg07eZyAGmBGT16ZvU1j',
      '1BToACDCBQ-GfxoU3XAJSfM7PxjQBueC9',
      '1wvH1apr9tFVh2K3qXQUGDaKe9AO0asi5',
      '1RL65MwVWfRnki4mF3QjHbKYpaKpAnk-8',
      '1Dtj1N2hr4jKV_DFY98yGPZ-hPIOqvHaR',
      '1_nzkT5PlFW3_sLmsDgf82apb2eZ_wrbl',
      '1K0IC128cMqpszxRMiap79D3tBGRy0EOp',
      '1LnToPC3C3LAlvz0T6GajYDV_Pvc9b1Jv',
    ]
  },
];

/* ─────────────────────────────────────────────
   INIT
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initLenis();
  initGSAP();
  initNav();
  initCounters();
  renderCatalog();
  initForm();
  initMobile();
  initLang();
  initLightbox();
  initPreloader();
});

/* ── LENIS smooth scroll ── */
function initLenis() {
  if (typeof Lenis === 'undefined') return;
  const lenis = new Lenis({
    duration: 1.4,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  window._lenis = lenis;
}

/* ── GSAP ScrollTrigger animations ── */
function initGSAP() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  // Dispatch scroll progress to three-scene.js
  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        window.dispatchEvent(new CustomEvent('aurencars-scroll', {
          detail: { progress: self.progress }
        }));
      }
    });
  }

  // Section entrance animations
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && typeof ScrollTrigger !== 'undefined') {
    document.querySelectorAll('[data-gsap="fade-up"]').forEach((el, i) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
          delay: (i % 4) * 0.08,
        }
      );
    });

    // Parallax headings
    document.querySelectorAll('.sec-h2').forEach(el => {
      gsap.to(el, {
        y: -35,
        ease: 'none',
        scrollTrigger: {
          trigger: el.closest('section'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      });
    });
  } else {
    // Reset hidden elements instantly when reduced-motion preferred
    document.querySelectorAll('[data-gsap="fade-up"]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }
}

/* ── PRELOADER ── */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const bar       = document.getElementById('preloader-bar');
  if (!preloader) return;

  // Update progress bar when three-scene fires model-progress event
  document.addEventListener('model-progress', (e) => {
    if (bar) bar.style.width = `${Math.round(e.detail.pct * 100)}%`;
  });

  // Hide preloader when model is loaded (or mobile/no-WebGL fallback fires immediately)
  document.addEventListener('model-loaded', () => {
    if (bar) bar.style.width = '100%';
    setTimeout(() => {
      if (typeof gsap !== 'undefined') {
        gsap.to(preloader, {
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out',
          onComplete: () => {
            preloader.classList.add('hidden');
            animateHeroIn();
          }
        });
      } else {
        preloader.classList.add('hidden');
        animateHeroIn();
      }
    }, 300);
  });

  // Safety timeout — hide preloader after 8s regardless
  setTimeout(() => {
    if (!preloader.classList.contains('hidden')) {
      preloader.classList.add('hidden');
      animateHeroIn();
    }
  }, 8000);
}

/* ── HERO ENTRANCE ── */
function animateHeroIn() {
  if (typeof gsap === 'undefined') return;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  // Split hero h1 into word spans
  splitWords(document.getElementById('heroH1'));

  const tl = gsap.timeline();
  tl.from('.hero-h1 .word-inner', {
    y: 90, opacity: 0,
    duration: 1.0, ease: 'power3.out',
    stagger: 0.07,
  })
  .from('.hero-pre', { y: 20, opacity: 0, duration: 0.7, ease: 'power2.out' }, 0)
  .from('.rule',     { scaleX: 0, opacity: 0, duration: 0.7, ease: 'power2.out', transformOrigin: 'left' }, 0.4)
  .from('.hero-sub', { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out' }, 0.5)
  .from('.hero-actions', { y: 25, opacity: 0, duration: 0.7, ease: 'power2.out' }, 0.65)
  .from('.hero-nums > div', { y: 20, opacity: 0, stagger: 0.1, duration: 0.6, ease: 'power2.out' }, 0.8)
  .from('.scroll-indicator', { opacity: 0, duration: 0.5 }, 1.0);
}

/* ── WORD SPLITTER ── */
function splitWords(el) {
  if (!el) return;
  function processNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const words = node.textContent.split(/(\s+)/);
      const frag  = document.createDocumentFragment();
      words.forEach(w => {
        if (/^\s+$/.test(w)) {
          frag.appendChild(document.createTextNode(w));
        } else if (w.length) {
          const outer = document.createElement('span');
          outer.className = 'word';
          const inner = document.createElement('span');
          inner.className = 'word-inner';
          inner.textContent = w;
          outer.appendChild(inner);
          frag.appendChild(outer);
        }
      });
      node.parentNode.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName !== 'EM') {
      Array.from(node.childNodes).forEach(processNode);
    }
  }
  processNode(el);
}

/* ── NAV SCROLL ── */
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('on', window.scrollY > 70);
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

function formatNum(n) {
  if (n >= 1000) {
    return Math.floor(n / 1000) + ' ' + String(n % 1000).padStart(3, '0');
  }
  return String(n);
}

function counter(el, target, sfx, dur = 2200) {
  let t0 = null;
  (function step(ts) {
    if (!t0) t0 = ts;
    const p = Math.min((ts - t0) / dur, 1);
    const e = 1 - Math.pow(1 - p, 4);
    el.textContent = formatNum(Math.floor(e * target)) + sfx;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = formatNum(target) + sfx;
  })(performance.now());
}

/* ── CATALOG RENDER ── */
function renderCatalog() {
  const grid = document.getElementById('catGrid');
  grid.innerHTML = '';
  CARS.forEach((car, idx) => {
    const cats = car.categories.join(' ');
    const catLabel = car.categories.map(c => c.charAt(0).toUpperCase() + c.slice(1)).join(' · ');
    const delay = (idx % 3) * 80;
    const thumb = gd(car.photos[0], 'w800');

    const card = document.createElement('div');
    card.className = 'car';
    card.dataset.cat = cats;
    card.dataset.carId = car.id;
    card.setAttribute('data-gsap', 'fade-up');
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => openLightbox(car.id));

    card.innerHTML = `
      <div class="car-img">
        <img src="${thumb}" alt="${car.name} ${car.year}" loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="car-img-fb" style="display:none">${car.name.toUpperCase()}</div>
        <span class="badge">${car.year}</span>
        <span class="cat-tag">${catLabel}</span>
        <div class="car-overlay">
          <span data-i18n="car.overlay">Смотреть фото</span>
        </div>
      </div>
      <div class="car-body">
        <h3 class="car-name">${car.name}</h3>
        <p class="car-spec">${car.year} · ${car.mileage} · ${car.spec}</p>
        <a href="#contact" class="btn btn-gold" style="font-size:.72rem;padding:10px 20px"
           onclick="event.stopPropagation()" data-i18n="cat.btn">→ Написать нам</a>
      </div>
    `;
    grid.appendChild(card);
  });

  initFilter();
  if (typeof setLang === 'function') setLang(localStorage.getItem('lang') || 'ru');

  // Re-register new cards with GSAP ScrollTrigger
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      document.querySelectorAll('[data-gsap="fade-up"]').forEach(el => {
        if (el.closest('#catalog')) {
          gsap.fromTo(el,
            { y: 60, opacity: 0 },
            {
              y: 0, opacity: 1,
              duration: 0.8, ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 90%', once: true },
            }
          );
        }
      });
    }
  }
}

/* ── CATALOG FILTER ── */
function initFilter() {
  const btns = document.querySelectorAll('.flt');
  btns.forEach(btn => {
    if (btn.dataset.filterBound) return;
    btn.dataset.filterBound = '1';
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      const f = btn.dataset.f;
      let i = 0;
      document.querySelectorAll('.car').forEach(c => {
        const show = f === 'all' || (c.dataset.cat || '').split(' ').includes(f);
        if (show) {
          c.style.display = '';
          c.style.animation = 'none';
          void c.offsetHeight;
          c.style.animation = `fadeUp .42s ease ${i++ * 0.07}s both`;
        } else {
          c.style.display = 'none';
        }
      });
    });
  });
}

/* ── SERVICE ACCORDION ── */
function toggleSrv(el) {
  el.classList.toggle('open');
}

/* ─────────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────────── */
let lbCar = null;
let lbIdx = 0;
let lbTouchX = 0;

function initLightbox() {
  const lb = document.getElementById('lightbox');

  lb.addEventListener('click', e => {
    if (e.target === lb) closeLb();
  });

  lb.addEventListener('touchstart', e => {
    lbTouchX = e.touches[0].clientX;
  }, { passive: true });

  lb.addEventListener('touchend', e => {
    const diff = lbTouchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) lbNav(diff > 0 ? 1 : -1);
  });

  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'ArrowLeft')  lbNav(-1);
    if (e.key === 'Escape')     closeLb();
  });
}

function openLightbox(carId) {
  lbCar = CARS.find(c => c.id === carId);
  if (!lbCar) return;
  lbIdx = 0;
  lbRender();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLb() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
  lbCar = null;
}

function lbNav(dir) {
  if (!lbCar) return;
  lbIdx = (lbIdx + dir + lbCar.photos.length) % lbCar.photos.length;
  lbRender();
}

function lbRender() {
  const img = document.getElementById('lbImg');
  img.classList.add('lb-loading');
  img.onload = () => img.classList.remove('lb-loading');
  img.onerror = () => img.classList.remove('lb-loading');
  img.src = gd(lbCar.photos[lbIdx], 'w1600');
  img.alt = lbCar.name;

  document.getElementById('lbTitle').textContent = `${lbCar.name}  ·  ${lbCar.year}  ·  ${lbCar.mileage}  ·  ${lbCar.spec}`;
  document.getElementById('lbCounter').textContent = `${lbIdx + 1} / ${lbCar.photos.length}`;

  const strip = document.getElementById('lbStrip');
  strip.innerHTML = '';
  lbCar.photos.forEach((id, i) => {
    const t = document.createElement('img');
    t.className = 'lb-thumb' + (i === lbIdx ? ' active' : '');
    t.src = gd(id, 'w200');
    t.alt = '';
    t.loading = 'lazy';
    t.addEventListener('click', () => { lbIdx = i; lbRender(); });
    strip.appendChild(t);
  });

  const active = strip.querySelector('.lb-thumb.active');
  if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
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

/* ── MOBILE MENU (fullscreen overlay) ── */
function initMobile() {
  const burger = document.getElementById('burger');
  const mob    = document.getElementById('mob');
  if (!burger || !mob) return;

  function closeMob() {
    burger.classList.remove('on');
    mob.classList.remove('on');
    document.body.style.overflow = '';
  }
  function openMob() {
    burger.classList.add('on');
    mob.classList.add('on');
    document.body.style.overflow = 'hidden';
  }

  burger.addEventListener('click', () => {
    mob.classList.contains('on') ? closeMob() : openMob();
  });

  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMob));
  mob.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', closeMob));
}


/* ─────────────────────────────────────────────
   LANGUAGE
───────────────────────────────────────────── */
const T = {
  ru: {
    'nav.about':        'О нас',
    'nav.services':     'Услуги',
    'nav.catalog':      'Каталог',
    'nav.reviews':      'Отзывы',
    'nav.contact':      'Контакты',
    'nav.cta':          'Консультация',
    'nav.mob.cta':      'Получить консультацию',

    'hero.tag':           'Автомобили из Южной Кореи',
    'hero.h1':            'Ваш<br>идеальный<br><em>автомобиль</em>',
    'hero.sub':           'Подбираем и доставляем машины из Кореи в Германию, Нидерланды, Испанию, Казахстан, ОАЭ, Саудовскую Аравию, Кыргызстан и Албанию.',
    'hero.btn1':          '→ Подобрать автомобиль',
    'hero.btn2':          'Каталог 2026',
    'hero.num1.label':    'Лет опыта',
    'hero.num2.label':    'Авто экспортировано',
    'hero.num3.label':    'Стран',
    'hero.scroll':        'Скролл',

    'about.tag':          'О компании',
    'about.h2':           '11 лет.<br>Одна цель.',
    'about.editorial':    'Честно и без лишних слов — в каждой сделке',
    'about.body1':        '<strong>AurenCars</strong> работает из Кореи уже 11 лет. Напрямую с корейскими дилерами — никаких посредников.',
    'about.body2':        'Доставляем в <strong>Германию, Нидерланды, Испанию, Казахстан, ОАЭ, Саудовскую Аравию, Кыргызстан</strong> и Албанию. Каждая сделка — по договору.',
    'about.stat1.label':  'Лет на рынке',
    'about.stat2.label':  'Экспортировано авто',
    'about.stat3.label':  'Стран доставки',
    'about.stat4.label':  'Прозрачность',

    'srv.tag':        'Услуги',
    'srv.h2':         'От подбора<br>до ключей',
    'srv.editorial':  'Берём на себя всё — вам только принять машину',
    'srv.1.title':    'Подбор автомобиля',
    'srv.1.body':     'Смотрим корейский рынок и находим нужную машину — по марке, комплектации, цвету и бюджету.',
    'srv.1.details':  'Рассказываете о своих пожеланиях — марка, бюджет, пробег, цвет. Мы ищем по всему корейскому рынку: официальные дилеры, аукционы, частные продавцы. Присылаем подборку с фото, полным отчётом о состоянии и разбивкой цены — до того, как вы примете решение.',
    'srv.2.title':    'Оформление и выкуп',
    'srv.2.body':     'Выкупаем у официальных дилеров по договору. Полное юридическое сопровождение.',
    'srv.2.details':  'После вашего согласия выкупаем автомобиль у официального дилера по письменному договору. Готовим все документы под требования страны назначения. Копии каждого документа отправляем вам на каждом этапе - никаких пробелов в информации.',
    'srv.3.title':    'Международная доставка',
    'srv.3.body':     'Доставляем в Германию, Нидерланды, Испанию, Казахстан, ОАЭ, Саудовскую Аравию, Кыргызстан и Албанию. Морской и автомобильный транспорт.',
    'srv.3.details':  'Работаем с проверенными партнёрами по морскому и автомобильному фрахту. Примерные сроки: Европа — 25-35 дней, Центральная Азия — 15-20 дней, Ближний Восток — 20-30 дней. Автомобиль застрахован на весь период перевозки. Вы получаете ссылку для отслеживания и регулярные обновления.',
    'srv.4.title':    'Гарантия и поддержка',
    'srv.4.body':     'Всегда на связи по WhatsApp. Никаких скрытых платежей и сюрпризов.',
    'srv.4.details':  'Остаёмся на связи и после доставки. Вопросы по таможне, документам или техническому состоянию — пишите в WhatsApp. Каждая сделка сопровождается письменной гарантией и оригиналами всех документов о покупке.',

    'cat.tag':          'Каталог',
    'cat.h2':           'Автомобили<br><em style="font-family:var(--fe);font-style:italic;font-weight:300;color:var(--gold)">в наличии</em>',
    'cat.flt.all':      'Все',
    'cat.flt.sedan':    'Седаны',
    'cat.flt.suv':      'SUV',
    'cat.flt.electric': 'Электро',
    'cat.flt.premium':  'Премиум',
    'cat.btn':          '→ Написать нам',
    'car.overlay':      'Смотреть фото',

    'rev.tag':      'Отзывы',
    'rev.h2':       'Что говорят<br>клиенты',
    'rev.1.text':   '«Заказывал Genesis GV80 — всё прошло без лишней суеты. Менеджер всегда на связи, машина приехала раньше срока.»',
    'rev.1.city':   '🇷🇺 Москва, Россия',
    'rev.2.text':   '«Давно хотела Kia EV9. Ребята помогли с выбором, оформили и привезли без вопросов. Спасибо.»',
    'rev.2.city':   '🇰🇿 Алматы, Казахстан',
    'rev.3.text':   '«Брал Toyota LC300 для работы. Цена честная, сроки чёткие, привезли точно в срок. Всё как договаривались.»',
    'rev.3.name':   'Томас К.',
    'rev.3.city':   '🇩🇪 Гамбург, Германия',
    'rev.4.text':   '«Второй раз в AurenCars. BMW M5 оформили быстро, всё по договору. Лучший вариант для импорта.»',
    'rev.4.city':   '🇷🇺 Санкт-Петербург',
    'rev.5.text':   '«Несколько недель искал Genesis G80. Ребята помогли сузить выбор и доставили в Роттердам в идеальном состоянии.»',
    'rev.5.name':   'Ларс В.',
    'rev.5.city':   '🇳🇱 Роттердам, Нидерланды',
    'rev.6.text':   '«Заказывал Kia Carnival для семьи. Хорошая связь, адекватные сроки, машина пришла именно такой, как описывали.»',
    'rev.6.name':   'Ахмед К.',
    'rev.6.city':   '🇦🇪 Дубай, ОАЭ',

    'con.tag':              'Контакты',
    'con.h2':               'Оставьте заявку',
    'con.editorial':        'Ответим в течение часа',
    'con.hours.label':      'Режим работы',
    'con.hours.val':        'Пн-Сб 9:00-21:00 (KST)',
    'con.loc.label':        'Расположение',
    'con.loc.val':          'Yeonsu-gu, Central-ro 313, Incheon',
    'con.form.name':        'Ваше имя *',
    'con.form.phone':       'Телефон *',
    'con.form.car':         'Желаемый автомобиль',
    'con.form.msg':         'Сообщение',
    'con.form.submit':      '→ Отправить заявку',
    'con.form.note':        'Нажимая кнопку, вы соглашаетесь с обработкой персональных данных',
    'con.form.name.ph':     'Иван Иванов',
    'con.form.phone.ph':    '+7 (___) ___-__-__',
    'con.form.car.ph':      'BMW X5, Audi A6...',
    'con.form.msg.ph':      'Расскажите о пожеланиях...',

    'toast.title':    '✓ Заявка отправлена',
    'toast.msg':      'Мы свяжемся с вами в течение часа.',

    'foot.brand':         'Машины из Кореи — по всему миру. Работаем с 2014 года.',
    'foot.nav.h':         'Навигация',
    'foot.nav.about':     'О компании',
    'foot.nav.services':  'Услуги',
    'foot.nav.catalog':   'Каталог 2026',
    'foot.nav.reviews':   'Отзывы',
    'foot.nav.contact':   'Контакты',
    'foot.con.h':         'Контакты',
    'foot.loc':           'Yeonsu-gu, Central-ro 313, Incheon',
    'foot.hours':         'Пн-Сб 9:00-21:00 KST',
    'foot.copy':          '© 2014-2025 AurenCars. Все права защищены.',
    'foot.privacy':       'Политика конфиденциальности',
  },

  en: {
    'nav.about':        'About',
    'nav.services':     'Services',
    'nav.catalog':      'Catalog',
    'nav.reviews':      'Reviews',
    'nav.contact':      'Contact',
    'nav.cta':          'Consultation',
    'nav.mob.cta':      'Get consultation',

    'hero.tag':           'Cars from South Korea',
    'hero.h1':            'Your<br>perfect<br><em>car</em>',
    'hero.sub':           'We source and ship cars from Korea to Germany, Netherlands, Spain, Kazakhstan, UAE, Saudi Arabia, Kyrgyzstan and Albania.',
    'hero.btn1':          '→ Find my car',
    'hero.btn2':          'Catalog 2026',
    'hero.num1.label':    'Years in business',
    'hero.num2.label':    'Vehicles exported',
    'hero.num3.label':    'Countries',
    'hero.scroll':        'Scroll',

    'about.tag':          'About us',
    'about.h2':           '11 years.<br>One goal.',
    'about.editorial':    'Straight talk, no fluff — every single deal',
    'about.body1':        '<strong>AurenCars</strong> has been working out of Korea for 11 years. Direct with Korean dealers — no middlemen.',
    'about.body2':        'We ship to <strong>Germany, Netherlands, Spain, Kazakhstan, UAE, Saudi Arabia, Kyrgyzstan</strong> and Albania. Every deal comes with a contract.',
    'about.stat1.label':  'Years in business',
    'about.stat2.label':  'Vehicles exported',
    'about.stat3.label':  'Delivery countries',
    'about.stat4.label':  'Transparency',

    'srv.tag':        'Services',
    'srv.h2':         'From search<br>to keys',
    'srv.editorial':  'We handle everything — you just pick up the car',
    'srv.1.title':    'Car selection',
    'srv.1.body':     'We scan the Korean market and find the right car — by make, trim, colour and budget.',
    'srv.1.details':  'Tell us what you want — make, budget, mileage, colour. We search the full Korean market: official dealers, auctions, private sellers. We send you a shortlist with photos, a full condition report and a price breakdown before you make any decision.',
    'srv.2.title':    'Purchase & paperwork',
    'srv.2.body':     'We buy from official dealers under contract. Full legal support included.',
    'srv.2.details':  'After your approval we purchase the car from an official dealer under a written contract. We prepare all documents to the requirements of your destination country. You receive copies of every document at each stage - no gaps in information.',
    'srv.3.title':    'International shipping',
    'srv.3.body':     'We ship to Germany, Netherlands, Spain, Kazakhstan, UAE, Saudi Arabia, Kyrgyzstan and Albania. Sea and road freight.',
    'srv.3.details':  'We work with reliable freight partners for sea and road transport. Typical transit times: Europe 25-35 days, Central Asia 15-20 days, Middle East 20-30 days. Your car is fully insured during transport. You get a tracking link and regular updates.',
    'srv.4.title':    'Support & guarantee',
    'srv.4.body':     'Always reachable on WhatsApp. No hidden fees, no surprises at the end.',
    'srv.4.details':  "We stay with you after delivery too. Questions about customs, documents or the car's condition — message us on WhatsApp. Every transaction comes with a written guarantee and all original purchase documents.",

    'cat.tag':          'Catalog',
    'cat.h2':           'Available<br><em style="font-family:var(--fe);font-style:italic;font-weight:300;color:var(--gold)">vehicles</em>',
    'cat.flt.all':      'All',
    'cat.flt.sedan':    'Sedans',
    'cat.flt.suv':      'SUV',
    'cat.flt.electric': 'Electric',
    'cat.flt.premium':  'Premium',
    'cat.btn':          '→ Inquire',
    'car.overlay':      'View photos',

    'rev.tag':      'Reviews',
    'rev.h2':       'What our<br>clients say',
    'rev.1.text':   '"Ordered a Genesis GV80 - no fuss at all. The manager was always available and the car arrived ahead of schedule."',
    'rev.1.city':   '🇷🇺 Moscow, Russia',
    'rev.2.text':   '"I\'d wanted a Kia EV9 for ages. They helped me choose, handled all the paperwork and got it delivered without a hitch."',
    'rev.2.city':   '🇰🇿 Almaty, Kazakhstan',
    'rev.3.text':   '"Got a Toyota LC300 for work. Fair price, clear timeline, delivered right on time. Exactly as agreed."',
    'rev.3.name':   'Thomas K.',
    'rev.3.city':   '🇩🇪 Hamburg, Germany',
    'rev.4.text':   '"Second time with AurenCars. The BMW M5 was sorted fast, everything by the contract. Best option for imports."',
    'rev.4.city':   '🇷🇺 Saint Petersburg',
    'rev.5.text':   '"Spent weeks looking for a Genesis G80. The team helped me narrow it down and got it shipped to Rotterdam in perfect condition."',
    'rev.5.name':   'Lars V.',
    'rev.5.city':   '🇳🇱 Rotterdam, Netherlands',
    'rev.6.text':   '"Ordered a Kia Carnival for the family. Good communication, reasonable timeline, car arrived exactly as described."',
    'rev.6.name':   'Ahmed K.',
    'rev.6.city':   '🇦🇪 Dubai, UAE',

    'con.tag':              'Contact',
    'con.h2':               'Get in touch',
    'con.editorial':        "We'll reply within an hour",
    'con.hours.label':      'Working hours',
    'con.hours.val':        'Mon-Sat 9:00-21:00 (KST)',
    'con.loc.label':        'Location',
    'con.loc.val':          'Yeonsu-gu, Central-ro 313, Incheon',
    'con.form.name':        'Your name *',
    'con.form.phone':       'Phone *',
    'con.form.car':         'Desired car',
    'con.form.msg':         'Message',
    'con.form.submit':      '→ Send request',
    'con.form.note':        'By clicking, you agree to the processing of personal data',
    'con.form.name.ph':     'John Smith',
    'con.form.phone.ph':    '+49 (___) ___-____',
    'con.form.car.ph':      'BMW X5, Audi A6...',
    'con.form.msg.ph':      'Tell us what you are looking for...',

    'toast.title':    '✓ Request sent',
    'toast.msg':      "We'll get back to you within an hour.",

    'foot.brand':         'Korean cars delivered worldwide. In business since 2014.',
    'foot.nav.h':         'Navigation',
    'foot.nav.about':     'About',
    'foot.nav.services':  'Services',
    'foot.nav.catalog':   'Catalog 2026',
    'foot.nav.reviews':   'Reviews',
    'foot.nav.contact':   'Contact',
    'foot.con.h':         'Contact',
    'foot.loc':           'Yeonsu-gu, Central-ro 313, Incheon',
    'foot.hours':         'Mon-Sat 9:00-21:00 KST',
    'foot.copy':          '© 2014-2025 AurenCars. All rights reserved.',
    'foot.privacy':       'Privacy Policy',
  }
};

function initLang() {
  const saved = localStorage.getItem('lang') || 'ru';
  setLang(saved);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  const dict = T[lang] || T.ru;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });
}
