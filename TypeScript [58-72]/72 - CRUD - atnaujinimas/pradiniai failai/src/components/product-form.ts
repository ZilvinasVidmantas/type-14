import TextField from './text-field';
import CheckboxGroupField, { type Option } from './checkbox-group-field';
import type Category from '../types/category';

export type Values = {
  title: string,
  price: number,
  categories: string[],
  description: string,
};

type ProductFormProps = {
  title: string,
  submitBtnText: string,
  options: Category[],
  values?: Values,
  onSubmit: (values: Values) => void,
  status: 'create' | 'update',
};

const categoryToOption = (category: Category): Option => ({
  label: category.title,
  value: category.id,
});

const isStringArr = (arr: FormDataEntryValue[]): arr is string[] => arr
  .every((el) => typeof el === 'string');

class ProductForm {
  private props: ProductFormProps;

  private heading: HTMLHeadingElement;

  private submitButton: HTMLButtonElement;

  private titleField: TextField;

  private priceField: TextField;

  private categoriesField: CheckboxGroupField;

  private descriptionField: TextField;

  public htmlElement: HTMLFormElement;

  public constructor(props: ProductFormProps) {
    this.props = props;
    this.htmlElement = document.createElement('form');

    this.heading = document.createElement('h4');
    this.submitButton = document.createElement('button');

    this.titleField = new TextField({
      labelText: 'Pavadinimas',
      name: 'title',
      value: props.values?.title ?? '',
    });
    this.priceField = new TextField({
      labelText: 'Kaina',
      name: 'price',
      value: props.values ? String(props.values.price) : '0',
    });
    this.categoriesField = new CheckboxGroupField({
      labelText: 'Kategorijos',
      name: 'categories',
      options: props.options.map(categoryToOption),
      selected: props.values?.categories ?? [],
    });
    this.descriptionField = new TextField({
      labelText: 'Aprašymas',
      name: 'description',
      value: props.values?.description ?? '',
    });

    this.initialize();
    this.renderView();
  }

  private initialize = () => {
    this.heading.className = 'text-center';
    this.submitButton.className = 'btn btn-lg btn-sm mt-3 w-100';
    this.submitButton.type = 'submit';

    this.htmlElement.className = 'shadow p-3 border ';
    this.htmlElement.style.width = '380px';
    this.htmlElement.append(
      this.heading,
      this.titleField.htmlElement,
      this.priceField.htmlElement,
      this.categoriesField.htmlElement,
      this.descriptionField.htmlElement,
      this.submitButton,
    );

    this.htmlElement.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(this.htmlElement);

      const title = formData.get('title');
      const price = formData.get('price');
      const categories = formData.getAll('categories');
      const description = formData.get('description');

      if (typeof title !== 'string') {
        alert('Privalote įvesti pavadinimą');
        return;
      }

      if (typeof price !== 'string') {
        alert('Privalote įvesti kainą');
        return;
      }

      if (Number.isNaN(Number(price))) {
        alert('Kaina privalo būti skaičius');
        return;
      }

      if (categories.length === 0) {
        alert('Privalote pasirinkti nors vieną kategoriją');
        return;
      }

      if (!isStringArr(categories)) {
        alert('Kategorija negali būti failas');
        return;
      }

      if (typeof description !== 'string') {
        alert('Privalote įvesti aprašymą');
        return;
      }

      const values: Values = {
        title,
        price: Number(price),
        categories,
        description,
      };

      this.props.onSubmit(values);
      this.htmlElement.reset();
    });
  };

  private renderStatusStyles = () => {
    if (this.props.status === 'create') {
      this.heading.classList.remove('text-warning');
      this.submitButton.classList.remove('btn-warning');
      this.htmlElement.classList.remove('border-warning');
      this.heading.classList.add('text-success');
      this.submitButton.classList.add('btn-success');
      this.htmlElement.classList.add('border-success');
    } else {
      this.heading.classList.remove('text-success');
      this.submitButton.classList.remove('btn-success');
      this.htmlElement.classList.remove('border-success');
      this.heading.classList.add('text-warning');
      this.submitButton.classList.add('btn-warning');
      this.htmlElement.classList.add('border-warning');
    }
  };

  private renderView = () => {
    this.heading.innerText = this.props.title;
    this.submitButton.innerText = this.props.submitBtnText;
    this.renderStatusStyles();

    if (this.props.values) {
      this.titleField.updateProps({ value: this.props.values.title });
      this.priceField.updateProps({ value: String(this.props.values.price) });
      this.categoriesField.updateProps({ selected: this.props.values.categories });
      this.descriptionField.updateProps({ value: this.props.values.description });
    }
  };

  updateProps = (props: Partial<ProductFormProps>) => {
    this.props = {
      ...this.props,
      ...props,
    };

    this.renderView();
  };
}

export default ProductForm;
