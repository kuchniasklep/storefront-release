export declare class OrderForm {
  action: string;
  method: string;
  root: HTMLElement;
  loading: boolean;
  render(): any;
  Submit(event: Event): Promise<void>;
  ShowPrompt(message: string): void;
}
