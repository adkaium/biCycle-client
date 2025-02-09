export type ProductType = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  oldPrice: number;
  image: string;
  color: string;
  rating: number;
  author: string;
}

export type ProductCardProps = {
  products: ProductType[];
};