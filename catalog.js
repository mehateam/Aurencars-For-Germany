/* ─────────────────────────────────────────────
   AURENCARS CATALOG — i18n, filters, grid, lightbox
───────────────────────────────────────────── */

const CATALOG_T = {
  ru: {
    'nav.about':        'О нас',
    'nav.services':     'Услуги',
    'nav.catalog':      'Каталог',
    'nav.reviews':      'Отзывы',
    'nav.contact':      'Контакты',
    'nav.cta':          'Консультация',
    'nav.mob.cta':      'Получить консультацию',

    'page.tag':         'Каталог',
    'page.h2':          'Каталог<br>автомобилей',
    'page.sub':         'Актуальные автомобили из Южной Кореи — фильтруйте по году, марке, модели, пробегу и бюджету.',

    'filter.year':      'Год',
    'filter.brand':     'Марка',
    'filter.model':     'Модель',
    'filter.mileage':   'Пробег',
    'filter.budget':    'Бюджет',
    'filter.clear':     'Сбросить',
    'filter.clearAll':  'Сбросить все',
    'filter.noOptions': 'Нет доступных вариантов',

    'status.available': 'В наличии',
    'status.sold':      'Продано',

    'v.viewDetails':    'Подробнее',
    'v.year':           'Год',
    'v.mileage':        'Пробег',
    'v.price':          'Цена',
    'v.status':         'Статус',

    'loading':          'Загрузка автомобилей…',
    'empty.none':       'Автомобили скоро появятся. Свяжитесь с нами, чтобы узнать о наличии.',
    'empty.filtered':   'Нет автомобилей, соответствующих выбранным фильтрам.',
    'cat.btn':          '→ Написать нам',

    'foot.brand':       'Машины из Кореи — по всему миру. Работаем с 2014 года.',
    'foot.nav.h':       'Навигация',
    'foot.nav.about':   'О компании',
    'foot.nav.services':'Услуги',
    'foot.nav.catalog': 'Каталог 2026',
    'foot.nav.reviews': 'Отзывы',
    'foot.nav.contact': 'Контакты',
    'foot.con.h':       'Контакты',
    'foot.loc':         'Yeonsu-gu, Central-ro 313, Incheon',
    'foot.hours':       'Пн-Сб 9:00-21:00 KST',
    'foot.copy':        '© 2014-2025 AurenCars. Все права защищены.',
    'foot.privacy':     'Политика конфиденциальности',
  },
  en: {
    'nav.about':        'About',
    'nav.services':     'Services',
    'nav.catalog':      'Catalog',
    'nav.reviews':      'Reviews',
    'nav.contact':      'Contact',
    'nav.cta':          'Consultation',
    'nav.mob.cta':      'Get consultation',

    'page.tag':         'Catalog',
    'page.h2':          'Vehicle<br>Catalog',
    'page.sub':         'Current vehicles from South Korea — filter by year, brand, model, mileage and budget.',

    'filter.year':      'Year',
    'filter.brand':     'Brand',
    'filter.model':     'Model',
    'filter.mileage':   'Mileage',
    'filter.budget':    'Budget',
    'filter.clear':     'Clear',
    'filter.clearAll':  'Clear all',
    'filter.noOptions': 'No options available',

    'status.available': 'Available',
    'status.sold':      'Sold',

    'v.viewDetails':    'View details',
    'v.year':           'Year',
    'v.mileage':        'Mileage',
    'v.price':          'Price',
    'v.status':         'Status',

    'loading':          'Loading vehicles…',
    'empty.none':       'New vehicles coming soon. Contact us to ask about availability.',
    'empty.filtered':   'No vehicles match your filters.',
    'cat.btn':          '→ Inquire',

    'foot.brand':       'Korean cars delivered worldwide. In business since 2014.',
    'foot.nav.h':       'Navigation',
    'foot.nav.about':   'About',
    'foot.nav.services':'Services',
    'foot.nav.catalog': 'Catalog 2026',
    'foot.nav.reviews': 'Reviews',
    'foot.nav.contact': 'Contact',
    'foot.con.h':       'Contact',
    'foot.loc':         'Yeonsu-gu, Central-ro 313, Incheon',
    'foot.hours':       'Mon-Sat 9:00-21:00 KST',
    'foot.copy':        '© 2014-2025 AurenCars. All rights reserved.',
    'foot.privacy':     'Privacy Policy',
  }
};

let currentLang = localStorage.getItem('lang') || 'ru';

