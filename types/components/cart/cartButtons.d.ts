export declare class CartButtons {
  root: HTMLElement;
  href: string;
  loadingDelayed: boolean;
  loadingTimeout: number;
  LoadingWatcher(loading: any): void;
  componentDidLoad(): void;
  clickHandler(): Promise<void>;
  render(): any;
}
