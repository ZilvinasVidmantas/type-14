// IIFE - Imediatly invoked function expression
(() => {
  const square = document.querySelector('.js-square-4');
  const { background, backgroundColor } = getComputedStyle(square);

  const colors = [
    backgroundColor || background || '#fff',
    'yellow',
    'green',
    'red',
  ];
  let index = 0;

  const changeSquareColor = () => {
    index = (index + 1) % colors.length;
    square.style.background = colors[index];
  }

  square.addEventListener('click', changeSquareColor);
})()