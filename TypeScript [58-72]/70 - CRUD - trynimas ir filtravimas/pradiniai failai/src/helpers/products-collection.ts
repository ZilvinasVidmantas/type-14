import type Category from '../types/category';
import type Product from '../types/product';
import type ProductCategory from '../types/product-category';
import type ProductJoined from '../types/product-joined';

type ProductsCollectionProps = {
  products: Product[],
  categories: Category[],
  productsCategories: ProductCategory[],
};

class ProductsCollection {
  private privateProducts: Product[];

  private privateCategories: Category[];

  private privateProductsCategories: ProductCategory[];

  constructor({ products, categories, productsCategories }: ProductsCollectionProps) {
    this.privateProducts = JSON.parse(JSON.stringify(products));
    this.privateCategories = JSON.parse(JSON.stringify(categories));
    this.privateProductsCategories = JSON.parse(JSON.stringify(productsCategories));
  }

  private joinProduct = (product: Product): ProductJoined => {
    const categoriesIds = this.privateProductsCategories
      .filter((productCategory) => productCategory.productId === product.id)
      .map((productCategory) => productCategory.categoryId);

    const categories = this.privateCategories
      .filter((category) => categoriesIds.includes(category.id))
      .map((category) => category.title)
      .join(', ');

    return {
      ...product,
      categories,
    };
  };

  get all(): ProductJoined[] {
    return this.privateProducts.map(this.joinProduct);
  }

  getJoinedProductsByCategoryId = (categoryId: string): ProductJoined[] => {
    const productsIds = this.privateProductsCategories
      .filter((productCategory) => productCategory.categoryId === categoryId)
      .map(({ productId }) => productId);

    const joinedProducts = this.privateProducts
      .filter((product) => productsIds.includes(product.id))
      .map(this.joinProduct);

    return joinedProducts;
  };

  getCategoryById = (categoryId: string) => {
    const foundCategory = this.privateCategories.find((category) => category.id === categoryId);

    if (foundCategory === undefined) {
      throw new Error(`Category is not found: "${categoryId}"`);
    }

    return foundCategory;
  };

  deleteProductById = (productId: string) => {
    this.privateProducts = this.privateProducts.filter((product) => product.id !== productId);
    this.privateProductsCategories = this.privateProductsCategories
      .filter((productCategory) => productCategory.productId !== productId);
  };
}

export default ProductsCollection;
