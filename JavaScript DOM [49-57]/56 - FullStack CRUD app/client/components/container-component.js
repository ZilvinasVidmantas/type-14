class ContainerComponent {
  htmlElement;

  constructor() {
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'container';
  }

  addComponents(...components) {
    const htmlElements = components.map(c => c.htmlElement);
    this.htmlElement.append(...htmlElements);
  }
}

export default ContainerComponent;