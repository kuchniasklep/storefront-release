import { EventEmitter } from '../../stencil-public-runtime';
export declare class Navbar {
  root: HTMLElement;
  logo: string;
  promo: string;
  promoLink: string;
  cartLink: string;
  cartCount: number;
  heartLink: string;
  heartCount: number;
  loginLink: string;
  logoutLink: string;
  accountLink: string;
  categoryUrl: string;
  phone: string;
  email: string;
  contact: string;
  navbarRendered: EventEmitter;
  componentDidRender(): void;
  componentWillLoad(): void;
  mobile: boolean;
  resizeHandler(): void;
  IncrementCart(count?: string): Promise<void>;
  DecrementCart(): Promise<void>;
  IncrementHeart(): Promise<void>;
  DecrementHeart(): Promise<void>;
  render(): any[];
}
