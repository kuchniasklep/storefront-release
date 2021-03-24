import { product as easyprotectProduct } from '../cart-data';
export declare class CartEasyprotectDialog {
  root: HTMLElement;
  eligible: easyprotectProduct[];
  active: string[];
  step: number;
  componentWillLoad(): void;
  overlay: HTMLKsOverlayElement;
  componentDidLoad(): void;
  updateEligible(): void;
  render(): any[];
  products(): any;
  warranty(): any[];
  toggle(id: string): void;
  show(): void;
  hide(): void;
  addProducts(): void;
  back(): void;
  addWarranty(): Promise<void>;
  end(): void;
}
