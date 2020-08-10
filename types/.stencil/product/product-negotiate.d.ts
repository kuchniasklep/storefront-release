export declare class ProductNegotiate {
    root: HTMLElement;
    api: string;
    price: string;
    oldPrice: string;
    name: string;
    heading: string;
    paragraph: string;
    successInfo: string;
    loading: boolean;
    success: boolean;
    failure: boolean;
    closeHandler(): void;
    requestHandler(event: Event): void;
    render(): any[];
}
