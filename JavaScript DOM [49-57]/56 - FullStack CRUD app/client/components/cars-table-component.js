class CarsTableComponent {
  htmlElement;
  tbody;

  constructor() {
    this.htmlElement = document.createElement('table');
    this.htmlElement.className = 'table table-striped';
    this.htmlElement.innerHTML = ` 
    <thead class="bg-dark text-white">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Title</th>
        <th scope="col">Year</th>
        <th scope="col">Is Damaged</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody></tbody>`;
    this.tbody = this.htmlElement.querySelector('tbody');
  }

  createRowHtmlElement({ id, title, year, damaged }) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${id}</td>
      <td>${title}</td>
      <td>${year}</td>
      <td>${damaged}</td>
      <td class="d-flex justify-content-end">
        <button class="btn btn-danger btn-sm">✕</button>
      </td>`;

    const deleteButton = tr.querySelector('.btn-danger');
    deleteButton.addEventListener('click', () => {
      console.log(`trinamas elementas su id: "${id}"`);
    });

    return tr;
  }


  renderCars(cars) {
    const rowsHtmlElements = cars.map(this.createRowHtmlElement);

    this.tbody.innerHTML = null;
    this.tbody.append(...rowsHtmlElements);

  }
}

export default CarsTableComponent;