'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const Filter = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.active = false;
  }
  render() {
    return (index.h("ul", { "uk-accordion": "animation: false;" }, index.h("li", { class: this.active ? "uk-open" : null }, index.h("a", { class: "uk-accordion-title", href: "#" }, this.name), index.h("div", { class: "uk-accordion-content" }, index.h("slot", null)))));
  }
};

exports.ks_filter = Filter;
