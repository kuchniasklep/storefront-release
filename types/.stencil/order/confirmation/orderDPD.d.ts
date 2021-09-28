export declare class OrderDPD {
  root: HTMLElement;
  api: string;
  button: string;
  pointMessage: string;
  missingMessage: string;
  description: string;
  code: string;
  initialized: boolean;
  overlay: HTMLKsOverlayElement;
  componentDidLoad(): void;
  show(event: Event): void;
  hide(event: Event): void;
  valid: boolean;
  Validate(): Promise<void>;
  IsValid(): Promise<boolean>;
  select(point: string): Promise<void>;
  render(): any[];
}
