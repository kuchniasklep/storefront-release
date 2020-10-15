import { Component, h } from '@stencil/core';
import { store } from "../product-store";
export class ProductShipping {
  render() {
    const time = store.get("shippingTime");
    const freeShipping = parseFloat(store.get("shippingPrice")) == 0;
    const knownShipping = time.search("godzin") != -1 || time.search("dni") != -1;
    const instantShipping = time.search("24 godziny") != -1;
    let timeprefix = knownShipping ? "wysyłka w" : "";
    if (timeprefix && freeShipping)
      timeprefix = "darmowa " + timeprefix;
    timeprefix = timeprefix.charAt(0).toUpperCase() + timeprefix.slice(1);
    const timeAnimation = instantShipping ? "" : " time-animation";
    let price = freeShipping ? "" : store.get("shippingPrice").replace(".", ",") + " zł";
    if (freeShipping && !knownShipping)
      price = "darmowa wysyłka";
    const priceprefix = freeShipping ? "" : "od";
    return [
      h("div", { class: "shipping" },
        h("span", { class: "time" + timeAnimation },
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
