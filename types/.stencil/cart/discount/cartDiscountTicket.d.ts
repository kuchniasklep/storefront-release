import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartDiscountTicket {
  name: string;
  value: string;
  remove: EventEmitter;
  onRemoveHandler(): void;
  loading: boolean;
  render(): any[];
}
