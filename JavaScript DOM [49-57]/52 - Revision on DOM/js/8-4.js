(() => {
  const form = document.querySelector('.form-8-4');
  const resultContainer = document.querySelector('.js-result-8-4');

  const doStuff = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const size = formData.get('size');
    console.log(size);
  }

  form.addEventListener('submit', doStuff);
})();