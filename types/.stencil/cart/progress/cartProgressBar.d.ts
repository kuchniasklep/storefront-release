import { CartDataShippingProgress } from '../cartData';
export declare class CartProgressBar {
  root: HTMLElement;
  productValue: number;
  shippingProgress: CartDataShippingProgress;
  componentWillLoad(): void;
  numberPlacement: boolean;
  resizeHandler(): void;
  componentWillUpdate(): void;
  render(): any[];
}
