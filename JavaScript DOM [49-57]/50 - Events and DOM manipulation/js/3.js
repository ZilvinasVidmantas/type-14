// IIFE - Imediatly invoked function expression
(() => {
  const square = document.querySelector('.js-square-3');

  const changeSquareColor = () => {
    console.log(square.style.background);
    if (square.style.background === 'red') {
      square.style.background = null;
    } else {
      square.style.background = 'red';
    }
  }

  square.addEventListener('click', changeSquareColor);
})()