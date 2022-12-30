(() => {
  const input = document.querySelector('.js-input-8-3');
  const resultContainer = document.querySelector('.js-result-8-3');
  const names = [];

  const doStuff = (event) => {
    event.preventDefault();
    const value = event.target.value;

    // if (resultContainer.innerHTML !== '') {
    //   resultContainer.innerHTML = resultContainer.innerHTML.slice(0, -1) + ', ' + value + '.';
    // } else {
    //   resultContainer.innerHTML = value + '.';
    // }
    names.push(value);
    resultContainer.innerHTML = `${names.join(', ')}.`;

    input.value = null;
  }

  input.addEventListener('blur', doStuff);
})();