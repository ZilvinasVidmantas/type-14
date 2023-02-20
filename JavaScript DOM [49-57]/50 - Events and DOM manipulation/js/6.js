// IIFE - Imediatly invoked function expression
(() => {
  const square = document.querySelector('.js-square-6');

  const changeSquareColor = () => {
    square.classList.toggle('bg-red');
  }

  square.addEventListener('click', changeSquareColor);
})()