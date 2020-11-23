export default interface NavbarData {
  cartLink?: string;
  cartCount?: number;
  favouritesLink?: string;
  favouritesCount?: number;
  loginLink?: string;
  logoutLink?: string;
  accountLink?: string;
  categories?: CategoryData[];
}
export interface CategoryData {
  name?: string;
  url?: string;
  image?: string;
  children?: CategoryData[];
  backgroundColor?: string;
  color?: string;
  icon?: string;
}
export declare function LoadCategories(): Promise<string>;
