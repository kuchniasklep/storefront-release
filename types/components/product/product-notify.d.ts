export declare class ProductNotify {
  root: HTMLElement;
  dialog: HTMLKsDialogElement;
  resultHeading: string;
  resultParagraph: string;
  requestHandler(event: Event): Promise<void>;
  show(): Promise<void>;
  componentDidLoad(): void;
  render(): any;
}
