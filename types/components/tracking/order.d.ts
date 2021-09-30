import { ITrackerProduct } from './store';
export declare class TrackerOrder {
  checkout: boolean;
  form: boolean;
  placed: boolean;
  eventId: string;
  products: ITrackerProduct[] | string;
  value: number;
  currency: string;
  componentWillLoad(): void;
}