function t(key) {
  const dict = CATALOG_T[currentLang] || CATALOG_T.ru;
  return dict[key] !== undefined ? dict[key] : key;
}

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

/* ─── MILEAGE / PRICE BUCKETS ── */
const MILEAGE_RANGES = [
  { key: 'm0', min: 0,      max: 10000,   label: { ru: 'До 10 000 км',          en: 'Under 10,000 km' } },
  { key: 'm1', min: 10000,  max: 30000,   label: { ru: '10 000 – 30 000 км',    en: '10,000 – 30,000 km' } },
  { key: 'm2', min: 30000,  max: 60000,   label: { ru: '30 000 – 60 000 км',    en: '30,000 – 60,000 km' } },
  { key: 'm3', min: 60000,  max: 100000,  label: { ru: '60 000 – 100 000 км',   en: '60,000 – 100,000 km' } },
  { key: 'm4', min: 100000, max: Infinity, label: { ru: 'Более 100 000 км',     en: 'Over 100,000 km' } },
];
const PRICE_RANGES = [
  { key: 'p0', min: 0,      max: 20000,   label: { ru: 'До $20 000',            en: 'Under $20,000' } },
  { key: 'p1', min: 20000,  max: 40000,   label: { ru: '$20 000 – $40 000',     en: '$20,000 – $40,000' } },
  { key: 'p2', min: 40000,  max: 60000,   label: { ru: '$40 000 – $60 000',     en: '$40,000 – $60,000' } },
  { key: 'p3', min: 60000,  max: 100000,  label: { ru: '$60 000 – $100 000',    en: '$60,000 – $100,000' } },
  { key: 'p4', min: 100000, max: Infinity, label: { ru: 'Более $100 000',       en: 'Over $100,000' } },
];

const FILTER_PILL_TO_KEY = { year: 'year', brand: 'brand', model: 'model', mileage: 'mileage', budget: 'price' };

const filters = {
  year:    new Set(),
  brand:   new Set(),
  model:   new Set(),
  mileage: new Set(),
  price:   new Set(),
};

let vehicles = [];

/* ─── NAV SCROLL ── */
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('on', window.scrollY > 70);
  }, { passive: true });
}

/* ─── MOBILE MENU ── */
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

