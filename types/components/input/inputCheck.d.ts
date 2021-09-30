import InputInterface from './inputInterface';
export declare class InputCheck implements InputInterface {
  name: string;
  label: string;
  value: string;
  large: boolean;
  radio: boolean;
  checkbox: boolean;
  checked: boolean;
  currentCheck: boolean;
  nomessage: boolean;
  required: boolean;
  root: HTMLElement;
  invalid: boolean;
  invalidMessage: string;
  render(): any[];
  componentWillLoad(): void;
  IsValid(): Promise<boolean>;
  Validate(): Promise<void>;
}
