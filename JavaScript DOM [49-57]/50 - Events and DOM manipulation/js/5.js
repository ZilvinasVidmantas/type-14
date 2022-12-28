// IIFE - Imediatly invoked function expression
(() => {
  const square = document.querySelector('.js-square-5');
  const colorInput = document.querySelector('.js-color-input-5');

  const changeSquareColor = () => {
    square.style.background = colorInput.value;
  }

  square.addEventListener('click', changeSquareColor);
})()