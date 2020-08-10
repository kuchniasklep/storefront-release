import { ProductData } from '../product-data';
export declare class ProductTrait {
    root: HTMLElement;
    selectedTraits(data: ProductData): string;
    selectTrait(data: ProductData): Promise<void>;
    fetchTraits<T>(api: string, token: string, id: string, traits: string): Promise<T>;
    render(): any;
}
