import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartSelectPayment {
  root: HTMLElement;
  name: string;
  valid: boolean;
  error: boolean;
  PaymentChange?: (id: number) => void;
  active: number;
  toggled: boolean;
  loading: boolean;
  StartLoading(): Promise<void>;
  ResetLoading(): Promise<void>;
  Validate(): Promise<boolean>;
  OutsideClickHandler(event: any): void;
  componentDidLoad(): void;
  paymentChange: EventEmitter<number>;
  ActivateItem(id: number): void;
  render(): any;
}
