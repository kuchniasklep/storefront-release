import { CartDataDeal, CartDataDealGroup } from '../cartData';
export declare class CartDealContainer {
    root: HTMLElement;
    productValue: number;
    productAmount: number;
    deals: CartDataDeal[];
    dealGroups: CartDataDealGroup[];
    render(): any[][];
}
