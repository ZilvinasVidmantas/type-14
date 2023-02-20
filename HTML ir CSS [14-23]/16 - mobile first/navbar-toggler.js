const toggler = document.querySelector('#navbar-toggler');
const navbarMenu = document.querySelector(toggler.getAttribute('target'));

function togglerNavbarMenu() {
  navbarMenu.classList.toggle('show');
}

toggler.addEventListener('click', togglerNavbarMenu);