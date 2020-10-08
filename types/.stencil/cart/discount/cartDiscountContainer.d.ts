import { CartDataPoints, CartDataDiscount } from '../cartData';
export declare class CartDiscountContainer {
  root: HTMLElement;
  codeBanner: string;
  codePlaceholder: string;
  pointsPlaceholder: string;
  pointsMessage: string;
  loginMessage: string;
  infoMessage: string;
  noPointsHeading: string;
  noPointsMessage: string;
  thresholdHeading: string;
  thresholdMessage: string;
  loginUrl: string;
  loggedIn: boolean;
  disablePoints: boolean;
  pointsForOrder: number;
  productValue: number;
  points: CartDataPoints;
  discount: CartDataDiscount;
  RemoveDiscount: () => void;
  DiscountCodeAdd: (string: any) => void;
  DiscountPointsAdd: (number: any) => void;
  DiscountRemove: () => void;
  render(): any;
}
