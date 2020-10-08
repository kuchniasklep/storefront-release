'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const DescriptionTextImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.align = "top";
    this.size = "medium";
  }
  render() {
    let gridclass = "uk-margin-medium uk-flex uk-flex-center uk-flex-warp";
    switch (this.align) {
      case "top": {
        gridclass += " uk-flex-top";
        break;
      }
      case "middle": {
        gridclass += " uk-flex-middle";
        break;
      }
      case "bottom": {
        gridclass += " uk-flex-bottom";
        break;
      }
    }
    let sizeclass = "";
    switch (this.size) {
      case "small": {
        sizeclass = "uk-width-small@xs uk-width-1-4@m";
        break;
      }
      case "medium": {
        sizeclass = "uk-width-medium@xs uk-width-1-3@m";
        break;
      }
      case "large": {
        sizeclass = "uk-width-1-2@m";
        break;
      }
    }
    return (index.h("div", { class: gridclass, "uk-grid": true }, index.h("div", { class: "uk-width-1-1 uk-flex-1@s uk-text-left" }, index.h("slot", null)), index.h("div", { class: sizeclass }, index.h("ks-image", { src: this.image }))));
  }
};

exports.ks_description_text_image = DescriptionTextImage;
