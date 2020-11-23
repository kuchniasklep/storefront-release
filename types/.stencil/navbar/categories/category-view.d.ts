import { CategoryData } from '../navbar-data';
export declare class NavbarCategoryView {
  root: HTMLElement;
  category: CategoryData;
  hidden: boolean;
  hiddenO: boolean;
  count: number;
  timeout: number;
  componentWillLoad(): void;
  MouseOverHandler(): void;
  MouseOutHandler(): void;
  NavbarColor(state: boolean): void;
  CalculateHeight(): number;
  active: number;
  SetActive(index: number, children: boolean): void;
  render(): any;
}
