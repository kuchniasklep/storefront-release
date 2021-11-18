'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-601dda3f.js');

const descriptionImageCss = "ks-description-image{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-bottom:40px}";

let DescriptionImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("ks-img", { src: this.image });
  }
};
DescriptionImage.style = descriptionImageCss;

exports.ks_description_image = DescriptionImage;
