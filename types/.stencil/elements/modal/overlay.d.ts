export declare class Overlay {
  root: HTMLElement;
  dark: boolean;
  timeout: number;
  timeoutLength: number;
  show(): Promise<void>;
  hide(): Promise<void>;
  body: HTMLBodyElement;
  scroll: number;
  scrollToggle(): void;
  render(): any;
}
