'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c2b39b63.js');

const SectionHeading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return [
      index.h("h3", { class: "uk-text-center uk-margin-medium-bottom" }, index.h("slot", null))
    ];
  }
};

exports.ks_section_heading = SectionHeading;
