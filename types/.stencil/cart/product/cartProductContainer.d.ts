import { CartDataProduct } from '../cartData';
export declare class CartProductContainer {
  root: HTMLElement;
  productValue: number;
  productAmount: number;
  loadingProducts: number;
  totalShippingTime: string;
  products: CartDataProduct[];
  RemoveProduct: (index: number) => void;
  ProductCount?: (index: number, current: number, last: number) => void;
  render(): any[];
}
