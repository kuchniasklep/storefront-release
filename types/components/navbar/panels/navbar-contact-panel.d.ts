export declare class NavbarContactPanel {
  root: HTMLElement;
  phone: string;
  email: string;
  contact: string;
  toggled: boolean;
  mobile: number;
  resizeHandler(): void;
  componentWillRender(): void;
  height: number;
  width: number;
  menuWidth: number;
  mapDimensions(): void;
  MenuWidth(): void;
  FreezeScrolling(): void;
  initialized: boolean;
  visible: string;
  fadeTimeout: number;
  Toggle(): Promise<void>;
  render(): any;
}
