import { r as registerInstance, h } from './index-22b73bd9.js';
import { s as store } from './product-store-295640a9.js';

const productShippingCss = "ks-product-shipping{display:block;margin-bottom:20px;font-family:var(--product-shipping-font);font-size:var(--product-shipping-size);color:var(--product-shipping-color)}ks-product-shipping .time{display:inline-block;color:var(--color-secondary);font-weight:700}ks-product-shipping .price{display:inline-block;font-weight:700}ks-product-shipping .message{background-color:var(--color-secondary);font-family:var(--product-shipping-message-font);font-size:var(--product-shipping-message-size);color:var(--text-color-secondary);text-align:center;margin:20px 0px 5px -2px;padding:10px 20px;border-radius:15px}@media only screen and (max-width: 1200px){ks-product-shipping .message{font-size:var(--product-shipping-message-size-small)}}@media only screen and (max-width: 960px){ks-product-shipping .shipping{text-align:center;font-size:var(--product-shipping-size-small)}ks-product-shipping .message{margin-bottom:20px}}";

const ProductShipping = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const time = store.get("shippingTime");
    const timeprefix = time.search("godzin") != -1 || time.search("dni") != -1 ?
      "Wysyłka w" : "";
    const price = parseFloat(store.get("shippingPrice")) == 0 ?
      "darmowa wysyłka" :
      store.get("shippingPrice").replace(".", ",") + " zł";
    const priceprefix = parseFloat(store.get("shippingPrice")) == 0 ?
      "" : "od";
    return [
      h("div", { class: "shipping" }, h("span", { class: "time" }, " ", timeprefix, " ", time, " "), " \u00A0", h("span", { class: "price" }, priceprefix, " ", price, " ")),
      store.get("shippingMessage") ?
        h("div", { class: "message" }, store.get("shippingMessage"))
        : null
    ];
  }
};
ProductShipping.style = productShippingCss;

export { ProductShipping as ks_product_shipping };
