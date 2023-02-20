// Component - atavaizdavimas ir su atvaizdavimu susijusi logika
class UserSelectComponent {
  htmlElement;

  constructor(users, onChange) {
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row my-4';
    const optionsStr = users
      .map(({ username, name, id }) => `<option value="${id}">${username} - ${name}</option>`)
      .join('');
    this.htmlElement.innerHTML = `
    <div class="col-6">
      <label for="user-select" class="form-label">Pasirinkite vartotoją</label>
      <select class="form-select" id="user-select">
        <option selected disabled>...Vartotojas</option>
        ${optionsStr}
      </select>
    </div>`;
    const select = this.htmlElement.querySelector('#user-select');
    select.addEventListener('change', onChange);
  }
}

export default UserSelectComponent;