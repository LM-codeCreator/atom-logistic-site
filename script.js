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

// ---------- Formular contact → mailto (fără avertisment "not secure") ----------

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // capcană anti-spam: dacă e completat câmpul ascuns, nu trimitem nimic
    const honeypot = contactForm.querySelector('#company');
    if (honeypot && honeypot.value.trim() !== '') return;

    const name = contactForm.querySelector('#name')?.value.trim() || '';
    const email = contactForm.querySelector('#email')?.value.trim() || '';
    const type = contactForm.querySelector('#type')?.value.trim() || '';
    const details = contactForm.querySelector('#details')?.value.trim() || '';

    const subject = `Solicitare ofertă – ${name || 'Website'}`;
    const bodyLines = [
      `Nume: ${name}`,
      `Email: ${email}`,
      type ? `Tip transport: ${type}` : null,
      '',
      'Detalii:',
      details
    ].filter((line) => line !== null);

    const mailtoUrl =
      `mailto:office@atom-logistic.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailtoUrl;
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
