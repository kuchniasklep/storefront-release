import { EventEmitter } from '../../../stencil-public-runtime';
import { TraitData, TraitDataItem } from "../../../global/data/product";
export declare class ProductInfo {
  root: HTMLElement;
  navbar: HTMLKsNavbarElement;
  errorPopup: HTMLKsErrorPopupElement;
  messagePopup: HTMLKsMessagePopupElement;
  componentDidLoad(): void;
  CountChange(event: CustomEvent<number>): Promise<void>;
  TraitChange(event: CustomEvent<[TraitData, TraitDataItem][]>): Promise<void>;
  AddToCart(): Promise<void>;
  AddToFavourites(): Promise<void>;
  fetch(url: string, body: BodyInit): Promise<Response>;
  productRendered: EventEmitter;
  componentDidRender(): void;
  render(): any[];
}
