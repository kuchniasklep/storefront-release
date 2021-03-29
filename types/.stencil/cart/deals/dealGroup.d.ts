import { EventEmitter } from '../../../stencil-public-runtime';
import { deal } from '../cart-data';
export declare class CartDealGroup {
  ikey: string;
  name: string;
  deals: deal[];
  currentDeal: deal;
  loading: boolean;
  componentWillLoad(): void;
  change(target: EventTarget): void;
  addDeal: EventEmitter<string>;
  Add(): void;
  render(): any[];
}
