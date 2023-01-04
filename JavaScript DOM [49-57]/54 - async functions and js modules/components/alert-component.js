class AlertComponent {
  htmlElement;

  constructor(error) {
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'alert alert-danger alert-dismissible';
    this.htmlElement.setAttribute('role', 'alert');
    this.htmlElement.innerHTML = `
      <div>${error.message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>`;
  }
}

export default AlertComponent;