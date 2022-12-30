(() => {
  const form = document.querySelector('.form-7-6');
  const resultContainer = document.querySelector('.js-result-7-6');

  const drawFir = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const size = formData.get('size');

    resultContainer.innerHTML = null;
    resultContainer.display = 'flex';
    // for (let count = 1; count <= size; count++) {
    //   resultContainer.innerHTML += `<div>${'*'.repeat(count)}</div>`;
    // }
    for (let count = 1; count <= size; count++) {
      const starCount = 2 * count - 1;
      const spaces = size - count;
      resultContainer.innerHTML += `
      <div>
        ${'<span class="star-container"></span>'.repeat(spaces)}
        ${'<span class="star-container">*</span>'.repeat(starCount)}
      </div>`;
    }
  }

  form.addEventListener('submit', drawFir);
})();