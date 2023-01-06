class AlertComponent {
  htmlElement;
  alertHtmlElement;
  alertTextElement;

  constructor() {
    this.htmlElement = document.createElement('div');
    this.htmlElement.innerHTML = `
    <div class="alert alert-danger alert-dismissible d-none" role="alert">
      <div class="js-alert-text"></div>
      <button type="button" class="btn-close"></button>
    </div>`;
    this.alertHtmlElement = this.htmlElement.querySelector('.alert');
    this.alertTextElement = this.htmlElement.querySelector('.js-alert-text');
    const alertDelBtnHtmlElement = this.htmlElement.querySelector('button');
    alertDelBtnHtmlElement.addEventListener('click', this.hide);
  }

  hide = () => {
    this.alertHtmlElement.classList.add('d-none');
  }

  show(message) {
    this.alertHtmlElement.classList.remove('d-none');
    this.alertTextElement.innerText = message;
  }
}

export default AlertComponent;
