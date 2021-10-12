export interface ITracker {
  pageview?: (eventID: string) => void;
  search?: (eventID: string, query: string) => void;
  product?: (eventID: string, productId: string, name: string, price: number, currency: string) => void;
  addToCart?: (eventID: string, productId: string, name: string, price: number, quantity: number, currency: string) => void;
  order_checkout?: (eventID: string, products: ITrackerProduct[], value: number, currency: string) => void;
  order_form?: (eventID: string, products: ITrackerProduct[], value: number, currency: string) => void;
  order_placed?: (eventID: string, products: ITrackerProduct[], value: number, currency: string) => void;
}
export interface ITrackerProduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export declare let resolve: any;
export declare const tracker: import("@stencil/store").ObservableMap<{
  loaded: Promise<void>;
  resolved: Promise<void>;
  trackers: ITracker[];
}>;
export declare function eachTracker(callable: (item: ITracker) => void): void;
