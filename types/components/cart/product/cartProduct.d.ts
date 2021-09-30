import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartProduct {
  productId: string;
  name: string;
  img: string;
  link: string;
  price: number;
  shippingTime: string;
  amount: number;
  maxAmount: number;
  removable: boolean;
  loading: boolean;
  removeProduct: EventEmitter<string>;
  onRemoveHandler(): void;
  productCount: EventEmitter<[id: string, count: number, last: number]>;
  onCountHandler(detail: any): void;
  ResetLoading(): Promise<void>;
  mobile: number;
  resizeHandler(): void;
  componentWillLoad(): void;
  render(): any[];
}
