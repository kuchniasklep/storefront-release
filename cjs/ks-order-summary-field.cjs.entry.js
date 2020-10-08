'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const OrderSummaryField = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.dark = false;
    this.large = false;
    this.single = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    const bgColor = this.dark ? "#252525" : "#f2f2f2";
    const color = this.dark ? "white" : "inherit";
    const font = this.large ? "20px" : "inherit";
    if (this.single)
      return (index.h("div", { class: "uk-padding-small " + (this.large ? "ks-text-decorated" : ""), style: { backgroundColor: bgColor, color: color, fontSize: font } }, index.h("slot", null)));
    return (index.h("div", { class: "uk-padding-small uk-flex uk-flex-wrap uk-child-width-1-1 uk-child-width-auto@m uk-flex-between " + (this.large ? "ks-text-decorated" : ""), style: { backgroundColor: bgColor, color: color, fontSize: font } }, index.h("div", { class: "uk-text-center uk-text-left@m", style: { minWidth: "150px" } }, index.h("slot", { name: "left" })), index.h("div", { class: "uk-text-center uk-text-right@m" }, index.h("slot", { name: "right" }))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_summary_field = OrderSummaryField;
