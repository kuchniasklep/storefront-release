export declare class ProductCard {
  unavailable: boolean;
  linkOnly: boolean;
  name: string;
  img: string;
  link: string;
  currentPrice: number;
  previousPrice: number;
  productId: string;
  cartLoading: boolean;
  favLoading: boolean;
  favSuccess: boolean;
  cart(): void;
  favourites(): void;
  render(): any[];
}
