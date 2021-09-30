export declare class NavbarSearch {
  root: HTMLElement;
  mobile: boolean;
  active: boolean;
  select: number;
  items: any;
  data: any;
  maxCount: number;
  getData(): Promise<void>;
  submit(e: Event): void;
  focus(): Promise<void>;
  blurenabled: boolean;
  blur(): void;
  clickListener(): void;
  input(): void;
  key(e: KeyboardEvent): void;
  inputElement: HTMLInputElement;
  componentDidLoad(): void;
  render(): any;
}
