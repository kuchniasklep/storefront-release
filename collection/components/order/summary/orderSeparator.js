import { Component, h, Element, Prop } from '@stencil/core';
export class OrderSeparator {
  constructor() {
    this.dark = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    const bgColor = this.dark ? "#404040" : "#dadada";
    return (h("hr", { class: "uk-margin-remove", style: { borderColor: bgColor } }));
  }
  static get is() { return "ks-order-separator"; }
  static get properties() { return {
    "dark": {
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
      "attribute": "dark",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "root"; }
}
