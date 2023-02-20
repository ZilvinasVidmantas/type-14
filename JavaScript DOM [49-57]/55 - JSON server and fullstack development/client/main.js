import ApiService from './services/api-service.js';
import UserSelectComponent from './components/user-select-component.js';
import AlertComponent from './components/alert-component.js';
import TodosTableComponent from './components/todos-table-component.js';
import ContainerComponent from './components/container-component.js';

// Pagrindinis HTML elementas, kurio viduje bus sugeneruotas visas turinys.
const rootHtmlElement = document.querySelector('#root');
const todosTableComponent = new TodosTableComponent();
const alertComponent = new AlertComponent();
const containerComponent = new ContainerComponent();

const handleUserChange = async (e) => {
  const userId = e.target.value;
  try {
    const todos = await ApiService.getUserTodos(userId);
    todosTableComponent.renderTodos(todos);
  } catch (error) {
    alertComponent.show(error.message);
  }
}

(async function initialize() {
  containerComponent.addComponents(alertComponent);
  try {
    const users = await ApiService.getUsers();
    const userSelectComponent = new UserSelectComponent(users, handleUserChange);
    containerComponent.addComponents(userSelectComponent, todosTableComponent);
    rootHtmlElement.append(containerComponent.htmlElement);
  } catch (error) {
    alertComponent.show(error.message);
  }
})();
