import { ITracker, ITrackerProduct } from '../store';
export declare class TikTokTracker implements ITracker {
  ttq: Promise<any>;
  constructor();
  pageview(): void;
  product(_eventID: string, productId: string, name: string, price: number, currency: string): void;
  addToCart(_eventID: string, productId: string, name: string, price: number, quantity: number, currency: string): void;
  order_checkout(_eventID: string, products: ITrackerProduct[], value: number, currency: string): void;
  order_form(_eventID: string, products: ITrackerProduct[], value: number, currency: string): void;
  order_placed(_eventID: string, products: ITrackerProduct[], value: number, currency: string): void;
  search(query: string): void;
  transformProducts(products: ITrackerProduct[]): {
    content_id: string;
    content_type: string;
    content_name: string;
    quantity: number;
    price: number;
  }[];
}
