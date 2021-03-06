import { EventEmitter } from '../../stencil-public-runtime';
export declare class Img {
  src: string;
  alt: string;
  target: string;
  observerMargin: string;
  sync: boolean;
  vertical: boolean;
  contained: boolean;
  fill: boolean;
  left: boolean;
  right: boolean;
  center: boolean;
  width: number;
  height: number;
  limit: boolean;
  loaded: boolean;
  root: HTMLElement;
  lazyLoaded: EventEmitter;
  loadHandler(e: Event): void;
  srcListener(): void;
  private observer;
  private image;
  componentDidLoad(): void;
  initializeObserver(): void;
  SetAlignment(): void;
  render(): any;
}
