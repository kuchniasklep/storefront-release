export declare class ProductTab {
  root: HTMLKsProductTabElement;
  main: boolean;
  open: boolean;
  name: string;
  content: string;
  transformedContent: string;
  componentWillLoad(): void;
  render(): any[];
  onOpen(): void;
  ImageReplacer(data: string): string;
}
