// AOS Init
AOS.init({
  duration: 1000,
  once: true
});

// Light/Dark Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-bs-theme', newTheme);
});