import { ITracker } from './store';
export declare class Tracker {
  tiktok: boolean;
  facebook: string;
  componentWillLoad(): void;
  appendTracker(obj: ITracker): void;
}
