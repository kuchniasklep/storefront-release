import * as cart from '../cart-data';
export declare class CartEasyprotect {
  root: HTMLElement;
  image: string;
  width: number;
  height: number;
  warrantyAdded(event: CustomEvent<cart.easyprotectInsured>): void;
  warrantyChanged(event: CustomEvent<[id: string, months: string]>): void;
  warrantyRemoved(event: CustomEvent<string>): void;
  render(): any[];
  insuredItem(id: string, [months, price]: [number, number]): any;
}
