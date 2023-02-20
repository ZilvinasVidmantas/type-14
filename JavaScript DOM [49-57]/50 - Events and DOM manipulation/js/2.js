// IIFE - Imediatly invoked function expression
(() => {
  const square = document.querySelector('.js-square-2');

  const changeSquareColor = () => {
    square.style.background = 'red';
  }

  square.addEventListener('click', changeSquareColor);
})()