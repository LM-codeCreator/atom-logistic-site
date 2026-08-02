// Meniu mobil
const navToggle = document.getElementById('navToggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // închide meniul după click pe un link (mobil)
  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
    });
  });
}

// Comutator de limbă — vizual momentan; extindeți cu traduceri reale ulterior
document.querySelectorAll('.lang-switch button').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-switch button').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
