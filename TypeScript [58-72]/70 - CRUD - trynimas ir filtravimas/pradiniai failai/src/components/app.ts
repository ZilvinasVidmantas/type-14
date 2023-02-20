import categories from '../data/categories';
import products from '../data/products';
import productsCategories from '../data/products-categories';
import ProductsCollection from '../helpers/products-collection';
import Table from './table';
import ProductJoined from '../types/product-joined';
import stringifyProps, { StringifiedObject } from '../helpers/stringify-props';
import SelectField, { type Option } from './select-field';
import type Category from '../types/category';

const ALL_CATEGORIES_ID = '-1' as const;
const ALL_CATEGORIES_TITLE = 'Visi produktai' as const;

type ProductTableRow = StringifiedObject<Required<ProductJoined>>;

const joinedProductToProductTableRow = ({
  description,
  ...props
}: ProductJoined): ProductTableRow => stringifyProps({
  ...props,
  description: description ?? '---',
});

const categoryToOption = ({ id, title }: Category): Option => ({
  value: id,
  text: title,
});

class App {
  private htmlElement: HTMLElement;

  private selectedCategoryId: string;

  private productsCollection: ProductsCollection;

  private productsTable: Table<ProductTableRow>;

  constructor(selector: string) {
    const foundElement = document.querySelector(selector);

    if (foundElement === null) {
      throw new Error(`App element was not found by selector "${selector}"`);
    }

    if (!(foundElement instanceof HTMLElement)) {
      throw new Error('App element must be HTMLElement');
    }

    this.selectedCategoryId = ALL_CATEGORIES_ID;
    this.htmlElement = foundElement;
    this.productsCollection = new ProductsCollection({
      products,
      categories,
      productsCategories,
    });
    this.productsTable = new Table({
      title: ALL_CATEGORIES_TITLE,
      columns: {
        id: 'Id',
        title: 'Pavadinimas',
        price: 'Kaina',
        description: 'Aprašymas',
        categories: 'Kategorijos',
      },
      rowsData: this.productsCollection.all.map(joinedProductToProductTableRow),
      onDelete: this.handleDeleteProduct,
    });
  }

  handleCategoryChange = (categoryId: string) => {
    this.selectedCategoryId = categoryId;
    this.update();
  };

  handleDeleteProduct = (productId: string) => {
    this.productsCollection.deleteProductById(productId);
    this.update();
  };

  initialize = () => {
    const select = new SelectField({
      options: [
        { value: ALL_CATEGORIES_ID, text: ALL_CATEGORIES_TITLE },
        ...categories.map(categoryToOption),
      ],
      onChange: this.handleCategoryChange,
    });

    const container = document.createElement('div');
    container.className = 'container d-flex flex-column my-4 gap-3';
    container.append(
      select.htmlElement,
      this.productsTable.htmlElement,
    );

    this.htmlElement.append(container);
  };

  update = () => {
    if (this.selectedCategoryId === ALL_CATEGORIES_ID) {
      this.productsTable.updateProps({
        title: ALL_CATEGORIES_TITLE,
        rowsData: this.productsCollection.all.map(joinedProductToProductTableRow),
      });
    } else {
      const category = this.productsCollection.getCategoryById(this.selectedCategoryId);

      this.productsTable.updateProps({
        title: category.title,
        rowsData: this.productsCollection
          .getJoinedProductsByCategoryId(this.selectedCategoryId)
          .map(joinedProductToProductTableRow),
      });
    }
  };
}

export default App;
