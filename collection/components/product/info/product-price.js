import { Component, h } from '@stencil/core';
import { store } from "../product-store";
export class ProductPrice {
  render() {
    const previousPrice = store.get("previousPrice").replace('.', ',');
    const currentPrice = store.get("currentPrice").replace('.', ',');
    return [
      h("div", { class: "current" }, currentPrice),
      h("div", { class: "currency" }, "z\u0142"),
      previousPrice ? h("div", { class: "previous" }, previousPrice) : null
    ];
  }
  static get is() { return "ks-product-price"; }
  static get originalStyleUrls() { return {
    "$": ["product-price.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-price.css"]
  }; }
}
