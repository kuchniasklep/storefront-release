import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartDeal {
  ikey: string;
  name: string;
  img: string;
  link: string;
  price: string;
  loading: boolean;
  addDeal: EventEmitter<string>;
  Add(): void;
  render(): any[];
}
