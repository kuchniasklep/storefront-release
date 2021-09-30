import { Category } from "../../../global/data/common";
export declare class NavbarCategorySimple {
  root: HTMLElement;
  category: Category;
  hidden: boolean;
  hiddenO: boolean;
  timeout: number;
  delaytimeout: number;
  MouseOverHandler(): void;
  MouseOutHandler(): void;
  render(): any;
}
