'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const OrderAddressField = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      index.h("span", { innerHTML: this.name }),
      index.h("div", { class: "uk-padding-small uk-margin-bottom", style: { backgroundColor: "#f2f2f2" } }, index.h("slot", null))
    ];
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_address_field = OrderAddressField;
