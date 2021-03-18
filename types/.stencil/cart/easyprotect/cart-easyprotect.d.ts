import * as cart from '../cart-data';
export declare class CartEasyprotect {
  root: HTMLElement;
  image: string;
  width: number;
  height: number;
  changeApi: string;
  removeApi: string;
  warrantyAdded(event: CustomEvent<cart.easyprotectInsured>): void;
  warrantyRemoved(event: CustomEvent<string>): void;
  render(): any[];
}
