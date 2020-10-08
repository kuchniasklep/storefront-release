export interface SuggestedProductData {
  name: string;
  image: string;
  link: string;
  currentPrice: string;
  previousPrice: string;
}
export interface ProductData {
  id?: string;
  name?: string;
  breadcrumbs?: BreadcrumbData[];
  brand?: string;
  brandLink?: string;
  description?: string;
  attributes?: AttributeData[];
  previousPrice?: string;
  currentPrice?: string;
  shippingPrice?: string;
  shippingTime?: string;
  shippingMessage?: string;
  availability?: number;
  count?: number;
  cartLoading?: boolean;
  favouritesLoading?: boolean;
  favouritesCompleted?: boolean;
  images?: ProductImageData[];
  traitIDs?: string;
  traits?: TraitData[];
  catalog?: string;
  model?: string;
  ean?: string;
  negotiate?: boolean;
  reviews?: ReviewCollectionData;
}
export interface ReviewCollectionData {
  score: string;
  count: string;
  review: ReviewData[];
}
export interface AttributeData {
  name?: string;
  text?: string;
  link?: string;
  image?: string;
  emphasis?: boolean;
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
  thumb: ProductImageProperties;
  preview: ProductImageProperties;
  full: ProductImageProperties;
}
export interface ProductImageProperties {
  url: string;
  width?: number;
  height?: number;
}
export interface TraitData {
  name: string;
  id: string;
  items: TraitDataItem[];
}
export interface TraitDataItem {
  name: string;
  id: string;
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
