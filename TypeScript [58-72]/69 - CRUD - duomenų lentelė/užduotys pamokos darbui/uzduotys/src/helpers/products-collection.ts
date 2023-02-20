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
}

export default ProductsCollection;
