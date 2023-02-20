// IIFE - Imediatly invoked function expression
(() => {
  const btn = document.querySelector('.js-btn-8');
  const colorSelect = document.querySelector('.js-select-8');
  const container = document.querySelector('.js-container-8');

  const changeSquareColor = () => {
    const newSquare = document.createElement('span');
    newSquare.classList.add('square')
    newSquare.classList.add(colorSelect.value);
    container.append(newSquare);
  }

  btn.addEventListener('click', changeSquareColor);
})()