import { Component, h } from '@stencil/core';
import { store } from "../product-store";
export class ProductTitle {
  render() {
    return [
      h("div", { class: "breadcrumbs" }, store.get("breadcrumbs").map(item => h("a", { href: item.link }, item.name))),
      h("h1", null, store.get("name"))
    ];
  }
  static get is() { return "ks-product-title"; }
  static get originalStyleUrls() { return {
    "$": ["product-title.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-title.css"]
  }; }
}
