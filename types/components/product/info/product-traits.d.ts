import { EventEmitter } from '../../../stencil-public-runtime';
import { TraitData, TraitDataItem } from "../../../global/data/product";
export declare class ProductCount {
  root: HTMLElement;
  traitChange: EventEmitter<[TraitData, TraitDataItem][]>;
  traitChangeHandler(): void;
  componentDidRender(): void;
  render(): any[];
}
