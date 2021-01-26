export declare class NewsletterPopup {
  root: HTMLElement;
  dialog: HTMLKsDialogElement;
  api: string;
  loginLink: string;
  registerLink: string;
  loggedIn: boolean;
  email: string;
  agreement: string;
  infoMessage: string;
  successHeading: string;
  faliureHeading: string;
  componentDidLoad(): void;
  requestHandler(event: Event): Promise<void>;
  Show(): Promise<void>;
  SetCookie(): void;
  render(): any[];
}
