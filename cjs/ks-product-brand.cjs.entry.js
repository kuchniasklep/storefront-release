'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7d3fd69d.js');

const productBrandCss = "ks-product-brand{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;position:absolute;bottom:0;right:0;left:0}ks-product-brand>a{display:block;max-width:150px;height:60px;-webkit-transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;transition:opacity 0.3s ease,\n                -webkit-transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease;transition:opacity 0.3s ease,\n                transform 0.3s ease,\n                -webkit-transform 0.3s ease}ks-product-brand>a:hover{opacity:0.8}ks-product-brand>a:active{opacity:0.5;-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95)}ks-product-brand img{width:unset !important}@media (max-width: 960px){ks-product-brand{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}}";

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
