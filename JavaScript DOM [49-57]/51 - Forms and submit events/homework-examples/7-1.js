(() => {
  const form = document.querySelector('.form-7-1');
  const resultContainer = document.querySelector('.js-result-7-1');

  const jokeOutOfWorkers = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const age = formData.get('age');

    let insult = 50;
    if (age >= 10) {
      insult += 50
    }
    if (age >= 20) {
      insult += 100;
    }

    const insultStr = `Jūsų bonusas: ${insult} eurų`;
    resultContainer.innerText = insultStr;
  }

  form.addEventListener('submit', jokeOutOfWorkers);
})();