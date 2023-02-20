const squares = document.querySelectorAll('.square');

const delay = 2000;

const delayDelta = 300;

squares.forEach((square, i) => {
  setTimeout(() => {
    square.classList.add('show');
  }, delay + (i % 2) * delayDelta);
})

// 0 % 3 = 0
// 1 % 3 = 1
// 2 % 3 = 2
// 3 % 3 = 0
// 4 % 3 = 1
// 5 % 3 = 2
// 6 % 3 = 0
// 7 % 3 = 1
// 8 % 3 = 2
