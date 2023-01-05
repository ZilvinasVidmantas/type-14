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
      </tr>
    </thead>
    <tbody></tbody>`;
    this.tbody = this.htmlElement.querySelector('tbody');
  }

  renderCars(cars) {
    const carsRowsStr = cars.map(({ id, title, year, damaged }) => `
      <tr>
        <td>${id}</td>
        <td>${title}</td>
        <td>${year}</td>
        <td>${damaged}</td>
      </tr>`)
      .join('');

    this.tbody.innerHTML = carsRowsStr;
  }
}

export default CarsTableComponent;