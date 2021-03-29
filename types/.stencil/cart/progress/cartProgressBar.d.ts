import * as cart from '../cart-data';
export declare class CartProgressBar {
  root: HTMLElement;
  shippingProgress: cart.shippingProgress;
  componentWillLoad(): void;
  numberPlacement: boolean;
  resizeHandler(): void;
  componentWillUpdate(): void;
  render(): any[];
}
