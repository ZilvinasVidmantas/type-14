import ApiService from './services/api-service.js';
import UserSelectComponent from './components/user-select-component.js';

// Pagrindinis HTML elementas, kurio viduje bus sugeneruotas visas turinys.
const rootHtmlElement = document.querySelector('#root');
const alertContainer = document.querySelector('.js-alert-container');
const todosTable = document.querySelector('.js-todos-table');
const todosTableBody = todosTable.querySelector('tbody');

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

const renderAlert = (error) => {
  alertContainer.innerHTML = `
  <div class="alert alert-danger alert-dismissible" role="alert">
    <div>${error.message}</div>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  </div>`;
}

const handleUserChange = async (e) => {
  const userId = e.target.value;
  try {
    const todos = await ApiService.getUserTodos(userId);
    renderTodosTable(todos);
  } catch (error) {
    renderAlert(error)
  }
}

(async function initialize() {
  try {
    const users = await ApiService.getUsers();
    const userSelectComponent = new UserSelectComponent(users, handleUserChange);
    rootHtmlElement.append(userSelectComponent.htmlElement)
  } catch (error) {
    renderAlert(error)
  }
})();
