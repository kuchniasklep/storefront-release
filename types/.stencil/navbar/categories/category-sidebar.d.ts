export declare class NavbarCategorySidebar {
  root: HTMLElement;
  name: string;
  open: boolean;
  keepSiblingsOpen: boolean;
  hideWithChildren: boolean;
  haschildren: boolean;
  children: HTMLCollection;
  componentWillLoad(): void;
  componentDidLoad(): void;
  click(): void;
  hide(): Promise<void>;
  render(): any;
}
