import { Component, h } from '@stencil/core';
import { store } from "../product-store";
export class ProductShipping {
  render() {
    const time = store.get("shippingTime");
    const freeShipping = parseFloat(store.get("shippingPrice")) == 0;
    const knownShipping = time.search("godzin") != -1 || time.search("dni") != -1;
    const instantShipping = time.search("24 godziny") != -1;
    let timeprefix = knownShipping ? "Wysyłka w" : "";
    let price = freeShipping ? "Darmowa dostawa" : store.get("shippingPrice").replace(".", ",") + " zł";
    const priceprefix = freeShipping ? "" : "Dostawa od";
    const message = store.get("shippingMessage");
    return [
      message ? h("div", { class: "message" }, message)
        : null,
      h("ks-product-attribute", { icon: "clock", danger: !instantShipping },
        timeprefix,
        " ",
        time),
      h("ks-product-attribute", { icon: "package" },
        priceprefix,
        " ",
        price)
    ];
  }
  static get is() { return "ks-product-shipping"; }
  static get originalStyleUrls() { return {
    "$": ["product-shipping.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-shipping.css"]
  }; }
}
