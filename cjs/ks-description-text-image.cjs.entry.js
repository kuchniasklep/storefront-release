'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0dd0274e.js');

const descriptionTextImageCss = "ks-description-text-image{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0;padding:0;margin-bottom:40px}ks-description-text-image[align=\"top\"]{-ms-flex-align:start;align-items:flex-start}ks-description-text-image[align=\"middle\"]{-ms-flex-align:center;align-items:center}ks-description-text-image[align=\"bottom\"]{-ms-flex-align:end;align-items:flex-end}ks-description-text-image .image{width:100%}@media (min-width: 960px){ks-description-text-image[size=\"small\"] .image{width:25%;margin-left:30px}ks-description-text-image[size=\"medium\"] .image{width:calc(100% * 1 / 3.001);margin-left:30px}ks-description-text-image[size=\"large\"] .image{width:50%;margin-left:30px}}@media (min-width: 640px){ks-description-text-image .text{-ms-flex:1 !important;flex:1 !important}}@media (min-width: 360px){ks-description-text-image[size=\"small\"] .image{width:230px}ks-description-text-image[size=\"medium\"] .image{width:300px}}";

const DescriptionTextImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.align = "top";
    this.size = "medium";
  }
  render() {
    return [
      index.h("div", { class: "text" }, index.h("slot", null)),
      index.h("div", { class: "image" }, index.h("ks-img", { src: this.image }))
    ];
  }
};
DescriptionTextImage.style = descriptionTextImageCss;

exports.ks_description_text_image = DescriptionTextImage;
