import { EventEmitter } from '../../stencil-public-runtime';
export declare class Navbar {
  root: HTMLElement;
  logo: string;
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
  componentDidLoad(): Promise<void>;
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
