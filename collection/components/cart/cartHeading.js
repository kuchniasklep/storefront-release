import { Component, h, Element, Prop } from '@stencil/core';
export class CartHeading {
  constructor() {
    this.center = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
    this.root.style.marginBottom = "20px";
    if (this.center)
      this.root.style.textAlign = "center";
  }
  render() {
    return [
      h("span", { class: "uk-text-bold ks-text-decorated", style: { fontSize: "22px", textTransform: "uppercase" } },
        h("slot", null))
    ];
  }
  static get is() { return "ks-cart-heading"; }
  static get properties() { return {
    "center": {
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
      "attribute": "center",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "root"; }
}
