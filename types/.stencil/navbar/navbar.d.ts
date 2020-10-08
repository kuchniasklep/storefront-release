import { NavbarData } from './navbar-data';
export declare class Navbar {
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
  data: NavbarData;
  componentDidLoad(): Promise<void>;
  componentWillLoad(): void;
  mobile: boolean;
  resizeHandler(): void;
  IncrementCart(count?: string): Promise<void>;
  DecrementCart(): Promise<void>;
  IncrementHeart(): Promise<void>;
  DecrementHeart(): Promise<void>;
  render(): any[];
}
