(() => {
  const form = document.querySelector('.form-7-2');
  const resultContainer = document.querySelector('.js-result-7-2');

  const checkIfLeapYear = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const year = formData.get('year');

    let isLeapYear = false;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
      isLeapYear = true;
    }

    resultContainer.innerText = isLeapYear ? 'Yra keliamieji metai' : 'Nėra keliamieji metai';
  };

  form.addEventListener('submit', checkIfLeapYear);
})();