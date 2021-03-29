export interface data {
  api?: api;
  totalValue?: number;
  productValue?: number;
  productAmount?: number;
  pointsForOrder?: number;
  totalShippingTime?: string;
  otherValues?: summaryItem[];
  shippingProgress?: shippingProgress;
  products?: {
    [index: string]: product;
  };
  deals?: deal[];
  dealGroups?: dealGroup[];
  shipping?: selectItem[];
  payment?: selectItem[];
  shippingMessage?: string;
  paymentMessage?: string;
  activeShipping?: number;
  activePayment?: number;
  points?: points;
  discount?: discount;
  loading?: number;
  loadingProducts?: number;
  easyprotect?: easyprotect;
  insured?: easyprotectInsured;
}
export interface api {
  productRemove?: string;
  productCount?: string;
  addDeal?: string;
  countryChange?: string;
  shippingChange?: string;
  paymentChange?: string;
  discountCode?: string;
  discountPoints?: string;
  discountRemove?: string;
  easyprotectChange?: string;
  easyprotectRemove?: string;
}
export interface discount {
  heading: string;
  name: string;
  value: string;
}
export interface points {
  threshold: number;
  available: number;
  value: number;
}
export interface summaryItem {
  name: string;
  value: number;
}
export interface shippingProgress {
  heading: string;
  threshold: number;
  color: string;
}
export interface product {
  id: string;
  name: string;
  link: string;
  img: string;
  warranty: string;
  price: number;
  amount: number;
  maxAmount: number;
  shippingTime: string;
}
export interface deal {
  id: string;
  name: string;
  link: string;
  img: string;
  price: string;
}
export interface dealGroup {
  name: string;
  deals: deal[];
}
export interface selectItem {
  id: number;
  logo: string;
  name: string;
  price?: string;
  color: string;
}
export interface easyprotect {
  [index: string]: {
    [index: string]: number;
  };
}
export declare type easyprotectInsured = {
  [index: string]: string;
};
