import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartProduct {
  ikey: string;
  index: number;
  name: string;
  img: string;
  link: string;
  price: number;
  shippingTime: string;
  amount: number;
  maxAmount: number;
  removable: boolean;
  loading: boolean;
  removeProduct: EventEmitter<number>;
  onRemoveHandler(): void;
  productCount: EventEmitter<[index: number, count: number, last: number]>;
  onCountHandler(detail: any): void;
  ResetLoading(): Promise<void>;
  mobile: number;
  resizeHandler(): void;
  componentWillLoad(): void;
  render(): any[];
}
