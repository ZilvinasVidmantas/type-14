export type Option = {
  label: string,
  value: string
};

export type CheckboxGroupFieldProps = {
  labelText: string;
  name: string;
  options: Option[];
  selected?: string[];
};

class CheckboxGroupField {
  private static count: number = 0;

  private props: CheckboxGroupFieldProps;

  private id: string;

  private label: HTMLLabelElement;

  private optionsContainer: HTMLDivElement;

  public htmlElement: HTMLDivElement;

  public constructor(props: CheckboxGroupFieldProps) {
    CheckboxGroupField.count += 1;
    this.id = `TextField_${CheckboxGroupField.count}`;
    this.props = props;
    this.htmlElement = document.createElement('div');
    this.label = document.createElement('label');
    this.optionsContainer = document.createElement('div');

    this.intialize();
    this.renderView();
  }

  private intialize = () => {
    this.label.htmlFor = this.id;
    this.label.className = 'form-label';

    this.htmlElement.append(
      this.label,
      this.optionsContainer,
    );
  };

  private renderView = () => {
    this.label.innerText = this.props.labelText;

    this.optionsContainer.innerHTML = this.props.options
      .map(({ label, value }) => {
        const optionId = `${this.id}_${value}`;
        return `
          <div class="form-check">
            <input 
              type="checkbox" 
              class="form-check-input" 
              id="${optionId}" 
              name="${this.props.name}" 
              value="${value}"
              ${this.props.selected?.includes(value) ? 'checked' : ''}
            >
            <label class="form-check-label" for="${optionId}">${label}</label>
          </div>`;
      })
      .join('');
  };

  updateProps = (props: Partial<CheckboxGroupFieldProps>) => {
    this.props = {
      ...this.props,
      ...props,
    };

    this.renderView();
  };
}

export default CheckboxGroupField;
