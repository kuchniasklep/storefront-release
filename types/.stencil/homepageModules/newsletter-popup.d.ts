export declare class NewsletterPopup {
  root: HTMLElement;
  api: string;
  loginLink: string;
  registerLink: string;
  loggedIn: boolean;
  email: string;
  agreement: string;
  mobile: boolean;
  resizeHandler(): void;
  loading: boolean;
  success: boolean;
  failure: boolean;
  message: string;
  requestHandler(event: Event): void;
  Show(): Promise<void>;
  SetCookie(): void;
  componentDidLoad(): void;
  render(): any[];
}
