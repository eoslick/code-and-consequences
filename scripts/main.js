const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});
