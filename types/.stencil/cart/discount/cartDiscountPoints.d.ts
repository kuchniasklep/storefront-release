import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartDiscountPoints {
  placeholder: string;
  message: string;
  points: number;
  orderPoints: number;
  discountSubmit: EventEmitter;
  onDiscountSubmitHandler(event: Event): void;
  loading: boolean;
  ResetLoading(): Promise<void>;
  render(): any[];
}
