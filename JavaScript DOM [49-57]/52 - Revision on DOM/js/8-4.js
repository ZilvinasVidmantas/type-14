(() => {
  const form = document.querySelector('.form-8-4');

  const doStuff = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const n1 = Number(formData.get('n1'));
    const n2 = Number(formData.get('n2'));
    const firstNumberIsCloserTo100 = Math.abs(100 - n1) < Math.abs(100 - n2);

    // if (firstNumberIsCloserTo100) {
    //   alert(n1)
    // } else {
    //   alert(n2);
    // }

    alert(firstNumberIsCloserTo100 ? n1 : n2);
  }

  form.addEventListener('submit', doStuff);
})();