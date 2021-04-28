export declare class FilterSlider {
  root: HTMLElement;
  name: string;
  values: string;
  snap: boolean;
  step: number;
  steps: string;
  from: number;
  to: number;
  valueArray: number[];
  handleActive: boolean;
  swipeLeftHandler(event: Event): void;
  clickHandler(event: Event): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private range;
  render(): any[];
}
