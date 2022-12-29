// formos įvesties laukų surinkimas išrankiojant įvesties laukus 
// Kada taikyti?  Kai yra vienas arba 2 įvessties laukai
(() => {
  const loginForm = document.querySelector('.js-register-form');
  const emailField = document.querySelector('#register-email');
  const passwordField = document.querySelector('#register-password');
  const rememberCheckbox = document.querySelector('#register-remember');
  const htmlCheckbox = document.querySelector('#register-html');
  const cssCheckbox = document.querySelector('#register-css');
  const jsCheckbox = document.querySelector('#register-js');

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = {
      email: emailField.value,
      password: passwordField.value,
      remember: rememberCheckbox.checked,
      skills: [
        htmlCheckbox.checked && htmlCheckbox.value,
        cssCheckbox.checked && cssCheckbox.value,
        jsCheckbox.checked && jsCheckbox.value,
      ].filter(x => x)
    };
    console.log(formData);
  }

  loginForm.addEventListener('submit', handleLogin);
})/*()*/;

// formos įvesties laukų surinkimas konvertuojant į masyvą. Įvertinus kad žmonės žino apie [name] atributą.
// Kada taikyti? Kai yra formoje surašyti [name]
(() => {
  const loginForm = document.querySelector('.js-register-form');

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = Array.from(loginForm)
      .reduce((prevFormData, field, index, fields) => {
        const name = field.name;
        if (!name) return prevFormData;

        const valueWithSuchNameExists = prevFormData[name] !== undefined;
        if (valueWithSuchNameExists) {
          if (field.type === 'checkbox') {
            if (field.checked) {
              prevFormData[name].push(field.value);
            }
          } else {
            prevFormData[name].push(field.value);
          }
        } else {
          const existsFieldsWithSameName = fields.some((f, i) => f.name === name && i !== index);
          if (field.type === 'checkbox') {
            if (existsFieldsWithSameName) {
              prevFormData[name] = [];
              if (field.checked) {
                prevFormData[name].push(field.value);
              }
            } else {
              prevFormData[name] = field.checked;
            }
          } else {
            prevFormData[name] = field.value;
          }
        }

        return prevFormData;
      }, {});

    console.log(formData);
  }

  loginForm.addEventListener('submit', handleLogin);
})/* () */;

// formos įvesties laukų surinkimas išrankiojant įvesties laukus 
// Kada taikyti? Visais (kitais) atvejais
(() => {
  const loginForm = document.querySelector('.js-register-form');

  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);

    const email = formData.get('email');
    const password = formData.get('password');
    const passwordConfirmation = formData.get('passwordConfirmation');
    const remember = Boolean(formData.get('remember'));
    const skills = formData.getAll('skills');

    console.log({
      email,
      password,
      passwordConfirmation,
      remember,
      skills,
    })
  }

  loginForm.addEventListener('submit', handleLogin);
})();
