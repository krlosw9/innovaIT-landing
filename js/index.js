
const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');
const mainNav = document.getElementById('main-nav');
const logo = document.getElementById('logo');

toggleMenuElement.addEventListener('click', () => {
  mainMenuElement.classList.toggle('main-menu--show');
  mainNav.classList.toggle('move-content');
  logo.classList.toggle('hide-content');
})