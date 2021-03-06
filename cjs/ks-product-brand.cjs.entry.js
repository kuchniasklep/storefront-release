'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-c2b39b63.js');

const productBrandCss = "ks-product-brand{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}ks-product-brand>a{display:block;max-width:150px;height:60px;-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px);-webkit-transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease,\n                -webkit-transform 0.3s ease}ks-product-brand>a:hover{opacity:0.8}ks-product-brand>a:active{opacity:0.5;-webkit-transform:translateY(15px) scale(0.95);-ms-transform:translateY(15px) scale(0.95);transform:translateY(15px) scale(0.95)}@media (max-width: 960px){ks-product-brand{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}@media (max-width: 460px){ks-product-brand{margin-bottom:20px}}";

const ProductBrand = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("a", { href: this.href }, index.h("ks-img2", { src: this.logo, alt: this.name, width: this.width, height: this.height }));
  }
};
ProductBrand.style = productBrandCss;

exports.ks_product_brand = ProductBrand;
