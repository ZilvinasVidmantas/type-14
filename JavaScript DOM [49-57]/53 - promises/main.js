/*
  Sukurti UI, kuriame vartotojas galėtų pasirinkti vartotoją, ir tuomet pagal pasirinktą
  vartotoją matytūsi TIK tok vartotojo postai.

  1. UI darbai
    1. Padaryti lentelės vaizdą pagal duomenis kuriuos planuoju parsisiųsti
    2. select'o vaizdą, pagal duomenis kuriuos planuoju parsisiųsti. Sukurt HTML.

  2. Parsiuntimo darbai
    1. Atsiųsti vartotojus
    2. Suformuoti select'o pasirinkimus pagal parsiųstus vartotojus
    3. Apdoroti ir išsitestuoti nesėkmės atvejį
    4. Atsiųsti lentelės duomenis
    5. Pagal lentelės duomenis suformuoti eilučių HTML

  3. UX darbai
    1. Reaguoti į vartotojo pasirinkimą
    2. Pagal vartotojo pasirinkimą parsiųsti duomenis
*/

const userSelect = document.querySelector('#user-select');
const alertContainer = document.querySelector('.js-alert-container');
const todosTable = document.querySelector('.js-todos-table');
const todosTableBody = todosTable.querySelector('tbody');

const renderUserOptions = (users) => {
  // 2.2
  const optionsStr = users
    .map(({ username, name, id }) => `<option value="${id}">${username} - ${name}</option>`)
    .join('');
  userSelect.innerHTML += optionsStr;
}

const renderTodosTable = (todos) => {
  // 2.5
  if (todosTable.classList.contains('d-none')) {
    todosTable.classList.remove('d-none');
  }
  const todosRowsStr = todos.map(({ id, title, completed }) => `
  <tr>
    <th scope="row">${id}</th>
    <td>${title}</td>
    <td>${completed ? 'Atlikta' : 'Neatlikta'}</td>
  </tr>`)
    .join('');

  todosTableBody.innerHTML = todosRowsStr;
}

// 2.3
const displayError = (error) => {
  console.dir(error);
  alertContainer.innerHTML = `
  <div class="alert alert-danger alert-dismissible" role="alert">
    <div>${error.message}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>`;
}

userSelect.addEventListener('change', (e) => {
  const userId = e.target.value;
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then((res) => res.json())
    .then(renderTodosTable)
    .catch(displayError);
});

// 2.1.
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then(renderUserOptions)
  // 2.3
  .catch(displayError);
