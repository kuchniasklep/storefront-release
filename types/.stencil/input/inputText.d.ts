import InputInterface from './inputInterface';
export declare class InputText implements InputInterface {
  root: HTMLElement;
  name: string;
  placeholder: string;
  label: string;
  icon: string;
  value: string;
  digits: boolean;
  price: boolean;
  email: boolean;
  url: boolean;
  password: boolean;
  sameAs: string;
  required: boolean;
  regex: string;
  regexMessage: string;
  min: number;
  max: number;
  center: boolean;
  large: boolean;
  emphasis: boolean;
  nomessage: boolean;
  novalidate: boolean;
  message: string;
  invalid: boolean;
  render(): any[];
  Change(): void;
  MessageWatcher(): void;
  IsValid(): Promise<boolean>;
  Validate(): Promise<void>;
}
