import Swiper from 'swiper';
export declare class BannerContainer {
  root: HTMLElement;
  delay: number;
  autoplay: number;
  carousel: Swiper;
  window: boolean;
  rendered: boolean;
  loaded: boolean;
  componentDidLoad(): void;
  initialize(): void;
  render(): any;
}
