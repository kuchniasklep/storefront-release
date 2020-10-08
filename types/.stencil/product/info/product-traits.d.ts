import { EventEmitter } from '../../../stencil-public-runtime';
import { TraitData, TraitDataItem } from "../product-data";
export declare class ProductCount {
  root: HTMLElement;
  traitChange: EventEmitter<[TraitData, TraitDataItem][]>;
  traitChangeHandler(): void;
  componentDidRender(): void;
  render(): any[];
}
