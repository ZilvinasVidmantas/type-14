// IIFE - Imediatly invoked function expression
(() => {
  const square = document.querySelector('.js-square-7');
  const btn = document.querySelector('.js-btn-7');

  const changeVisibility = () => {
    square.classList.toggle('d-none');
    if (square.classList.contains('d-none')) {
      btn.textContent = 'Rodyti';
    } else {
      btn.textContent = 'Slėpti';
    }
  }

  btn.addEventListener('click', changeVisibility);
})()