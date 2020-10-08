export interface NavbarData {
  links?: NavbarLinkData;
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
export interface NavbarLinkData {
  cartLink?: string;
  cartCount?: number;
  favouritesLink?: string;
  favouritesCount?: number;
  loginLink?: string;
  logoutLink?: string;
  accountLink?: string;
}
declare const _default: {
  Provider: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{
    state: NavbarData;
  }>;
  Consumer: import("@stencil/state-tunnel/dist/types/stencil.core").FunctionalComponent<{}>;
  injectProps: (Cstr: any, fieldList: import("@stencil/state-tunnel/dist/types/declarations").PropList<NavbarData>) => void;
};
export default _default;
export declare function LoadCategories(): Promise<string>;
