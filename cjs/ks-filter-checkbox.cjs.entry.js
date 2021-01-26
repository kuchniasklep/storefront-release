'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const FilterCheckbox = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = false;
  }
  render() {
    return [
      index.h("label", null, index.h("input", { class: "uk-checkbox", name: this.name + "[" + this.filterId + "]", type: "checkbox", checked: this.active }), " ", index.h("slot", null)),
      index.h("br", null)
    ];
  }
};

exports.ks_filter_checkbox = FilterCheckbox;
