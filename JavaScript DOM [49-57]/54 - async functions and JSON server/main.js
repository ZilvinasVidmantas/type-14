import ApiService from './api-service.js';

const userSelect = document.querySelector('#user-select');
const alertContainer = document.querySelector('.js-alert-container');
const todosTable = document.querySelector('.js-todos-table');
const todosTableBody = todosTable.querySelector('tbody');

const renderUserOptions = (users) => {
  const optionsStr = users
    .map(({ username, name, id }) => `<option value="${id}">${username} - ${name}</option>`)
    .join('');
  userSelect.innerHTML += optionsStr;
}

const renderTodosTable = (todos) => {
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

const displayError = (error) => {
  alertContainer.innerHTML = `
  <div class="alert alert-danger alert-dismissible" role="alert">
    <div>${error.message}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>`;
}

userSelect.addEventListener('change', async (e) => {
  const userId = e.target.value;
  try {
    const todos = await ApiService.getUserTodos(userId);
    renderTodosTable(todos);
  } catch (error) {
    displayError(error)
  }
});

(async () => {
  try {
    const users = await ApiService.getUsers();
    renderUserOptions(users);
  } catch (error) {
    displayError(error)
  }
})();
