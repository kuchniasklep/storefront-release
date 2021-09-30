import Swiper from 'swiper';
export declare class ProductImages {
  root: HTMLElement;
  delay: number;
  loaded: boolean;
  carousel: Swiper;
  thumbs: Swiper;
  lightbox: HTMLKsLightboxElement;
  rendered: boolean;
  componentDidRender(): void;
  initialize(): void;
  render(): any[];
}
