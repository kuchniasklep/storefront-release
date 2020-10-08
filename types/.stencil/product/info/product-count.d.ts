import { EventEmitter } from '../../../stencil-public-runtime';
export declare class ProductCount {
  root: HTMLElement;
  input: HTMLInputElement;
  componentDidLoad(): void;
  countChange: EventEmitter<number>;
  CountChangeHandler(): void;
  ClampLength(): void;
  ClampValue(): void;
  Increment(): void;
  Decrement(): void;
  Target(e: Event, func: (input: HTMLInputElement) => void): void;
  render(): any[];
}
