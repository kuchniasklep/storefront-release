import { EventEmitter } from '../../../stencil-public-runtime';
import { easyprotectInsured, product as easyprotectProduct } from '../cart-data';
export declare class CartEasyprotectDialog {
  root: HTMLElement;
  eligible: easyprotectProduct[];
  active: string[];
  step: number;
  easyprotectWarrantyAdded: EventEmitter<easyprotectInsured>;
  componentWillLoad(): void;
  updateEligible(): void;
  render(): any[];
  products(): any;
  warranty(): any;
  toggle(id: string): void;
  show(): void;
  addProducts(): void;
  addWarranty(): void;
}
