export declare class OrderPocztapunkt {
  search: string;
  api: string;
  root: HTMLElement;
  componentDidLoad(): void;
  description: string;
  address: string;
  code: string;
  Show(event: Event): Promise<void>;
  Callback(callback: any): void;
  valid: boolean;
  Validate(): Promise<void>;
  IsValid(): Promise<boolean>;
  render(): any[];
}
