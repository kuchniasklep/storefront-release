import { EventEmitter } from '../../stencil-public-runtime';
export declare class Navbar {
  root: HTMLElement;
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
