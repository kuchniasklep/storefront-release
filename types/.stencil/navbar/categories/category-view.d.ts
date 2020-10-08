export declare class NavbarCategoryView {
  root: HTMLElement;
  count: number;
  category: number;
  hidden: boolean;
  hiddenO: boolean;
  timeout: number;
  MouseOverHandler(): void;
  MouseOutHandler(): void;
  NavbarColor(state: boolean): void;
  CalculateHeight(): number;
  active: number;
  SetActive(index: number, children: boolean): void;
  render(): any;
}
