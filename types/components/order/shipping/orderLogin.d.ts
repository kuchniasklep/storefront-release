export declare class OrderLogin {
  root: HTMLElement;
  api: string;
  action: string;
  passwordMessage: string;
  passwordRecovery: string;
  componentDidLoad(): void;
  render(): any[];
  Submit(event: Event): Promise<void>;
  LoginPrompt(data: FormData): Promise<void>;
}
