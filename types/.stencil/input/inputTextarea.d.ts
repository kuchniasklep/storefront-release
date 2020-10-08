export declare class InputTextarea implements InputInterface {
  name: string;
  placeholder: string;
  label: string;
  rows: number;
  min: number;
  max: number;
  required: boolean;
  root: HTMLElement;
  valid: boolean;
  validMessage: string;
  render(): any;
  IsValid(): Promise<boolean>;
  Validate(): Promise<void>;
}
