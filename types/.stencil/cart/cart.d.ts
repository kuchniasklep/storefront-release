import * as cart from './cart-data';
interface FormProperty {
  key: string;
  value: string;
}
export declare class Cart {
  dataId: string;
  api: string;
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
  RemoveProduct(event: CustomEvent<number>): Promise<void>;
  lastProductCountCall: (() => void)[];
  ProductCount(event: CustomEvent<[index: number, count: number, last: number]>): Promise<void>;
  ProductCountCall: (index: number, current: number, last: number) => Promise<void>;
  GetCorrectedProductAmounts(index: number, amount: number, maxAmount?: number): cart.product[];
  GetDataWithoutProducts(data: any): any;
  SetAmount(amount: number, querySelector: string): void;
  AddDeal(event: CustomEvent<string>): Promise<void>;
  CountryChange(event: CustomEvent<string>): Promise<void>;
  ShippingChange(event: CustomEvent<number>): Promise<void>;
  PaymentChange(event: CustomEvent<number>): Promise<void>;
  DiscountRemove(): Promise<void>;
  DiscountCodeAdd(event: CustomEvent<string>): Promise<void>;
  DiscountPointsAdd(event: CustomEvent<number>): Promise<void>;
  StartLoading(querySelector: string): void;
  ResetLoading(querySelector: string): void;
  ScrollToElement(querySelector: string): void;
  RemoveDiscount(): void;
  ShowMessageFromData(data: any, callback: (d: any) => void): void;
  ProductLoadingWrapper(func: () => Promise<any>): Promise<any>;
  fetch(url: string, formProperties?: Array<FormProperty>): Promise<any>;
  update(data: any): Promise<void>;
  message(text: string): Promise<void>;
  render(): any;
}
export {};
