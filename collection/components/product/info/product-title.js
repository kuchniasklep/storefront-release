import { Component, h, Prop } from '@stencil/core';
import { store } from "../product-store";
export class ProductTitle {
  constructor() {
    this.brandLink = false;
  }
  render() {
    const name = store.get("name");
    let title = h("h1", null, name);
    if (this.brandLink) {
      const brandLength = store.get("brand").length;
      const brandLink = store.get("brandLink");
      const index = this.brandIndex();
      if (index !== -1) {
        const prefix = name.substr(0, index);
        const brand = name.substr(index, brandLength);
        const suffix = name.substr(index + brandLength);
        title = h("h1", null,
          prefix,
          h("a", { href: brandLink }, brand),
          suffix);
      }
    }
    return [
      h("div", { class: "breadcrumbs" }, store.get("breadcrumbs").map(item => h("a", { href: item.link }, item.name))),
      title
    ];
  }
  brandIndex() {
    return store.get("name").toLowerCase().indexOf(store.get("brand").toLowerCase());
  }
  static get is() { return "ks-product-title"; }
  static get originalStyleUrls() { return {
    "$": ["product-title.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-title.css"]
  }; }
  static get properties() { return {
    "brandLink": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "brand-link",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
