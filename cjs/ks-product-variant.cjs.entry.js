'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const productVariantCss = "ks-product-variant{display:block;height:100%}ks-product-variant a{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;background-color:white;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);padding:7px}ks-product-variant[active] a{border:2px solid #222}ks-product-variant ks-img{opacity:1;-webkit-transition:opacity 0.2s ease;transition:opacity 0.2s ease}ks-product-variant[unavailable] ks-img{opacity:0.2}ks-product-variant:not([unavailable]) a:hover ks-img{opacity:0.8}ks-product-variant[unavailable] a:hover ks-img{opacity:0.15}";

const ProductVariant = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h("a", { href: this.link, "aria-label": this.name }, index.h("ks-img", { center: true, contained: true, src: this.image, width: 90, height: 90, alt: this.name })));
  }
};
ProductVariant.style = productVariantCss;

exports.ks_product_variant = ProductVariant;
