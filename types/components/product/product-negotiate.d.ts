export declare class ProductNegotiate {
  root: HTMLElement;
  dialog: HTMLKsDialogElement;
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
