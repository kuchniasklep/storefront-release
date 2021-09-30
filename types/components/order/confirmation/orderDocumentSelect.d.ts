export declare class OrderDocumentSelect {
  root: HTMLElement;
  name: string;
  api: string;
  loading: boolean;
  componentDidLoad(): void;
  Validate(): Promise<void>;
  IsValid(): Promise<boolean>;
  render(): any[];
}
