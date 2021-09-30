import { Category } from "../../../global/data/common";
export declare class NavbarCategoryView {
  root: HTMLElement;
  category: Category;
  hidden: boolean;
  hiddenO: boolean;
  timeout: number;
  delaytimeout: number;
  MouseOverHandler(): void;
  MouseOutHandler(): void;
  NavbarColor(state: boolean): void;
  active: number;
  count: number;
  componentWillLoad(): void;
  render(): any;
}
