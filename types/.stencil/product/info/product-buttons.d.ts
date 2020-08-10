import { JSX } from '../../../stencil-public-runtime';
import { ProductButtonData } from '../product-data';
export declare class ProductButtons {
    root: HTMLElement;
    value: string;
    buttons?: ProductButtonData;
    traitIDs?: string;
    name?: string;
    availability?: number;
    currentPrice?: string;
    updateShippingTime?: (id: string, count: number) => void;
    render(): any[];
    CartButtons(id: string, traitIDs: string, name: string, count?: string): JSX.Element[];
    Submit(e: Event): void;
    CountChange(maxCount: string): void;
    UnavailableButtons(contact?: string): JSX.Element;
    InstallmentButtons(price: string): JSX.Element[];
}
