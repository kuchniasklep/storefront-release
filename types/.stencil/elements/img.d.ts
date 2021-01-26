import { EventEmitter } from '../../stencil-public-runtime';
export declare class Img {
  src: string;
  alt: string;
  target: string;
  sync: boolean;
  vertical: boolean;
  contained: boolean;
  left: boolean;
  right: boolean;
  center: boolean;
  width: number;
  height: number;
  limit: boolean;
  loaded: boolean;
  loadAnimated: boolean;
  root: HTMLElement;
  lazyLoaded: EventEmitter;
  loadHandler(e: Event): void;
  componentDidUpdate(): void;
  srcListener(): void;
  private observer;
  private image;
  componentDidLoad(): void;
  SetAlignment(): void;
  render(): any;
}
