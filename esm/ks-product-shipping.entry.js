import { r as registerInstance, h } from './index-22b73bd9.js';
import './index-fe9ed645.js';
import { s as store } from './product-store-89a25286.js';

const productShippingCss = "ks-product-shipping{display:block;margin-bottom:20px;font-family:var(--product-shipping-font);font-size:var(--product-shipping-size);color:var(--product-shipping-color)}ks-product-shipping .time{display:inline-block;color:var(--color-secondary);font-weight:700}ks-product-shipping .price{display:inline-block;font-weight:700;font-size:var(--product-shipping-size-small)}ks-product-shipping .separator{margin:0px 6px;-webkit-transform:scale(0.9, 0.9);-ms-transform:scale(0.9, 0.9);transform:scale(0.9, 0.9)}ks-product-shipping .message{background-color:var(--color-secondary);font-family:var(--product-shipping-message-font);font-size:var(--product-shipping-message-size);color:var(--text-color-secondary);text-align:center;margin:20px 0px 5px -2px;padding:10px 20px;border-radius:15px}@media only screen and (max-width: 1200px){ks-product-shipping .message{font-size:var(--product-shipping-message-size-small)}}@media only screen and (max-width: 960px){ks-product-shipping{margin-top:20px}ks-product-shipping .shipping{text-align:center;font-size:var(--product-shipping-size)}ks-product-shipping .message{margin-bottom:20px}ks-product-shipping .time{display:block;font-size:var(--product-shipping-size)}ks-product-shipping .price{display:block}ks-product-shipping .separator{display:none}}ks-product-shipping .time-animation{-webkit-animation:blink 1.5s ease-in-out infinite;animation:blink 1.5s ease-in-out infinite}";

const ProductShipping = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const time = store.get("shippingTime");
    const freeShipping = parseFloat(store.get("shippingPrice")) == 0;
    const knownShipping = time.search("godzin") != -1 || time.search("dni") != -1;
    const instantShipping = time.search("24 godziny") != -1;
    let timeprefix = knownShipping ? "Wysyłka w" : "";
    const timeAnimation = instantShipping ? "" : " time-animation";
    let price = freeShipping ? "Darmowa dostawa" : store.get("shippingPrice").replace(".", ",") + " zł";
    const priceprefix = freeShipping ? "" : "Dostawa od";
    return [
      h("div", { class: "shipping" }, h("span", { class: "time" + timeAnimation }, " ", timeprefix, " ", time, " "), h("span", { class: "separator" }, " \u2022 "), h("span", { class: "price" }, priceprefix, " ", price)),
      store.get("shippingMessage") ?
        h("div", { class: "message" }, store.get("shippingMessage"))
        : null
    ];
  }
};
ProductShipping.style = productShippingCss;

export { ProductShipping as ks_product_shipping };
