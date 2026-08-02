// ============================================
// ATOM LOGISTIC — script principal
// Meniu mobil + comutare funcțională de limbă
// ============================================

// Meniu mobil
const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
    });
  });
}

// ---------- Formular contact → trimis direct pe server (Netlify Forms) ----------

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const payload = {};
    formData.forEach((value, key) => { payload[key] = value; });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData(payload)
    })
      .then(() => {
        contactForm.reset();
        contactForm.querySelectorAll('.form-row:not(.hp-field), button[type="submit"]').forEach((el) => {
          el.style.display = 'none';
        });
        if (formSuccess) formSuccess.style.display = 'block';
      })
      .catch(() => {
        alert('A apărut o eroare la trimitere. Te rugăm să încerci din nou sau să ne scrii direct la office@atom-logistic.eu');
      });
  });
}

// ---------- Comutare limbă (i18n) ----------

// citește o valoare imbricată dintr-un obiect folosind o cheie "a.b.c"
function getTranslation(lang, key) {
  const parts = key.split('.');
  let node = TRANSLATIONS[lang];
  for (const part of parts) {
    if (node == null) return null;
    node = node[part];
  }
  return node;
}

function renderCountriesRow(lang) {
  const row = document.getElementById('countriesRow');
  if (!row) return;
  const list = getTranslation(lang, 'services.countries');
  if (!Array.isArray(list)) return;
  row.innerHTML = list.map((c) => `<span class="country-pill">${c}</span>`).join('');
}

function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = 'ro';

  // text simplu (data-i18n)
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = getTranslation(lang, key);
    if (value != null) el.textContent = value;
  });

  // atribute (ex: meta content) — data-i18n-attr="content:meta.description"
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
    const value = getTranslation(lang, key);
    if (value != null) el.setAttribute(attr, value);
  });

  // listele generate dinamic (țările din serviciul de transport comunitar)
  renderCountriesRow(lang);

  // atribute globale de pagină
  document.documentElement.setAttribute('lang', lang);

  // butoane active
  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // reține alegerea pentru vizita următoare
  try { localStorage.setItem('atomLogisticLang', lang); } catch (e) { /* ignorăm dacă localStorage e indisponibil */ }
}

// click pe butoanele de limbă din header
document.querySelectorAll('.lang-switch button').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

// limba inițială: cea salvată anterior, altfel limba browserului dacă e suportată, altfel RO
(function initLanguage() {
  let saved = null;
  try { saved = localStorage.getItem('atomLogisticLang'); } catch (e) { /* ignor */ }

  if (saved && TRANSLATIONS[saved]) {
    applyLanguage(saved);
    return;
  }

  const browserLang = (navigator.language || 'ro').slice(0, 2).toLowerCase();
  if (TRANSLATIONS[browserLang]) {
    applyLanguage(browserLang);
  }
  // dacă e RO sau nesuportată, conținutul din HTML e deja RO — nu mai facem nimic
})();
