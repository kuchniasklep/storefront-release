export interface SuggestedProductData {
    name: string;
    image: string;
    link: string;
    currentPrice: string;
    previousPrice: string;
}
export interface ProductData {
    name?: string;
    breadcrumbs?: BreadcrumbData[];
    brand?: string;
    brandLink?: string;
    description?: string;
    previousPrice?: string;
    currentPrice?: string;
    shippingPrice?: string;
    shippingTime?: string;
    availability?: number;
    warranty?: string;
    warrantyLink?: string;
    images?: ProductImageData[];
    traitIDs?: string;
    traits?: TraitData[];
    catalog?: string;
    model?: string;
    ean?: string;
    reviews?: ReviewCollectionData;
    buttons?: ProductButtonData;
    update?: (data: ProductData) => void;
    updateImage?: (data: ProductImageData) => void;
    updateShippingTime?: (id: string, count: number) => void;
}
export interface ReviewCollectionData {
    score: string;
    count: string;
    review: ReviewData[];
}
export interface ReviewData {
    name: string;
    text: string;
    overallScore: string;
    bestScore: string;
}
export interface BreadcrumbData {
    name: string;
    link: string;
}
export interface ProductImageData {
    thumb: string;
    preview: string;
    full: string;
}
export interface TraitData {
    name: string;
    id: string;
    selected: string;
    items: TraitDataItem[];
}
export interface TraitDataItem {
    name: string;
    id: string;
}
export interface ProductButtonData {
    id: string;
    available: boolean;
    contact: string;
    CreditAgricole: string;
    PayU: string;
}
export interface FetchedTraitData {
    kupowanie: string;
    dostepnosc: string;
    czaswysylki: string;
    nrkat: string;
    ean: string;
    ilosc: string;
    cena: string;
    cenapoprzednia: string;
}
export interface FetchedTraitImageData {
    male: string;
    srednie: string;
    duze: string;
}
declare const _default: {
    Provider: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{
        state: ProductData;
    }>;
    Consumer: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{}>;
    injectProps: (Cstr: any, fieldList: import("@stencil/state-tunnel/dist/types/declarations").PropList<ProductData>) => void;
};
export default _default;
