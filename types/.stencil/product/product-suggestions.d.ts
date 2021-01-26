import { SuggestedProductData } from './product-data';
import Swiper from 'swiper';
export declare class ProductSuggestions {
  root: HTMLElement;
  overlay: HTMLKsOverlayElement;
  carousel: Swiper;
  api: string;
  name: string;
  loading: boolean;
  products: SuggestedProductData[];
  componentDidRender(): void;
  show(productId: string, name: string): Promise<void>;
  hide(): void;
  toCart(): void;
  showCarousel(): void;
  render(): any;
}
