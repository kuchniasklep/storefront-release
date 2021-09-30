export declare const product: import("@stencil/store").ObservableMap<ProductData>;
export interface ProductData {
  id: string;
  name: string;
  breadcrumbs: BreadcrumbData[];
  brand: BrandData;
  description?: string;
  attributes?: AttributeData[];
  previousPrice?: string;
  currentPrice: string;
  shippingPrice?: string;
  shippingTime: string;
  shippingMessage: string;
  availability: number;
  count: number;
  cartLoading?: boolean;
  favouritesLoading?: boolean;
  favouritesCompleted?: boolean;
  images?: ProductImageData[];
  traitIDs?: string;
  traits?: TraitData[];
  catalog?: string;
  model?: string;
  ean?: string;
  reviews?: ReviewCollectionData;
  infoBanner?: InfoBannerData;
  notifyStrings: NotifyStringData;
  api: ApiData;
  warranty: string;
  warrantyLink: string;
  points: PointData;
  negotiate: NegotiateData;
  installments: InstallmentData;
  tags: LinkPair[];
  variants: VariantData[];
  tabs: TabData[];
  youtube: string[];
  comments: CommentData;
  similarHeading: string;
  similar: ProductCardData[];
  accessoriesHeading: string;
  accessories: ProductCardData[];
}
export interface ProductCardData {
  name: string;
  image: string;
  currentPrice: string;
  previousPrice?: string;
}
export interface CommentData {
  addLink: string;
  addMessage: string;
  hideAfter: number;
  entries: Comment[];
}
export interface Comment {
  author: string;
  when: string;
  content: string;
}
export interface TabData {
  name: string;
  content: string;
}
export interface VariantData {
  link: string;
  name: string;
  image: string;
  active?: boolean;
  unavailable?: boolean;
}
export interface LinkPair {
  link: string;
  name: string;
}
export interface BrandData {
  name: string;
  link: string;
  logo: string;
  width: number;
  height: number;
}
export interface InstallmentData {
  button: string;
  payuId: string;
  payuKey: string;
  payuIcon: string;
  caParameters: string;
  caIcon: string;
}
export interface NegotiateData {
  agreement: string;
  heading: string;
  paragraph: string;
  successHeading: string;
  successMessage: string;
  faliureHeading: string;
  faliureMessage: string;
}
export interface PointData {
  message: string;
  shortMessage: string;
  value: number;
  conversion: number;
  count: number;
}
export interface ApiData {
  notify: string;
  shipping: string;
  trait: string;
  cart: string;
  favourites: string;
  suggestion: string;
  negotiate: string;
}
export interface InfoBannerData {
  image: string;
  width: number;
  height: number;
  color: string;
  name: string;
}
export interface NotifyStringData {
  heading: string;
  paragraph: string;
  backorders: string;
  agreement: string;
  errorHeading: string;
  errorParagraph: string;
}
export interface SuggestedProductData {
  name: string;
  image: string;
  link: string;
  currentPrice: string;
  previousPrice: string;
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
