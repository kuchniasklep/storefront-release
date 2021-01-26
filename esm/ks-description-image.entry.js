import { r as registerInstance, h } from './index-74ff0cef.js';

const descriptionImageCss = "ks-description-image{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:40px}";

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
