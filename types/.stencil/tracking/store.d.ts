export interface ITracker {
  pageview?: () => void;
  search?: (query: string) => void;
  product?: (productId: string, name: string, price: number, currency: string) => void;
  addToCart?: (productId: string, name: string, price: number, quantity: number, currency: string) => void;
  order_checkout?: (products: ITrackerProduct[], value: number, currency: string) => void;
  order_form?: (products: ITrackerProduct[], value: number, currency: string) => void;
  order_placed?: (products: ITrackerProduct[], value: number, currency: string) => void;
}
export interface ITrackerProduct {
  id: string;
  name: string;
  price: string;
}
export declare let resolve: any;
export declare const tracker: import("@stencil/store").ObservableMap<{
  loaded: Promise<void>;
  resolved: Promise<void>;
  trackers: ITracker[];
}>;
export declare function eachTracker(callable: (item: ITracker) => void): void;
