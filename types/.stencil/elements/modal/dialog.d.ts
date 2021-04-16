import { EventEmitter } from '../../../stencil-public-runtime';
export declare class dialog {
  root: HTMLElement;
  overlay: HTMLKsOverlayElement;
  nopadding: boolean;
  dark: boolean;
  componentDidRender(): void;
  show(): Promise<void>;
  hide(): Promise<void>;
  closed: EventEmitter;
  close: boolean;
  loading: boolean;
  success: boolean;
  failure: boolean;
  heading: string;
  message: string;
  showLoading(): Promise<void>;
  showSuccess(heading: string, message: string): Promise<void>;
  showFailure(heading: string, message: string): Promise<void>;
  closeHandler(): void;
  render(): any;
}
