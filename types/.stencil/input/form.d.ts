export declare class Form {
  name: string;
  action: string;
  method: string;
  root: HTMLElement;
  render(): any;
  Submit(event: Event): Promise<void>;
}
