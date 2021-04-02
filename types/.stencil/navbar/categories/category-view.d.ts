import { CategoryImageData } from '../navbar-data';
export declare class NavbarCategoryView {
  root: HTMLElement;
  imageData: CategoryImageData[];
  images: string;
  hidden: boolean;
  hiddenO: boolean;
  timeout: number;
  MouseOverHandler(): void;
  MouseOutHandler(): void;
  NavbarColor(state: boolean): void;
  active: number;
  count: number;
  children: NodeListOf<Element>;
  componentWillLoad(): void;
  activeChange(current: number, old: number): void;
  render(): any;
}
