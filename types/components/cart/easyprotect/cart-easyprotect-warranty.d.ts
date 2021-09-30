export declare class CartEasyprotectWarranty {
  root: HTMLElement;
  productId: string;
  insured: boolean;
  active: string;
  name: string;
  time: number;
  price: number;
  entries: [string, number][];
  options: {
    [index: string]: number;
  };
  componentWillLoad(): void;
  componentWillUpdate(): void;
  update(): void;
  render(): any[];
  change(): void;
  remove(): void;
  months(x: number): string;
}
