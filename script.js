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

/* ── PARALLAX ── */
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
    return thousands + ' ' + hundreds;
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
    });
  });
}

/* ── SERVICE ACCORDION ── */
function toggleSrv(el) {
  el.classList.toggle('open');
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

    'cat.tag':        'Каталог',
    'cat.h2':         'Модели<br><em style="font-family:var(--fe);font-style:italic;font-weight:300;color:var(--gold)">2026 года</em>',
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
    'con.form.car.ph':      'Genesis GV80, BMW M5...',
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
    'srv.4.details':  'We stay with you after delivery too. Questions about customs, documents or the car\'s condition — message us on WhatsApp. Every transaction comes with a written guarantee and all original purchase documents.',

    'cat.tag':        'Catalog',
    'cat.h2':         'Models<br><em style="font-family:var(--fe);font-style:italic;font-weight:300;color:var(--gold)">2026</em>',
    'cat.flt.all':    'All models',
    'cat.flt.sedan':  'Sedans',
    'cat.flt.suv':    'SUV',
    'cat.flt.electric': 'Electric',
    'cat.flt.premium':  'Premium',
    'cat.price':      'Price on request',
    'cat.btn':        'Get price →',

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
    'con.form.car.ph':      'Genesis GV80, BMW M5...',
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
