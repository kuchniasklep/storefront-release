export declare class NavbarSidebar {
  root: HTMLElement;
  active: number;
  sidepanel: HTMLKsSidepanelElement;
  componentDidRender(): void;
  toggled: boolean;
  toggle(): Promise<void>;
  render(): any;
}
