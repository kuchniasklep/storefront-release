import InputInterface from './inputInterface';
export declare class InputNumber implements InputInterface {
  name: string;
  placeholder: string;
  label: string;
  center: boolean;
  emphasis: boolean;
  min: number;
  max: number;
  required: boolean;
  step: number;
  value: number;
  root: HTMLElement;
  valid: boolean;
  validMessage: string;
  render(): any;
  InputHandler: (event: InputEvent) => void;
  ChangeHandler: (event: Event) => void;
  IsValid(): Promise<boolean>;
  Validate(): Promise<void>;
  ClampInput(input: HTMLInputElement): void;
}
