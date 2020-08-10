import { SuggestedProductData } from './product-data';
export declare class ProductSuggestions {
    root: HTMLElement;
    productId: string;
    name: string;
    api: string;
    loaded: boolean;
    products: SuggestedProductData[];
    componentDidLoad(): Promise<void>;
    Hide(): void;
    ToCart(): void;
    render(): any;
}
