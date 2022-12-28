// IIFE - Imediatly invoked function expression
(() => {
  const square = document.querySelector('.js-square-1');
  const btn = document.querySelector('.js-btn-1');
  
  const changeSquareColor = () => {
    square.style.background = 'red';
  }
  
  btn.addEventListener('click', changeSquareColor);
})()