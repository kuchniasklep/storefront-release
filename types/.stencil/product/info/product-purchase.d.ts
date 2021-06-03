import { EventEmitter } from '../../../stencil-public-runtime';
export declare class ProductPurchase {
  root: HTMLElement;
  cartText: string;
  availabilityText: string;
  favouritesIcon: string;
  addToCart: EventEmitter;
  CartHandler(): void;
  addToFavourites: EventEmitter;
  FavouritesHandler(): void;
  cartAnimation: boolean;
  favouritesAnimation: boolean;
  render(): any[];
}
