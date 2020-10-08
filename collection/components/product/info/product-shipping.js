import { Component, h } from '@stencil/core';
import { store } from "../product-store";
export class ProductShipping {
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
      h("div", { class: "shipping" },
        h("span", { class: "time" },
          " ",
          timeprefix,
          " ",
          time,
          " "),
        " \u00A0",
        h("span", { class: "price" },
          priceprefix,
          " ",
          price,
          " ")),
      store.get("shippingMessage") ?
        h("div", { class: "message" }, store.get("shippingMessage"))
        : null
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
