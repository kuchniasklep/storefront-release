import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartDiscountPoints {
  placeholder: string;
  message: string;
  points: number;
  orderPoints: number;
  discountPointsAdd: EventEmitter<number>;
  discountPointsAddHandler(event: Event): void;
  loading: boolean;
  ResetLoading(): Promise<void>;
  render(): any[];
}
