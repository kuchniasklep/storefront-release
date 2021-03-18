import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartEasyprotectWarranty {
  root: HTMLElement;
  productId: string;
  insured: boolean;
  active: string;
  easyprotectWarrantyChanged: EventEmitter<[id: string, months: string]>;
  easyprotectWarrantyRemoved: EventEmitter<string>;
  componentWillLoad(): void;
  render(): any[];
  change(): void;
  remove(): void;
  months(x: number): string;
}
