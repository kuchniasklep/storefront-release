import { EventEmitter } from '../../../stencil-public-runtime';
export declare class CartCountrySelect {
  root: HTMLElement;
  countryChange: EventEmitter<string>;
  ChangeHandler(event: Event): void;
  render(): any[];
}
