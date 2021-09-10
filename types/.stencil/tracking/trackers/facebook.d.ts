import { ITracker, ITrackerProduct } from '../store';
export declare class FacebookTracker implements ITracker {
  pixel: Promise<any>;
  constructor(ids: string);
  pageview(eventID: string): void;
  product(eventID: string, productId: string, name: string, price: number, currency: string): void;
  addToCart(eventID: string, productId: string, name: string, price: number, quantity: number, currency: string): void;
  order_checkout(eventID: string, products: ITrackerProduct[], value: number, currency: string): void;
  order_form(eventID: string, products: ITrackerProduct[], value: number, currency: string): void;
  order_placed(eventID: string, products: ITrackerProduct[], value: number, currency: string): void;
  search(query: string): void;
  transformProducts(products: ITrackerProduct[]): {
    id: string;
    quantity: number;
  }[];
}
