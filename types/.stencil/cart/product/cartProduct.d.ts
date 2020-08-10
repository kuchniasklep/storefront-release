import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartProduct {
    ikey: string;
    name: string;
    img: string;
    link: string;
    price: number;
    shippingTime: string;
    amount: number;
    maxAmount: number;
    removable: boolean;
    loading: boolean;
    remove: EventEmitter;
    onRemoveHandler(): void;
    count: EventEmitter;
    onCountHandler(detail: any): void;
    ResetLoading(): Promise<void>;
    mobile: number;
    resizeHandler(): void;
    componentWillLoad(): void;
    render(): any[];
}