/* ─── LANGUAGE ── */
function initLang() {
  setLang(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  const dict = CATALOG_T[lang] || CATALOG_T.ru;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  // Re-localize dynamic content
  populateFilters();
  updateAllBadges();
  renderGrid();
}

/* ─── FORMATTING ── */
function fmtPrice(n) { return '$' + Number(n || 0).toLocaleString('en-US'); }
function fmtMileage(n) { return Number(n || 0).toLocaleString('en-US') + ' km'; }

/* ─── FILTER PANEL POPULATION ── */
function buildCheckList(containerId, options, filterKey) {
  const container = document.getElementById(containerId);
  if (!options.length) {
    container.innerHTML = `<div class="filter-empty-msg">${t('filter.noOptions')}</div>`;
    return;
  }
  container.innerHTML = options.map((opt, i) => {
    const id = `chk-${filterKey}-${i}`;
    const checked = filters[filterKey].has(opt.key) ? 'checked' : '';
    return `<label class="filter-check" for="${id}">
      <input type="checkbox" id="${id}" data-filter="${filterKey}" data-value="${escapeHtml(opt.key)}" ${checked}>
      ${escapeHtml(opt.label)}
    </label>`;
  }).join('');
}

function populateFilters() {
  const years  = [...new Set(vehicles.map(v => v.year))].sort((a, b) => b - a);
  const brands = [...new Set(vehicles.map(v => v.brand).filter(Boolean))].sort((a, b) => a.localeCompare(b));
  const models = [...new Set(vehicles.map(v => v.model).filter(Boolean))].sort((a, b) => a.localeCompare(b));

  buildCheckList('list-year',  years.map(y => ({ key: String(y), label: String(y) })), 'year');
  buildCheckList('list-brand', brands.map(b => ({ key: b, label: b })), 'brand');
  buildCheckList('list-model', models.map(m => ({ key: m, label: m })), 'model');
  buildCheckList('list-mileage', MILEAGE_RANGES.map(r => ({ key: r.key, label: r.label[currentLang] || r.label.ru })), 'mileage');
  buildCheckList('list-budget',  PRICE_RANGES.map(r => ({ key: r.key, label: r.label[currentLang] || r.label.ru })), 'price');
}

function updateAllBadges() {
  Object.entries(FILTER_PILL_TO_KEY).forEach(([pillKey, filterKey]) => {
    const badge = document.getElementById('badge-' + pillKey);
    const pill  = document.querySelector(`.filter-pill[data-key="${pillKey}"]`);
    const n = filters[filterKey].size;
    if (badge) {
      badge.textContent = n;
      badge.style.display = n ? 'flex' : 'none';
    }
    if (pill) pill.classList.toggle('active', n > 0);
  });
  const anyActive = Object.values(filters).some(s => s.size);
  document.getElementById('clearAllBtn').style.display = anyActive ? '' : 'none';
}

/* ─── FILTER MATCHING ── */
function matchesFilters(v) {
  if (filters.year.size && !filters.year.has(String(v.year))) return false;
  if (filters.brand.size && !filters.brand.has(v.brand)) return false;
  if (filters.model.size && !filters.model.has(v.model)) return false;
  if (filters.mileage.size) {
    const ok = [...filters.mileage].some(key => {
      const r = MILEAGE_RANGES.find(x => x.key === key);
      return r && v.mileage >= r.min && v.mileage < r.max;
    });
    if (!ok) return false;
  }
  if (filters.price.size) {
    const ok = [...filters.price].some(key => {
      const r = PRICE_RANGES.find(x => x.key === key);
      return r && v.price >= r.min && v.price < r.max;
    });
    if (!ok) return false;
  }
  return true;
}

/* ─── GRID RENDER ── */
function show(el) { el.style.display = ''; }
function hide(el) { el.style.display = 'none'; }

function renderGrid() {
  const grid          = document.getElementById('vGrid');
  const emptyNone     = document.getElementById('emptyNone');
  const emptyFiltered = document.getElementById('emptyFiltered');

  if (!vehicles.length) {
    grid.innerHTML = '';
    show(emptyNone);
    hide(emptyFiltered);
    return;
  }

  const filtered = vehicles.filter(matchesFilters);

  if (!filtered.length) {
    grid.innerHTML = '';
    hide(emptyNone);
    show(emptyFiltered);
    return;
  }

  hide(emptyNone);
  hide(emptyFiltered);
  grid.innerHTML = filtered.map(cardHtml).join('');

  grid.querySelectorAll('.v-card').forEach(card => {
    card.addEventListener('click', () => {
      const v = vehicles.find(x => x.id === card.dataset.id);
      if (v) openLb(v);
    });
  });
}

function cardHtml(v) {
  const photo = v.photos && v.photos[0];
  const statusClass = v.status === 'sold' ? 'v-status--sold' : 'v-status--available';
  const statusLabel = v.status === 'sold' ? t('status.sold') : t('status.available');
  const trim = v.trim ? ` · ${escapeHtml(v.trim)}` : '';
  return `
    <div class="v-card" data-id="${escapeHtml(v.id)}" data-status="${v.status === 'sold' ? 'sold' : 'available'}">
      <div class="v-img">
        ${photo
          ? `<img src="${escapeHtml(photo)}" loading="lazy" alt="${escapeHtml(v.brand)} ${escapeHtml(v.model)}">`
          : `<div class="v-img-fb">AURENCARS</div>`}
        <span class="v-status ${statusClass}">${statusLabel}</span>
        <div class="v-overlay"><span>${t('v.viewDetails')}</span></div>
      </div>
      <div class="v-body">
        <div class="v-name">${escapeHtml(v.brand)} ${escapeHtml(v.model)}</div>
        <div class="v-spec">${v.year}${trim}</div>
        <div class="v-meta">
          <span class="v-mileage">${fmtMileage(v.mileage)}</span>
          <span class="v-price">${fmtPrice(v.price)}</span>
        </div>
      </div>
    </div>`;
}

/* ─── LIGHTBOX ── */
let lbVehicle = null;
let lbIndex = 0;

function openLb(v) {
  lbVehicle = v;
  lbIndex = 0;
  document.getElementById('lbTitle').textContent = `${v.brand} ${v.model}`;
  renderLbPhoto();
  renderLbInfo();
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLb() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function lbNav(dir) {
  const photos = (lbVehicle && lbVehicle.photos) || [];
  if (photos.length < 2) return;
  lbIndex = (lbIndex + dir + photos.length) % photos.length;
  renderLbPhoto();
}

function renderLbPhoto() {
  const photos = (lbVehicle && lbVehicle.photos) || [];
  const img     = document.getElementById('lbImg');
  const imgFb   = document.getElementById('lbImgFb');
  const counter = document.getElementById('lbCounter');
  const strip   = document.getElementById('lbStrip');
  const prev    = document.getElementById('lbPrev');
  const next    = document.getElementById('lbNext');

  if (!photos.length) {
    img.style.display = 'none';
    imgFb.style.display = 'flex';
    counter.textContent = '';
    strip.innerHTML = '';
    prev.style.display = 'none';
    next.style.display = 'none';
    return;
  }

  img.style.display = '';
  imgFb.style.display = 'none';
  const showArrows = photos.length > 1;
  prev.style.display = showArrows ? '' : 'none';
  next.style.display = showArrows ? '' : 'none';

  img.classList.add('lb-loading');
  img.onload = () => img.classList.remove('lb-loading');
  img.src = photos[lbIndex];
  counter.textContent = `${lbIndex + 1} / ${photos.length}`;

  strip.innerHTML = photos.map((p, i) =>
    `<img class="lb-thumb ${i === lbIndex ? 'active' : ''}" src="${escapeHtml(p)}" data-i="${i}">`
  ).join('');
  strip.querySelectorAll('.lb-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      lbIndex = +thumb.dataset.i;
      renderLbPhoto();
    });
  });
}

