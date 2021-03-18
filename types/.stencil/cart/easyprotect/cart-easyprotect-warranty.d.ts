import { EventEmitter } from '../../../stencil-public-runtime';
import { easyprotectInsured } from '../cart-data';
export declare class CartEasyprotectWarranty {
  root: HTMLElement;
  productId: string;
  insured: boolean;
  active: string;
  easyprotectWarrantyChanged: EventEmitter<easyprotectInsured>;
  easyprotectWarrantyRemoved: EventEmitter<string>;
  componentWillLoad(): void;
  componentWillUpdate(): void;
  render(): any[];
  change(): void;
  remove(): void;
  months(x: number): string;
}
