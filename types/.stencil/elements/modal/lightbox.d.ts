import { LightboxImageData } from './lightbox-data';
import Swiper from 'swiper';
export declare class Lightbox {
  root: HTMLElement;
  data: LightboxImageData[];
  overlay: HTMLKsOverlayElement;
  thumbs: Swiper;
  carousel: Swiper;
  componentDidRender(): void;
  show(index?: number): Promise<void>;
  hide(): Promise<void>;
  render(): any;
}
