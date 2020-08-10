export interface CartData {
    totalValue?: number;
    productValue?: number;
    productAmount?: number;
    pointsForOrder?: number;
    totalShippingTime?: string;
    otherValues?: CartDataSummaryItem[];
    shippingProgress?: CartDataShippingProgress;
    products?: CartDataProduct[];
    deals?: CartDataDeal[];
    dealGroups?: CartDataDealGroup[];
    shipping?: CartDataSelectItem[];
    payment?: CartDataSelectItem[];
    shippingMessage?: string;
    paymentMessage?: string;
    activeShipping?: number;
    activePayment?: number;
    points?: CartDataPoints;
    discount?: CartDataDiscount;
    loading?: number;
    loadingProducts?: number;
    RemoveProduct?: (index: number) => void;
    ProductCount?: (index: number, current: number, last: number) => void;
    AddDeal?: (id: string) => Promise<void>;
    CountryChange?: (code: string) => void;
    ShippingChange?: (id: number) => void;
    PaymentChange?: (id: number) => void;
    DiscountCodeAdd?: (string: any) => void;
    DiscountPointsAdd?: (number: any) => void;
    DiscountRemove?: () => void;
}
export interface CartDataDiscount {
    heading: string;
    name: string;
    value: string;
}
export interface CartDataPoints {
    threshold: number;
    available: number;
    value: number;
}
export interface CartDataSummaryItem {
    name: string;
    value: number;
}
export interface CartDataShippingProgress {
    heading: string;
    threshold: number;
    color: string;
}
export interface CartDataProduct {
    id: string;
    name: string;
    link: string;
    img: string;
    price: number;
    amount: number;
    maxAmount: number;
    shippingTime: string;
}
export interface CartDataDeal {
    id: string;
    name: string;
    link: string;
    img: string;
    price: string;
}
export interface CartDataDealGroup {
    name: string;
    deals: CartDataDeal[];
}
export interface CartDataSelectItem {
    id: number;
    logo: string;
    name: string;
    price?: string;
    color: string;
}
declare const _default: {
    Provider: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{
        state: CartData;
    }>;
    Consumer: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{}>;
    injectProps: (Cstr: any, fieldList: import("@stencil/state-tunnel/dist/types/declarations").PropList<CartData>) => void;
};
export default _default;
