(() => {
  const form = document.querySelector('.form-8-3');
  const resultContainer = document.querySelector('.js-result-8-3');

  const doStuff = (event) => {
    event.preventDefault();

  }

  form.addEventListener('submit', doStuff);
})();