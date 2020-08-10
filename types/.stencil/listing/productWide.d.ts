export declare class ProductWide {
    unavailable: boolean;
    name: string;
    img: string;
    link: string;
    currentPrice: string;
    previousPrice: string;
    productId: string;
    uniqueId: string;
    cartLoading: boolean;
    root: HTMLElement;
    componentDidLoad(): void;
    CartHandler(success: any): void;
    mobile: boolean;
    resizeHandler(): void;
    componentWillLoad(): void;
    render(): any;
}
