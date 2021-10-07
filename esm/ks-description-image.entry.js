import { r as registerInstance, h } from './index-a14dfead.js';

const descriptionImageCss = "ks-description-image{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-bottom:40px}";

const DescriptionImage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return h("ks-img", { src: this.image });
  }
};
DescriptionImage.style = descriptionImageCss;

export { DescriptionImage as ks_description_image };
