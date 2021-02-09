export declare class MessagePopup {
  root: HTMLElement;
  overlay: HTMLKsOverlayElement;
  name: string;
  message: string;
  link: string;
  linkname: string;
  componentDidRender(): void;
  visible: string;
  show(name: string, message: string, linkname?: string, link?: string): Promise<void>;
  hide(): Promise<void>;
  render(): any;
}
