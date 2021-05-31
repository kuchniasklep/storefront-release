import { EventEmitter } from '../../../stencil-public-runtime';
export declare class ProductPurchase {
  root: HTMLElement;
  addToCart: EventEmitter;
  addToCartHandler(): void;
  addToFavourites: EventEmitter;
  addToFavouritesHandler(): void;
  cartAnimation: boolean;
  favouritesAnimation: boolean;
  render(): any[];
}
