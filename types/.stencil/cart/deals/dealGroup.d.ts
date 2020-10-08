import { EventEmitter } from '../../../stencil-public-runtime';
import { CartDataDeal } from '../cartData';
export declare class CartDealGroup {
  ikey: string;
  name: string;
  deals: CartDataDeal[];
  currentDeal: CartDataDeal;
  loading: boolean;
  add: EventEmitter;
  onAdd(): void;
  componentWillLoad(): void;
  change(target: EventTarget): void;
  AddDeal: (id: string) => Promise<void>;
  Add(): void;
  render(): any[];
}
