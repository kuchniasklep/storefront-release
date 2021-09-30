import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartSelectShipping {
  root: HTMLElement;
  name: string;
  valid: boolean;
  error: boolean;
  active: number;
  toggled: boolean;
  loading: boolean;
  StartLoading(): Promise<void>;
  ResetLoading(): Promise<void>;
  Validate(): Promise<boolean>;
  OutsideClickHandler(event: any): void;
  componentDidLoad(): void;
  shippingChange: EventEmitter<number>;
  ActivateItem(id: number): void;
  render(): any;
}
