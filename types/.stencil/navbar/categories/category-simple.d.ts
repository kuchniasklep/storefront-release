import { CategoryData } from '../navbar-data';
export declare class NavbarCategorySimple {
  root: HTMLElement;
  category: CategoryData;
  hidden: boolean;
  hiddenO: boolean;
  timeout: number;
  MouseOverHandler(): void;
  MouseOutHandler(): void;
  haschildren: boolean;
  componentWillLoad(): void;
  render(): any;
}
