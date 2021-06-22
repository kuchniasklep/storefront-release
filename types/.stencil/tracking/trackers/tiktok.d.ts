import { ITracker, ITrackerProduct } from '../store';
export declare class TikTokTracker implements ITracker {
  ttq: Promise<any>;
  constructor();
  pageview(): void;
  product(productId: string, name: string, price: number, currency: string): void;
  addToCart(productId: string, name: string, price: number, quantity: number, currency: string): void;
  order_checkout(products: ITrackerProduct[], value: number, currency: string): void;
  order_form(products: ITrackerProduct[], value: number, currency: string): void;
  order_placed(products: ITrackerProduct[], value: number, currency: string): void;
  search(query: string): void;
  transformProducts(products: ITrackerProduct[]): {
    content_id: string;
    content_type: string;
    content_name: string;
    quantity: number;
    price: string;
  }[];
}
