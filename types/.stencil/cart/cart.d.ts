import { CartData } from './cartData';
interface FormProperty {
    key: string;
    value: string;
}
export declare class Cart {
    api: string;
    data: CartData;
    productRemove: string;
    productCount: string;
    addDeal: string;
    countryChange: string;
    shippingChange: string;
    paymentChange: string;
    discountCode: string;
    discountPoints: string;
    discountRemove: string;
    componentWillLoad(): Promise<void>;
    RemoveProduct: (index: number) => Promise<void>;
    lastProductCountCall: (() => void)[];
    ProductCount: (index: number, count: number, last: number) => Promise<void>;
    ProductCountCall: (index: number, current: number, last: number) => Promise<void>;
    GetDataWithCorrectedProductAmounts(productIndex: number, amount: number, maxAmount?: number): CartData;
    GetDataWithoutProducts(data: any): any;
    SetAmount(amount: number, querySelector: string): void;
    AddDeal: (id: string) => Promise<void>;
    CountryChange: (code: string) => Promise<void>;
    ShippingChange: (id: number) => Promise<void>;
    PaymentChange: (id: number) => Promise<void>;
    DiscountRemove: () => Promise<void>;
    DiscountCodeAdd: (code: string) => Promise<void>;
    DiscountPointsAdd: (points: number) => Promise<void>;
    StartLoading(querySelector: string): void;
    ResetLoading(querySelector: string): void;
    ScrollToElement(querySelector: string): void;
    RemoveDiscount(): void;
    ShowMessageFromData(data: any, callback: (d: any) => void): void;
    ProductLoadingWrapper(func: () => Promise<any>): Promise<any>;
    FetchData(url: string, formProperties?: Array<FormProperty>): Promise<any>;
    Update(data: any): Promise<void>;
    Message(text: string): Promise<void>;
    render(): any;
}
export {};
