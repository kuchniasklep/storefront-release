import { Component, h, Prop } from '@stencil/core';
export class CartDiscountTicket {
  constructor() {
    this.name = "";
  }
  render() {
    return [
      h("div", { style: { margin: "20px 0", color: "#777777", textAlign: "center" } },
        h("span", { "uk-icon": "info" }),
        " ",
        h("slot", null))
    ];
  }
  static get is() { return "ks-cart-discount-message"; }
  static get originalStyleUrls() { return {
    "$": ["cartDiscountTicket.css"]
  }; }
  static get styleUrls() { return {
    "$": ["cartDiscountTicket.css"]
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
    }
  }; }
}
