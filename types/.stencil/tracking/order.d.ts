import { ITrackerProduct } from './store';
export declare class TrackerOrder {
  checkout: boolean;
  form: boolean;
  placed: boolean;
  products: ITrackerProduct[] | string;
  value: number;
  currency: string;
  componentWillLoad(): void;
}
