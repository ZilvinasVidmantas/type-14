import categories from '../data/categories';
import products from '../data/products';
import productsCategories from '../data/products-categories';
import ProductsCollection from '../helpers/products-collection';
import Table from './table';
import ProductJoined from '../types/product-joined';
import stringifyProps, { StringifiedObject } from '../helpers/stringify-props';

type ProductTableRow = StringifiedObject<Required<ProductJoined>>;

const joinedProductToProductTableRow = ({
  description,
  ...props
}: ProductJoined): ProductTableRow => stringifyProps({
  ...props,
  description: description ?? '---',
});

class App {
  private htmlElement: HTMLElement;

  private productsCollection: ProductsCollection;

  constructor(selector: string) {
    const foundElement = document.querySelector(selector);

    if (foundElement === null) {
      throw new Error(`App element was not found by selector "${selector}"`);
    }

    if (!(foundElement instanceof HTMLElement)) {
      throw new Error('App element must be HTMLElement');
    }

    this.htmlElement = foundElement;
    this.productsCollection = new ProductsCollection({
      products,
      categories,
      productsCategories,
    });
  }

  initialize() {
    const table = new Table({
      title: 'Visi produktai',
      columns: {
        id: 'Id',
        title: 'Pavadinimas',
        price: 'Kaina',
        description: 'Aprašymas',
        categories: 'Kategorijos',
      },
      rowsData: this.productsCollection.all.map(joinedProductToProductTableRow),
    });

    const container = document.createElement('div');
    container.className = 'container my-4';
    container.append(table.htmlElement);

    this.htmlElement.append(container);
  }
}

export default App;
