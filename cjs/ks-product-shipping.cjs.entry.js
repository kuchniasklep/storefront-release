'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-18d28dc7.js');
const productStore = require('./product-store-e1a028d5.js');

const productShippingCss = "ks-product-shipping{display:block;margin-bottom:20px;font-family:var(--product-shipping-font);font-size:var(--product-shipping-size);color:var(--product-shipping-color)}ks-product-shipping .time{display:inline-block;color:var(--color-secondary);font-weight:700}ks-product-shipping .price{display:inline-block;font-weight:700}ks-product-shipping .message{background-color:var(--color-secondary);font-family:var(--product-shipping-message-font);font-size:var(--product-shipping-message-size);color:var(--text-color-secondary);text-align:center;margin:20px 0px 5px -2px;padding:10px 20px;border-radius:15px}@media only screen and (max-width: 1200px){ks-product-shipping .message{font-size:var(--product-shipping-message-size-small)}}@media only screen and (max-width: 960px){ks-product-shipping .shipping{text-align:center;font-size:var(--product-shipping-size-small)}ks-product-shipping .message{margin-bottom:20px}}";

const ProductShipping = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    const time = productStore.store.get("shippingTime");
    const timeprefix = time.search("godzin") != -1 || time.search("dni") != -1 ?
      "Wysyłka w" : "";
    const price = parseFloat(productStore.store.get("shippingPrice")) == 0 ?
      "darmowa wysyłka" :
      productStore.store.get("shippingPrice").replace(".", ",") + " zł";
    const priceprefix = parseFloat(productStore.store.get("shippingPrice")) == 0 ?
      "" : "od";
    return [
      index.h("div", { class: "shipping" }, index.h("span", { class: "time" }, " ", timeprefix, " ", time, " "), " \u00A0", index.h("span", { class: "price" }, priceprefix, " ", price, " ")),
      productStore.store.get("shippingMessage") ?
        index.h("div", { class: "message" }, productStore.store.get("shippingMessage"))
        : null
    ];
  }
};
ProductShipping.style = productShippingCss;

exports.ks_product_shipping = ProductShipping;