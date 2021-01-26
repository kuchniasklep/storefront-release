import { CategoryData } from "./navbar-data";
export declare class NavbarSidebar {
  root: HTMLElement;
  active: number;
  expand(e: Event, index: number): void;
  sidepanel: HTMLKsSidepanelElement;
  componentDidRender(): void;
  childrenHeight(index: number, category: CategoryData): {
    maxHeight: string;
  };
  toggled: boolean;
  toggle(): Promise<void>;
  render(): any;
}
