import { ITracker, ITrackerProduct } from '../store';
export declare class FacebookTracker implements ITracker {
  pixel: Promise<any>;
  constructor(ids: string);
  pageview(): void;
  product(productId: string, name: string, price: number, currency: string): void;
  addToCart(productId: string, name: string, price: number, quantity: number, currency: string): void;
  order_checkout(products: ITrackerProduct[], value: number, currency: string): void;
  order_form(products: ITrackerProduct[], value: number, currency: string): void;
  order_placed(products: ITrackerProduct[], value: number, currency: string, id: string): void;
  search(query: string): void;
  transformProducts(products: ITrackerProduct[]): {
    id: string;
    quantity: number;
  }[];
}
