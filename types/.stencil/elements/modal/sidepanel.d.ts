export declare class SidePanel {
  root: HTMLElement;
  overlay: HTMLKsOverlayElement;
  name: string;
  message: string;
  stack: string;
  componentDidRender(): void;
  visible: string;
  show(): Promise<void>;
  hide(): Promise<void>;
  render(): any;
}
