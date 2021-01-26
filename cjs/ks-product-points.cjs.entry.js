'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3f13923b.js');

const productPointsCss = "ks-product-points{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}ks-product-points>div:first-child{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:20%;font-family:var(--font-emphasis);font-weight:700;font-size:32px;color:#ffffff;background-color:#ee1438}ks-product-points>div:last-child{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:14px;padding:15px}@media screen and (max-width: 640px){ks-product-points>div:first-child{width:100%;padding:10px 0}}";

const ProductPoints = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.count = 0;
    this.value = 0;
  }
  render() {
    return [
      index.h("div", null, this.count),
      index.h("div", null, "Kupuj\u0105c ten produkt otrzymasz od nas ", this.count, " punkt\u00F3w do wykorzystania na zakupy w naszym sklepie. Dotyczy tylko zarejestrowanych Klient\u00F3w. Warto\u015B\u0107 ", this.value, " punkt\u00F3w wynosi 1 z\u0142.")
    ];
  }
};
ProductPoints.style = productPointsCss;

exports.ks_product_points = ProductPoints;
