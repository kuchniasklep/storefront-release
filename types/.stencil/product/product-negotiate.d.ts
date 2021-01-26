export declare class ProductNegotiate {
  root: HTMLElement;
  dialog: HTMLKsDialogElement;
  api: string;
  price: string;
  oldPrice: string;
  name: string;
  agreement: string;
  heading: string;
  paragraph: string;
  successHeading: string;
  successMessage: string;
  faliureHeading: string;
  faliureMessage: string;
  requestHandler(event: Event): Promise<void>;
  componentDidRender(): void;
  render(): any[];
}
