export declare class ErrorPopup {
  root: HTMLElement;
  overlay: HTMLKsOverlayElement;
  name: string;
  message: string;
  stack: string;
  componentDidRender(): void;
  visible: string;
  show(error: Error): Promise<void>;
  hide(): Promise<void>;
  render(): any;
}
