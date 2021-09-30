import { Category } from "../../../global/data/common";
export declare class NavbarCategorySidebar {
  root: HTMLElement;
  category: Category;
  open: boolean;
  keepSiblingsOpen: boolean;
  hideWithChildren: boolean;
  click(): void;
  hide(): Promise<void>;
  render(): any;
}
