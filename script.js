document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 850, easing: 'ease-out-cubic', once: true, offset: 70 });
  initNav();
  initParallax();
  initCounters();
  initFilter();
  initForm();
  initMobile();
  initParticles();
  initLang();
});

/* ── NAV SCROLL ── */
function initNav() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('on', window.scrollY > 70);
  }, { passive: true });
}

/* ── PARALLAX (hero bg + text only) ── */
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

function formatNum(n) {
  if (n >= 1000) {
    const thousands = Math.floor(n / 1000);
    const hundreds  = String(n % 1000).padStart(3, '0');
    return thousands + ' ' + hundreds;
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

/* ── LANGUAGE ── */
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
    'hero.btn2':          'Каталог 2025',
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
    'srv.2.title':    'Оформление и выкуп',
    'srv.2.body':     'Выкупаем у официальных дилеров по договору. Полное юридическое сопровождение.',
    'srv.3.title':    'Международная доставка',
    'srv.3.body':     'Доставляем в Германию, Нидерланды, Испанию, Казахстан, ОАЭ, Саудовскую Аравию, Кыргызстан и Албанию. Морской и автомобильный транспорт.',
    'srv.4.title':    'Гарантия и поддержка',
    'srv.4.body':     'Всегда на связи по WhatsApp. Никаких скрытых платежей и сюрпризов.',

    'cat.tag':        'Каталог',
    'cat.h2':         'Модели<br><em style="font-family:var(--fe);font-style:italic;font-weight:300;color:var(--gold)">2025 года</em>',
    'cat.flt.all':    'Все модели',
    'cat.flt.sedan':  'Седаны',
    'cat.flt.suv':    'SUV',
    'cat.flt.electric': 'Электро',
    'cat.flt.premium':  'Премиум',
    'cat.price':      'Цена по запросу',
    'cat.btn':        'Узнать цену →',

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

    'con.tag':              'Контакты',
    'con.h2':               'Оставьте заявку',
    'con.editorial':        'Ответим в течение часа',
    'con.hours.label':      'Режим работы',
    'con.hours.val':        'Пн–Сб 9:00–21:00 (Seoul)',
    'con.loc.label':        'Расположение',
    'con.loc.val':          'Южная Корея, Сеул',
    'con.form.name':        'Ваше имя *',
    'con.form.phone':       'Телефон *',
    'con.form.car':         'Желаемый автомобиль',
    'con.form.msg':         'Сообщение',
    'con.form.submit':      '→ Отправить заявку',
    'con.form.note':        'Нажимая кнопку, вы соглашаетесь с обработкой персональных данных',
    'con.form.name.ph':     'Иван Иванов',
    'con.form.phone.ph':    '+7 (___) ___-__-__',
    'con.form.car.ph':      'Genesis GV80, BMW M5...',
    'con.form.msg.ph':      'Расскажите о пожеланиях...',

    'toast.title':    '✓ Заявка отправлена',
    'toast.msg':      'Мы свяжемся с вами в течение часа.',

    'foot.brand':         'Машины из Кореи — по всему миру. Работаем с 2014 года.',
    'foot.nav.h':         'Навигация',
    'foot.nav.about':     'О компании',
    'foot.nav.services':  'Услуги',
    'foot.nav.catalog':   'Каталог 2025',
    'foot.nav.reviews':   'Отзывы',
    'foot.nav.contact':   'Контакты',
    'foot.con.h':         'Контакты',
    'foot.loc':           'Южная Корея, Сеул',
    'foot.hours':         'Пн–Сб 9:00–21:00 KST',
    'foot.copy':          '© 2014–2025 AurenCars. Все права защищены.',
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
    'hero.btn2':          'Catalog 2025',
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
    'srv.2.title':    'Purchase & paperwork',
    'srv.2.body':     'We buy from official dealers under contract. Full legal support included.',
    'srv.3.title':    'International shipping',
    'srv.3.body':     'We ship to Germany, Netherlands, Spain, Kazakhstan, UAE, Saudi Arabia, Kyrgyzstan and Albania. Sea and road freight.',
    'srv.4.title':    'Support & guarantee',
    'srv.4.body':     'Always reachable on WhatsApp. No hidden fees, no surprises at the end.',

    'cat.tag':        'Catalog',
    'cat.h2':         'Models<br><em style="font-family:var(--fe);font-style:italic;font-weight:300;color:var(--gold)">2025</em>',
    'cat.flt.all':    'All models',
    'cat.flt.sedan':  'Sedans',
    'cat.flt.suv':    'SUV',
    'cat.flt.electric': 'Electric',
    'cat.flt.premium':  'Premium',
    'cat.price':      'Price on request',
    'cat.btn':        'Get price →',

    'rev.tag':      'Reviews',
    'rev.h2':       'What our<br>clients say',
    'rev.1.text':   '"Ordered a Genesis GV80 — no fuss at all. The manager was always available and the car arrived ahead of schedule."',
    'rev.1.city':   '🇷🇺 Moscow, Russia',
    'rev.2.text':   '"I\'d wanted a Kia EV9 for ages. They helped me choose, handled all the paperwork and got it delivered without a hitch."',
    'rev.2.city':   '🇰🇿 Almaty, Kazakhstan',
    'rev.3.text':   '"Got a Toyota LC300 for work. Fair price, clear timeline, delivered right on time. Exactly as agreed."',
    'rev.3.name':   'Thomas K.',
    'rev.3.city':   '🇩🇪 Hamburg, Germany',
    'rev.4.text':   '"Second time with AurenCars. The BMW M5 was sorted fast, everything by the contract. Best option for imports."',
    'rev.4.city':   '🇷🇺 Saint Petersburg',

    'con.tag':              'Contact',
    'con.h2':               'Get in touch',
    'con.editorial':        "We'll reply within an hour",
    'con.hours.label':      'Working hours',
    'con.hours.val':        'Mon–Sat 9:00–21:00 (Seoul)',
    'con.loc.label':        'Location',
    'con.loc.val':          'South Korea, Seoul',
    'con.form.name':        'Your name *',
    'con.form.phone':       'Phone *',
    'con.form.car':         'Desired car',
    'con.form.msg':         'Message',
    'con.form.submit':      '→ Send request',
    'con.form.note':        'By clicking, you agree to the processing of personal data',
    'con.form.name.ph':     'John Smith',
    'con.form.phone.ph':    '+49 (___) ___-____',
    'con.form.car.ph':      'Genesis GV80, BMW M5...',
    'con.form.msg.ph':      'Tell us what you are looking for...',

    'toast.title':    '✓ Request sent',
    'toast.msg':      "We'll get back to you within an hour.",

    'foot.brand':         'Korean cars delivered worldwide. In business since 2014.',
    'foot.nav.h':         'Navigation',
    'foot.nav.about':     'About',
    'foot.nav.services':  'Services',
    'foot.nav.catalog':   'Catalog 2025',
    'foot.nav.reviews':   'Reviews',
    'foot.nav.contact':   'Contact',
    'foot.con.h':         'Contact',
    'foot.loc':           'South Korea, Seoul',
    'foot.hours':         'Mon–Sat 9:00–21:00 KST',
    'foot.copy':          '© 2014–2025 AurenCars. All rights reserved.',
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
