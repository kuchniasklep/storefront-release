import { Component, h } from '@stencil/core';
import { product } from "../../../global/data/product";
export class ProductShipping {
  render() {
    const available = product.get('availability') > 0;
    const time = available ? product.get("shippingTime") : "Niedostępny w magazynie";
    const timeIcon = available ? "clock" : "alert-circle";
    const freeShipping = parseFloat(product.get("shippingPrice")) == 0;
    const knownShipping = time.search("godzin") != -1 || time.search("dni") != -1;
    const instantShipping = time.search("24 godziny") != -1;
    let timeprefix = knownShipping ? "Wysyłka w" : "";
    let price = freeShipping ? "Darmowa dostawa" : product.get("shippingPrice").replace(".", ",") + " zł";
    const priceprefix = freeShipping ? "" : "Dostawa od";
    const message = product.get("shippingMessage");
    return [
      message ? h("div", { class: "message" }, message)
        : null,
      h("ks-product-attribute", { icon: timeIcon, danger: !instantShipping },
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
