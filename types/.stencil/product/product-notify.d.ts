export declare class ProductNotify {
  root: HTMLElement;
  dialog: HTMLKsDialogElement;
  api: string;
  product: number;
  agreement: string;
  backorders: string;
  heading: string;
  paragraph: string;
  errorHeading: string;
  errorParagraph: string;
  resultHeading: string;
  resultParagraph: string;
  requestHandler(event: Event): Promise<void>;
  show(): Promise<void>;
  componentDidLoad(): void;
  render(): any;
}
