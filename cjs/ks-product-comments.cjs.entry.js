'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const productCommentsCss = "ks-product-comments{display:block}";

const ProductTab = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.link = "";
    this.message = "";
    this.hiddenComments = false;
  }
  render() {
    return (index.h("ks-card", null, index.h("div", { class: "uk-flex uk-flex-middle uk-padding uk-margin-remove" }, index.h("span", { "uk-icon": "icon: comments; ratio: 2.5;", style: { marginRight: "30px", minWidth: "40px" } }), index.h("p", null, this.message)), index.h("hr", { class: "uk-margin-remove" }), index.h("slot", null), index.h("div", { class: "ks-comments", hidden: true }, index.h("slot", { name: "hidden" })), this.hiddenComments ?
      index.h("button", { class: "uk-button uk-button-secondary uk-width-expand", "uk-toggle": "target: .ks-comments" }, index.h("span", { class: "ks-comments", "uk-icon": "icon: chevron-down; ratio: 1.5;" }), index.h("span", { class: "ks-comments", "uk-icon": "icon: chevron-up; ratio: 1.5;", hidden: true }))
      : null, this.link ?
      index.h("a", { class: "uk-button uk-button-danger uk-width-expand", style: { padding: "5px 0 6px 0" }, href: this.link, rel: "nofollow", "aria-label": "Napisz recenzj\u0119" }, index.h("span", { "uk-icon": "icon: plus-circle; ratio: 1.5;" }))
      : null));
  }
  componentDidLoad() {
    const hiddenSlot = this.root.querySelector("div[slot='hidden']");
    if (hiddenSlot != null && hiddenSlot.children.length != 0)
      this.hiddenComments = true;
  }
  get root() { return index.getElement(this); }
};
ProductTab.style = productCommentsCss;

exports.ks_product_comments = ProductTab;
