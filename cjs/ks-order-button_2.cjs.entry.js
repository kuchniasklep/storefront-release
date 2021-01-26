'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const OrderButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mobile = false;
    this.wide = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      index.h("a", { href: this.href, class: "uk-button uk-button-default " +
          (this.mobile ? "uk-hidden@m " : "") +
          (this.wide ? "uk-width-1-1 " : ""), style: { padding: "0 20px" } }, index.h("slot", null))
    ];
  }
  get root() { return index.getElement(this); }
};

const OrderHeading = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      index.h("div", { style: { marginBottom: "20px" }, class: "uk-flex uk-flex-middle uk-flex-between" }, index.h("div", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } }, this.heading), index.h("a", { href: this.link, class: "uk-link-text" }, index.h("span", { "uk-icon": "file-edit" })))
    ];
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_button = OrderButton;
exports.ks_order_heading = OrderHeading;
