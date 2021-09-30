export declare class PromotionalPopup {
  root: HTMLElement;
  dialog: HTMLKsDialogElement;
  name: string;
  href: string;
  image: string;
  color: string;
  texture: string;
  textureOpacity: string;
  textureSize: string;
  displayOnLoad: boolean;
  componentDidLoad(): void;
  Show(): Promise<void>;
  SetCookie(): void;
  render(): any[];
}
