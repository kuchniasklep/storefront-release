import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartSpinner {
  name: string;
  initialValue: number;
  max: number;
  value: number;
  componentWillLoad(): void;
  Increment(): void;
  Decrement(): void;
  Change(e: Event): void;
  timeout: number;
  changed: EventEmitter;
  onChangedHandler(current: number, last: number): void;
  SetAmount(amount: number): Promise<void>;
  ResetAmount(): Promise<void>;
  render(): any;
}
