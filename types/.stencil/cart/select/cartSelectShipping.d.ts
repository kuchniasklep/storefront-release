import { CartDataSelectItem } from '../cartData';
export declare class CartSelectShipping {
  root: HTMLElement;
  name: string;
  valid: boolean;
  error: boolean;
  shipping: CartDataSelectItem[];
  activeShipping: number;
  ShippingChange?: (id: number) => void;
  active: number;
  toggled: boolean;
  loading: boolean;
  StartLoading(): Promise<void>;
  ResetLoading(): Promise<void>;
  Validate(): Promise<boolean>;
  OutsideClickHandler(event: any): void;
  componentDidLoad(): void;
  ActiveItemWatcher(): void;
  ActivateItem(id: number): void;
  render(): any;
}
