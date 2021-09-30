export default interface InputInterface {
  IsValid(): Promise<boolean>;
  Validate(): Promise<void>;
}
