import InputInterface from './inputInterface';
export declare class InputTextarea implements InputInterface {
  root: HTMLElement;
  name: string;
  placeholder: string;
  label: string;
  rows: number;
  min: number;
  max: number;
  required: boolean;
  noresize: boolean;
  invalid: boolean;
  invalidMessage: string;
  render(): any[];
  IsValid(): Promise<boolean>;
  Validate(): Promise<void>;
}
