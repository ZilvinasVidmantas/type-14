const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, -1, -2, -3, -4, -5, -6, -7, -8];

const getElementBySortTypeMap = {
  none: () => /* return */ allNumbers,
  byAmountASC: () => [...allNumbers].sort((x, y) => {
    // grąžina teigiamą skaičių -> x prioritetas aukštesnis už y
    // grąžina neigiamą skaičių -> y prioritetas aukštesnis už x
    // grąžina 0 -> x ir y prioritetai yra lygūs
    return x - y;
  }),
  byAmountDESC: () => /* return */[...allNumbers].sort((a, b) => b - a),
}

const numbersContainer = document.querySelector('#numbers-container');
const sortSelect = document.querySelector('#sort-select');

const renderNumbers = (numbersArr) => {
  numbersContainer.innerHTML = '';

  const numberCells = numbersArr.map(number => {
    const cell = document.createElement('span');
    cell.className = 'number-cell';
    cell.innerHTML = number;

    return cell;
  });

  numbersContainer.append(...numberCells);
}

const changeSorting = (type) => {
  const sortedElements = getElementBySortTypeMap[type]();
  renderNumbers(sortedElements);
}

sortSelect.addEventListener('change', (e) => changeSorting(e.target.value));


renderNumbers(allNumbers);

getElementBySortTypeMap.byAmountASC()