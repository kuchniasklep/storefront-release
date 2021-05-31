import { Component, h, Element, Prop, Listen } from '@stencil/core';
export class ProductInfo {
  constructor() {
    this.name = "";
    this.active = false;
  }
  clickOutside(event) {
    const target = event.target;
    if (!target.closest('ks-product-installments'))
      this.active = false;
    return target;
  }
  render() {
    return [
      h("ks-product-button", { onClick: () => this.active = !this.active }, this.name),
      h("div", { class: "arrow" }),
      h("div", { class: "content" },
        h("slot", null))
    ];
  }
  static get is() { return "ks-product-installments"; }
  static get originalStyleUrls() { return {
    "$": ["product-installments.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-installments.css"]
  }; }
  static get properties() { return {
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
      "reflect": false,
      "defaultValue": "\"\""
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
  static get elementRef() { return "root"; }
  static get listeners() { return [{
      "name": "click",
      "method": "clickOutside",
      "target": "window",
      "capture": false,
      "passive": false
    }]; }
}
