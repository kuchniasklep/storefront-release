export declare class NavbarSidebar {
  root: HTMLElement;
  active: number;
  sidepanel: HTMLKsSidepanelElement;
  componentDidRender(): void;
  toggled: boolean;
  show(): Promise<void>;
  render(): any;
}
