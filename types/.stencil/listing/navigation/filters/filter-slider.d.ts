export declare class FilterSlider {
  root: HTMLElement;
  name: string;
  values: string;
  snap: boolean;
  step: number;
  steps: string;
  from: number;
  to: number;
  valueArray: string[];
  handleActive: boolean;
  swipeLeftHandler(event: Event): void;
  clickHandler(event: Event): void;
  componentDidLoad(): void;
  private range;
  render(): any[];
}
