export declare class InputSelect implements InputInterface {
  name: string;
  label: string;
  error: boolean;
  lightUp: boolean;
  render(): any;
  IsValid(): Promise<boolean>;
  Validate(): Promise<void>;
}
