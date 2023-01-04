class TodosTableComponent {
  htmlElement;

  tbody;

  constructor() {
    this.htmlElement = document.createElement('table');
    this.htmlElement.className = 'table table-striped shadow my-4 d-none';
    this.htmlElement.innerHTML = `
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Pavadinimas</th>
          <th scope="col">Ar atlikta?</th>
        </tr>
      </thead>
      <tbody></tbody>`;
    this.tbody = this.htmlElement.querySelector('tbody');
  }

  renderTodos(todos) {
    if (this.htmlElement.classList.contains('d-none')) {
      this.htmlElement.classList.remove('d-none');
    }

    const todosRowsStr = todos.map(({ id, title, completed }) => `
      <tr>
        <th scope="row">${id}</th>
        <td>${title}</td>
        <td>${completed ? 'Atlikta' : 'Neatlikta'}</td>
      </tr>`)
      .join('');

    this.tbody.innerHTML = todosRowsStr;
  }
}

export default TodosTableComponent;