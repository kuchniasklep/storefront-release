export declare class RecentProducts {
  image: string;
  root: HTMLElement;
  mobile: boolean;
  containter: HTMLElement;
  items: NodeList;
  limitItemCount(): void;
  mobileLayout(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  handleResize(): void;
  render(): any;
}
