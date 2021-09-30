interface SelectOption {
  name: string;
  value: string;
}
export declare class InputSelectDynamic {
  name: string;
  label: string;
  api: string;
  apiData: string;
  selectedId: string;
  lightUp: boolean;
  data: SelectOption[];
  loading: boolean;
  message: string;
  FetchData(): Promise<void>;
  Validate(): Promise<void>;
  IsValid(): Promise<boolean>;
  componentWillLoad(): void;
  Decode(input: any): string;
  render(): any;
}
export {};
