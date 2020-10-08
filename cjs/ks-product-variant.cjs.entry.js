'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const productVariantCss = "ks-product-variant a{display:block;height:100%}ks-product-variant .uk-card{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}";

const ProductVariant = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("a", { href: this.link, "aria-label": this.name }, index.h("div", { class: "uk-card uk-card-default uk-card-body uk-padding-small uk-position-relative uk-transition-toggle" }, index.h("div", { class: "uk-flex uk-flex-column uk-flex-middle uk-text-small", style: this.unavailable ? { opacity: "0.2" } : null }, index.h("ks-image", { src: this.image, width: "90", height: "90", alt: this.name })), this.active ? index.h("div", { class: "uk-overlay-border uk-position-cover" }) : null, index.h("div", { class: "uk-position-cover uk-transition-fade", style: { backgroundColor: "rgba(255, 255, 255, 0.3)" } }))));
  }
};
ProductVariant.style = productVariantCss;

exports.ks_product_variant = ProductVariant;