function renderLbInfo() {
  const v = lbVehicle;
  const statusLabel = v.status === 'sold' ? t('status.sold') : t('status.available');
  const yearLine = v.trim ? `${v.year} · ${escapeHtml(v.trim)}` : `${v.year}`;
  let html = `
    <div class="lb-info-item"><span class="lb-info-label">${t('v.year')}</span>${yearLine}</div>
    <div class="lb-info-item"><span class="lb-info-label">${t('v.mileage')}</span>${fmtMileage(v.mileage)}</div>
    <div class="lb-info-item"><span class="lb-info-label">${t('v.price')}</span>${fmtPrice(v.price)}</div>
    <div class="lb-info-item"><span class="lb-info-label">${t('v.status')}</span>${statusLabel}</div>
  `;
  if (v.notes) {
    html += `<div class="lb-info-notes">${escapeHtml(v.notes)}</div>`;
  }
  document.getElementById('lbInfo').innerHTML = html;
}

function initLightbox() {
  document.getElementById('lbCloseBtn').addEventListener('click', closeLb);
  document.getElementById('lbPrev').addEventListener('click', () => lbNav(-1));
  document.getElementById('lbNext').addEventListener('click', () => lbNav(1));
  document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') lbNav(-1);
    if (e.key === 'ArrowRight') lbNav(1);
  });
  document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLb();
  });
}

/* ─── FILTER UI WIRING ── */
function initFilters() {
  // Toggle panels
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      e.stopPropagation();
      const item = pill.closest('.filter-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.filter-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.filter-item.open').forEach(i => i.classList.remove('open'));
  });

  // Checkbox changes
  document.addEventListener('change', (e) => {
    const input = e.target;
    if (input.matches('.filter-check input[type="checkbox"]')) {
      const filterKey = input.dataset.filter;
      const value = input.dataset.value;
      if (input.checked) filters[filterKey].add(value);
      else filters[filterKey].delete(value);
      updateAllBadges();
      renderGrid();
    }
  });

  // Per-panel clear
  document.querySelectorAll('[data-clear]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      filters[btn.dataset.clear].clear();
      populateFilters();
      updateAllBadges();
      renderGrid();
    });
  });

  // Clear all
  document.getElementById('clearAllBtn').addEventListener('click', () => {
    Object.values(filters).forEach(s => s.clear());
    populateFilters();
    updateAllBadges();
    renderGrid();
  });
  document.getElementById('emptyClearBtn').addEventListener('click', () => {
    document.getElementById('clearAllBtn').click();
  });
}

/* ─── DATA LOADING ── */
async function loadVehicles() {
  const loading = document.getElementById('vLoading');
  try {
    const db = firebase.firestore();
    const snap = await db.collection('vehicles').orderBy('order', 'desc').get();
    vehicles = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (err) {
    console.error('Failed to load vehicles:', err);
    vehicles = [];
  }
  hide(loading);
  populateFilters();
  updateAllBadges();
  renderGrid();
}

/* ─── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobile();
  initLang();
  initFilters();
  initLightbox();
  loadVehicles();
});
