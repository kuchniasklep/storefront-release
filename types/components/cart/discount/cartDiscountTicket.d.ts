import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartDiscountTicket {
  name: string;
  value: string;
  discountRemove: EventEmitter;
  discountRemoveHandler(): void;
  loading: boolean;
  render(): any[];
}
