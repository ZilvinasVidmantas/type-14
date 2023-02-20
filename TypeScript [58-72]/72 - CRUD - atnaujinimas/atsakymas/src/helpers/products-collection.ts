import Product from '../types/product';
import Category from '../types/category';
import ProductCategory from '../types/product-category';
import ProductJoined from '../types/product-joined';

type ProductsCollectionProps = {
  products: Product[]
  categories: Category[]
  productsCategories: ProductCategory[]
};

export type ProductData = {
  title: string,
  price: number,
  categories: string[],
  description?: string
};

const createId = (): string => String(Math.floor(Math.random() * 10 ** 9));

class ProductsCollection {
  private props: ProductsCollectionProps;

  public constructor(props: ProductsCollectionProps) {
    this.props = JSON.parse(JSON.stringify(props));
  }

  private joinProduct = (product: Product) => {
    const { categories, productsCategories } = this.props;

    const productCategoriesIds = productsCategories
      .filter((pc) => pc.productId === product.id)
      .map((pc) => pc.categoryId);

    const productCategoriesTitles = categories
      .filter((category) => productCategoriesIds.includes(category.id))
      .map((category) => category.title);

    return {
      ...product,
      categories: productCategoriesTitles.join(', '),
    };
  };

  public get all(): ProductJoined[] {
    return this.props.products.map(this.joinProduct);
  }

  public getByCategoryId(categoryId: string): ProductJoined[] {
    const { productsCategories, products } = this.props;
    const productsByCategoryIdIds = productsCategories
      .filter((productCategory) => productCategory.categoryId === categoryId)
      .map((productCategory) => productCategory.productId);

    const joinedProductsByCategory = products
      .filter((product) => productsByCategoryIdIds.includes(product.id))
      .map((product) => this.joinProduct(product));

    return joinedProductsByCategory;
  }

  public deleteById(productId: string): void {
    this.props.productsCategories = this.props.productsCategories
      .filter((productCategory) => productCategory.productId !== productId);

    this.props.products = this.props.products
      .filter((product) => product.id !== productId);
  }

  public add({
    title,
    price,
    categories,
    description,
  }: ProductData): void {
    const productId = createId();

    const newProduct: Product = {
      id: productId,
      title,
      price,
    };

    if (description) newProduct.description = description;
    this.props.products.push(newProduct);

    const productsCategories: ProductCategory[] = categories.map((categoryId) => ({
      id: createId(),
      productId,
      categoryId,
    }));
    this.props.productsCategories.push(...productsCategories);
  }

  public update(productId: string, { categories, ...newProductData }: ProductData): void {
    const foundProductIndex = this.props.products.findIndex((product) => product.id === productId);
    if (foundProductIndex === -1) return;

    const availableCategoriesIds = this.props.categories.map((x) => x.id);

    const foundCategoriesIds = categories
      .filter((categoryId) => availableCategoriesIds.includes(categoryId));
    if (foundCategoriesIds.length !== categories.length) return;

    this.props.products[foundProductIndex] = {
      ...this.props.products[foundProductIndex],
      ...newProductData,
    };

    const newProductCategories = foundCategoriesIds.map((categoryId) => ({
      id: createId(),
      productId,
      categoryId,
    }));

    this.props.productsCategories = this.props.productsCategories
      .filter((productCategory) => productCategory.productId !== productId);

    this.props.productsCategories.push(...newProductCategories);
  }

  public getProductData(productId: string): ProductData | undefined {
    const foundProduct = this.props.products.find((product) => product.id === productId);
    if (foundProduct === undefined) return undefined;

    const productCategoriesIds = this.props.productsCategories
      .filter((productCategory) => productCategory.productId === productId)
      .map((productCategory) => productCategory.categoryId);

    const productData: ProductData = {
      ...foundProduct,
      categories: productCategoriesIds,
    };

    return productData;
  }
}

export default ProductsCollection;
