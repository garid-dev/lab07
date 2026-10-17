const root = document.documentElement;
const themeColor = document.querySelector('meta[name="theme-color"]');
const themeButton = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-toggle__icon');
const themeLabel = document.querySelector('.theme-toggle__label');
const savedTheme = localStorage.getItem('gallery-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(dark) {
  root.dataset.theme = dark ? 'dark' : 'light';
  themeColor.content = getComputedStyle(root).getPropertyValue('--bg').trim();
  themeButton.setAttribute('aria-pressed', String(dark));
  themeIcon.textContent = dark ? '☀️' : '🌙';
  themeLabel.textContent = dark ? 'Цайвар горим' : 'Харанхуй горим';
}

setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

themeButton.addEventListener('click', () => {
  const dark = root.dataset.theme !== 'dark';
  setTheme(dark);
  localStorage.setItem('gallery-theme', dark ? 'dark' : 'light');
});

function hideLoader() {
  document.body.classList.add('loaded');
}

window.addEventListener('load', () => window.setTimeout(hideLoader, 250), { once: true });
window.setTimeout(hideLoader, 2000);
