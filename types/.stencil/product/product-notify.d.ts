export declare class ProductNotify {
  root: HTMLElement;
  dialog: HTMLKsDialogElement;
  api: string;
  product: number;
  agreement: string;
  backorderLabel: string;
  heading: string;
  paragraph: string;
  successHeading: string;
  successMessage: string;
  updatedHeading: string;
  updatedMessage: string;
  existsHeading: string;
  existsMessage: string;
  faliureHeading: string;
  faliureMessage: string;
  requestHandler(event: Event): Promise<void>;
  show(): Promise<void>;
  componentDidLoad(): void;
  render(): any;
}
