export declare class ButtonCart {
  productId: string;
  name: string;
  count: string;
  traits: string;
  expand: boolean;
  padding: boolean;
  icon: boolean;
  disabled: boolean;
  product: boolean;
  loading: boolean;
  root: HTMLElement;
  componentDidLoad(): void;
  ClickHandler(count?: string): void;
  ResultHandler(state: any): void;
  AddToCart(count?: string): Promise<void>;
  SetCount(count?: string): Promise<void>;
  render(): any;
}
