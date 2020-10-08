'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const OrderButtonPair = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mobile = false;
    this.linkLeft = "";
    this.linkRight = "";
    this.split = 50;
  }
  resizeHandler() {
    this.mobile = window.innerWidth < 640;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.resizeHandler();
  }
  render() {
    const split = this.mobile ? "100%" : this.split - 1 + "%";
    return (index.h("div", { class: "ks-text-decorated uk-text-bold uk-flex uk-flex-wrap uk-margin-top" }, index.h("a", { href: this.linkLeft, class: `uk-display-block uk-button uk-button-default ${this.mobile ? "uk-margin-small-bottom" : "uk-margin-right"}`, style: { fontSize: "18px", width: split } }, index.h("slot", { name: "left" })), index.h("a", { href: this.linkRight, class: "uk-display-block uk-button uk-button-default uk-width-expand", style: { fontSize: "18px" } }, index.h("slot", { name: "right" }))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_order_button_pair = OrderButtonPair;
