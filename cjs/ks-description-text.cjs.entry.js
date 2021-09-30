'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d2dd4d1b.js');

const descriptionTextCss = "ks-description-text{display:block;margin-bottom:40px}";

const DescriptionText = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("slot", null);
  }
};
DescriptionText.style = descriptionTextCss;

exports.ks_description_text = DescriptionText;
