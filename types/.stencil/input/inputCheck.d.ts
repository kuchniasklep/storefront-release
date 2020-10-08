export declare class InputCheck implements InputInterface {
  name: string;
  label: string;
  value: string;
  radio: boolean;
  checkbox: boolean;
  checked: boolean;
  currentCheck: boolean;
  required: boolean;
  root: HTMLElement;
  valid: boolean;
  validMessage: string;
  render(): any;
  componentWillLoad(): void;
  IsValid(): Promise<boolean>;
  Validate(): Promise<void>;
}
