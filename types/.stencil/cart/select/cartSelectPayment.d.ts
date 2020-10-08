import { CartDataSelectItem } from '../cartData';
export declare class CartSelectPayment {
  root: HTMLElement;
  name: string;
  valid: boolean;
  error: boolean;
  payment: CartDataSelectItem[];
  activePayment: number;
  PaymentChange?: (id: number) => void;
  active: number;
  toggled: boolean;
  loading: boolean;
  StartLoading(): Promise<void>;
  ResetLoading(): Promise<void>;
  Validate(): Promise<boolean>;
  OutsideClickHandler(event: any): void;
  componentDidLoad(): void;
  ActivateItem(id: number): void;
  ActiveItemWatcher(): void;
  render(): any;
}
