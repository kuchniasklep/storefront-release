'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');
const productStore = require('./product-store-e1a028d5.js');

const productInfoPointsCss = "ks-product-info-points{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;border-radius:15px;background-color:#f2f2f2;margin:10px 0px}ks-product-info-points .count{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-radius:15px;padding:15px 20px;font-size:26px;min-width:50px;background-color:var(--color-dark);color:var(--text-color-dark);font-family:var(--font-emphasis);font-weight:700}ks-product-info-points .message{padding:10px 15px;font-size:14px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}ks-product-info-points[external]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;background-color:#ffffff;-webkit-box-shadow:var(--card-shadow);box-shadow:var(--card-shadow);margin:20px 0px}ks-product-info-points[external] .count{padding:20px 60px;font-size:32px}ks-product-info-points[external] .message{display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px 20px}ks-product-info-points.hide{display:none}@media only screen and (max-width: 960px){ks-product-info-points{display:-webkit-box !important;display:-ms-flexbox !important;display:flex !important}ks-product-info-points[external]{display:none !important}}@media only screen and (max-width: 1220px){ks-product-info-points[external]{border-radius:0px}ks-product-info-points[external] .count{border-radius:0px}}@media only screen and (max-width: 460px){ks-product-info-points .message{font-size:12px}}";

const ProductInfo = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.count = "";
    this.value = "";
    this.message = "";
    this.internal = false;
    this.external = false;
  }
  render() {
    const hide = productStore.store.get("externalPoints") && this.internal ||
      !productStore.store.get("externalPoints") && this.external ?
      "hide" : "";
    const message = this.message
      .replace("{count}", this.count)
      .replace("{value}", this.value);
    return index.h(index.Host, { class: hide }, index.h("div", { class: "count" }, this.count), index.h("div", { class: "message" }, message));
  }
};
ProductInfo.style = productInfoPointsCss;

exports.ks_product_info_points = ProductInfo;
