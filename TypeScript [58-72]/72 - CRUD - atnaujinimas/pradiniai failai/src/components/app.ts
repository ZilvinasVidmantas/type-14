import categories from '../data/categories';
import products from '../data/products';
import productsCategories from '../data/products-categories';
import ProductsCollection from '../helpers/products-collection';
import Table from './table';
import ProductJoined from '../types/product-joined';
import stringifyProps, { StringifiedObject } from '../helpers/stringify-props';
import SelectField, { type Option } from './select-field';
import type Category from '../types/category';
import ProductForm, { type Values } from './product-form';

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
  private selectedCategoryId: string;

  private editedProductId: string | null;

  private productsCollection: ProductsCollection;

  private productsTable: Table<ProductTableRow>;

  private productForm: ProductForm;

  private htmlElement: HTMLElement;

  public constructor(selector: string) {
    const foundElement = document.querySelector(selector);

    if (foundElement === null) {
      throw new Error(`App element was not found by selector "${selector}"`);
    }

    if (!(foundElement instanceof HTMLElement)) {
      throw new Error('App element must be HTMLElement');
    }

    this.selectedCategoryId = ALL_CATEGORIES_ID;
    this.editedProductId = null;
    this.htmlElement = foundElement;
    this.productsCollection = new ProductsCollection({
      products,
      categories,
      productsCategories,
    });
    this.productsTable = new Table({
      title: ALL_CATEGORIES_TITLE,
      columns: {
        title: 'Pavadinimas',
        price: 'Kaina',
        description: 'Aprašymas',
        categories: 'Kategorijos',
      },
      rowsData: this.productsCollection.all.map(joinedProductToProductTableRow),
      onDelete: this.handleDeleteProduct,
      onEdit: this.handleEditProduct,
      editedProductId: this.editedProductId,
    });
    this.productForm = new ProductForm({
      onSubmit: this.handleCreateProduct,
      options: categories,
      submitBtnText: 'Sukurti',
      title: 'Produkto Sukūrimas',
      status: 'create',
    });
  }

  private handleChangeCategory = (categoryId: string) => {
    this.selectedCategoryId = categoryId;
    this.editedProductId = null;
    this.update();
  };

  private handleCreateProduct = ({ categories: categoriesIds, ...props }: Values) => {
    this.productsCollection.createProduct({ ...props, categoriesIds });
    this.update();
  };

  private handleDeleteProduct = (productId: string) => {
    this.productsCollection.deleteProductById(productId);
    this.editedProductId = null;
    this.update();
  };

  private handleEditProduct = (productId: string) => {
    this.editedProductId = productId === this.editedProductId ? null : productId;
    this.update();
  };

  private handleUpdateProduct = ({ categories: categoriesIds, ...props }: Values) => {
    if (this.editedProductId !== null) {
      this.productsCollection.updateProduct({
        ...props,
        id: this.editedProductId,
        categoriesIds,
      });
      this.editedProductId = null;
      this.update();
    }
  };

  private updateTable = () => {
    if (this.selectedCategoryId === ALL_CATEGORIES_ID) {
      this.productsTable.updateProps({
        title: ALL_CATEGORIES_TITLE,
        rowsData: this.productsCollection.all.map(joinedProductToProductTableRow),
        editedProductId: this.editedProductId,
      });
    } else {
      const category = this.productsCollection.getCategoryById(this.selectedCategoryId);

      this.productsTable.updateProps({
        title: category.title,
        rowsData: this.productsCollection
          .getJoinedProductsByCategoryId(this.selectedCategoryId)
          .map(joinedProductToProductTableRow),
        editedProductId: this.editedProductId,
      });
    }
  };

  private updateForm = () => {
    if (this.editedProductId === null) {
      this.productForm.updateProps({
        title: 'Produkto sukūrimas',
        submitBtnText: 'Sukurti',
        status: 'create',
        values: {
          categories: [],
          price: 0,
          title: '',
          description: '',
        },
        onSubmit: this.handleCreateProduct,
      });
    } else {
      const {
        categoriesIds,
        price,
        title,
        description,
      } = this.productsCollection.findProductDataById(this.editedProductId);

      this.productForm.updateProps({
        title: 'Produkto atnaujinimas',
        submitBtnText: 'Atnaujinti',
        status: 'update',
        values: {
          categories: categoriesIds,
          price,
          title,
          description: description ?? '',
        },
        onSubmit: this.handleUpdateProduct,
      });
    }
  };

  private update = () => {
    this.updateTable();
    this.updateForm();
  };

  public initialize = () => {
    const select = new SelectField({
      options: [
        { value: ALL_CATEGORIES_ID, text: ALL_CATEGORIES_TITLE },
        ...categories.map(categoryToOption),
      ],
      onChange: this.handleChangeCategory,
    });

    const uxContainer = document.createElement('div');
    uxContainer.className = 'd-flex gap-3 align-items-start';
    uxContainer.append(
      this.productsTable.htmlElement,
      this.productForm.htmlElement,
    );

    const container = document.createElement('div');
    container.className = 'container d-flex flex-column my-4 gap-3';
    container.append(
      select.htmlElement,
      uxContainer,
    );

    this.htmlElement.append(container);
  };
}

export default App;
