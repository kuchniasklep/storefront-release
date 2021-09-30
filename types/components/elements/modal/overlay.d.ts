import { EventEmitter } from '../../../stencil-public-runtime';
export declare class Overlay {
  root: HTMLElement;
  dark: boolean;
  close: boolean;
  closed: EventEmitter;
  timeout: number;
  timeoutLength: number;
  componentDidLoad(): void;
  show(): Promise<void>;
  hide(): Promise<void>;
  body: HTMLBodyElement;
  scroll: number;
  scrollToggle(): void;
  render(): any;
}
