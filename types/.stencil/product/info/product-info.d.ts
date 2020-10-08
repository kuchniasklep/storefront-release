import { TraitData, TraitDataItem } from "../product-data";
export declare class ProductInfo {
  root: HTMLElement;
  dataId: string;
  shippingApi: string;
  traitApi: string;
  cartApi: string;
  cartCountApi: string;
  favouritesApi: string;
  suggestionApi: string;
  connectedCallback(): void;
  navbar: HTMLKsNavbarElement;
  errorPopup: HTMLKsErrorPopupElement;
  componentDidLoad(): void;
  CountChange(event: CustomEvent<number>): Promise<void>;
  TraitChange(event: CustomEvent<[TraitData, TraitDataItem][]>): Promise<void>;
  AddToCart(): Promise<void>;
  AddToFavourites(): Promise<void>;
  fetch(url: string, body: BodyInit): Promise<Response>;
  render(): any[];
}
