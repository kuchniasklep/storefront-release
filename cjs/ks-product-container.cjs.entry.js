'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');

const productContainerCss = "ks-product-container{display:block}ks-product-container>div{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;margin-left:-15px;margin-top:-15px}ks-product-container>div>*{padding-left:15px;margin-top:15px;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width: 360px) and (max-width: 640px){ks-product-container>div>*{width:50%}}@media (min-width: 640px){ks-product-container>div>*{width:230px}}";

const Container = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return index.h("div", null, index.h("slot", null));
  }
};
Container.style = productContainerCss;

exports.ks_product_container = Container;