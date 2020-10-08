export declare class CartDeal {
  ikey: string;
  name: string;
  img: string;
  link: string;
  price: string;
  loading: boolean;
  AddDeal: (id: string) => Promise<void>;
  Add(): void;
  render(): any[];
}
