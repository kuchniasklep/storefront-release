export interface LightboxImageData {
  thumb: LightboxImageProperties;
  full: LightboxImageProperties;
}
export interface LightboxImageProperties {
  url: string;
  width?: number;
  height?: number;
}
