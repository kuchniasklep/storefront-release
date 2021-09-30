export declare const common: import("@stencil/store").ObservableMap<CommonData>;
export interface CommonData {
  preload: boolean;
  logo: string;
  categoryUrl: string;
  cartLink: string;
  heartLink: string;
  accountLink: string;
  loginLink: string;
  logoutLink: string;
  registerLink: string;
  softwareLink: string;
  promo?: string;
  promoLink?: string;
  email: string;
  phone: string;
  workingHours: string;
  company: string;
  address: string;
  nip: string;
  newsletterApi: string;
  suggestionApi: string;
  autocompleteApi: string;
  cookieMessage: string;
  cookieButton: string;
  cookieDelay: 1000;
  categories: Category[];
  social: FooterImageLink[];
  reviewers: FooterImageLink[];
  footerLinks: FooterLinkSection[];
}
export interface Category {
  name: string;
  url: string;
  image?: CategoryImage;
  children?: Category[];
}
export interface CategoryImage {
  url: string;
  width: number;
  height: number;
}
export interface FooterImageLink {
  name: string;
  link: string;
  image: string;
}
export interface FooterLink {
  name: string;
  link: string;
}
export interface FooterLinkSection {
  name: string;
  items: FooterLink[];
}
