import { ProductData, ProductImageData } from './product-data';
export declare class ProductInfo {
    dataId: string;
    traitId: string;
    shippingTimeApi: string;
    data: ProductData;
    root: HTMLElement;
    watchHandler(newValue: ProductData, oldValue: ProductData): void;
    updateData(data: ProductData): void;
    updateImage(data: ProductImageData): void;
    updateShippingTime(id: string, count: number): void;
    componentWillLoad(): void;
    mobile: boolean;
    handleResize(): void;
    componentDidLoad(): void;
    render(): any;
}
