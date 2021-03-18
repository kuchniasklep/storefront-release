import { Component, h, Prop } from '@stencil/core';
export class CartEasyprotectProduct {
  constructor() {
    this.warrranty = "1 rok gwarancji producenta";
    this.active = false;
  }
  render() {
    return [
      h("div", { class: "image" },
        h("ks-img2", { src: this.image, width: 200, height: 200 })),
      h("div", { class: "info" },
        h("div", { class: "name" }, this.name),
        h("div", { class: "warranty" }, this.warrranty))
    ];
  }
  static get is() { return "ks-cart-easyprotect-product"; }
  static get originalStyleUrls() { return {
    "$": ["cart-easyprotect-product.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cart-easyprotect-product.css"]
  }; }
  static get properties() { return {
    "image": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "image",
      "reflect": false
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "name",
      "reflect": false
    },
    "warrranty": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "warrranty",
      "reflect": false,
      "defaultValue": "\"1 rok gwarancji producenta\""
    },
    "active": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
