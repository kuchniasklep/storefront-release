import { EventEmitter } from '../../stencil-public-runtime';
export declare class Img2 {
  root: HTMLElement;
  src: string;
  alt: string;
  target: string;
  observerMargin: string;
  sync: boolean;
  width: number;
  height: number;
  vertical: boolean;
  horizontal: boolean;
  limit: boolean;
  loaded: boolean;
  lazyLoaded: EventEmitter;
  loadHandler(e: Event): void;
  srcListener(): void;
  private observer;
  private image;
  componentDidLoad(): void;
  initializeObserver(): void;
  render(): any;
}
