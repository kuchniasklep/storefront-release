export declare class ButtonCart {
  root: HTMLElement;
  productId: string;
  name: string;
  url: string;
  price: number;
  count: string;
  traits: string;
  expand: boolean;
  padding: boolean;
  icon: boolean;
  disabled: boolean;
  product: boolean;
  loading: boolean;
  ClickHandler(count?: string): void;
  fetch(url: string, body: BodyInit): Promise<Response>;
  cart(count: any): Promise<void>;
  AddToCart(count?: string): Promise<void>;
  SetCount(count?: string): Promise<void>;
  render(): any;
}
