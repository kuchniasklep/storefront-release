'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7c91bddc.js');

const ProductSimple = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    let currentPrice;
    if (this.currentPrice)
      currentPrice = this.currentPrice.replace(".", ",") + " zł";
    let previousPrice;
    if (this.previousPrice)
      previousPrice = this.previousPrice.replace(".", ",") + " zł";
    return (index.h("div", null, index.h("div", { class: "uk-text-xsmall uk-text-center uk-link-reset uk-position-relative uk-margin-small-bottom" }, index.h("a", { href: this.link }, index.h("div", { class: "uk-margin-small-bottom" }, index.h("ks-image", { src: this.img, width: "280", height: "280", contain: true, alt: "zdj\u0119cie produktu" })), this.name)), index.h("div", { class: "uk-text-xsmall uk-text-center uk-position-relative", style: { pointerEvents: "none" } }, this.previousPrice ? [
      index.h("span", { class: "uk-text-muted" }, index.h("s", null, previousPrice)), index.h("br", null)
    ] : null, index.h("span", { class: "uk-text-bold uk-text-normal uk-text-danger" }, currentPrice))));
  }
  get root() { return index.getElement(this); }
};

exports.ks_product_simple = ProductSimple;
