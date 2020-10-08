export declare class ProductCard {
  unavailable: boolean;
  linkOnly: boolean;
  name: string;
  img: string;
  link: string;
  currentPrice: string;
  previousPrice: string;
  productId: string;
  uniqueId: string;
  cartLoading: boolean;
  favLoading: boolean;
  root: HTMLElement;
  componentDidLoad(): void;
  CartHandler(success: any): void;
  render(): any;
}
