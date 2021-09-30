import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartDiscountCode {
  placeholder: string;
  image: string;
  discountCodeAdd: EventEmitter<string>;
  discountCodeAddHandler(event: Event): void;
  loading: boolean;
  ResetLoading(): Promise<void>;
  render(): any[];
}
