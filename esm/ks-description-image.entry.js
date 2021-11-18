import { r as registerInstance, h } from './index-7a533c43.js';

const descriptionImageCss = "ks-description-image{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-bottom:40px}";

let DescriptionImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("ks-img", { src: this.image });
  }
};
DescriptionImage.style = descriptionImageCss;

export { DescriptionImage as ks_description_image };
