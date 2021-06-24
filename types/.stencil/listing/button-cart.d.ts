export declare class ButtonCart {
  root: HTMLElement;
  productId: string;
  name: string;
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
  ResultHandler(state: any): void;
  AddToCart(count?: string): Promise<void>;
  SetCount(count?: string): Promise<void>;
  render(): any;
}
