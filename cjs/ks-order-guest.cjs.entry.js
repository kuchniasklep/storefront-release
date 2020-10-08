'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const OrderGuest = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      index.h("div", { class: "uk-padding" }, index.h("div", { class: "uk-text-center", style: { maxWidth: "500px", margin: "auto" } }, index.h("p", { class: "ks-text-decorated uk-text-bold", style: { fontSize: "28px" } }, "ZAM\u00D3W BEZ LOGOWANIA"), index.h("slot", null)))
    ];
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_guest = OrderGuest;
