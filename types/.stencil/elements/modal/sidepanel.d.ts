export declare class SidePanel {
  root: HTMLElement;
  overlay: HTMLKsOverlayElement;
  left: boolean;
  name: string;
  message: string;
  stack: string;
  componentDidRender(): void;
  visible: string;
  show(): Promise<void>;
  hide(): Promise<void>;
  onClosed(): void;
  render(): any;
}
