/** @deprecated Ks-image is deprecated. Use ks-img instead. */
export declare class Image {
  src: string;
  alt: string;
  width: string;
  height: string;
  sync: boolean;
  cover: boolean;
  contain: boolean;
  loaded: boolean;
  loadAnimated: boolean;
  loadCheck(e: Event): Promise<void>;
  componentDidUpdate(): void;
  srcListener(): void;
  render(): any;
}
