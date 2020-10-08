import { Component, h, Prop, Element } from '@stencil/core';
export class OrderButton {
  constructor() {
    this.mobile = false;
    this.wide = false;
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return [
      h("a", { href: this.href, class: "uk-button uk-button-default " +
          (this.mobile ? "uk-hidden@m " : "") +
          (this.wide ? "uk-width-1-1 " : ""), style: { padding: "0 20px" } },
        h("slot", null))
    ];
  }
  static get is() { return "ks-order-button"; }
  static get properties() { return {
    "href": {
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
      "attribute": "href",
      "reflect": false
    },
    "mobile": {
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
      "attribute": "mobile",
      "reflect": false,
      "defaultValue": "false"
    },
    "wide": {
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
      "attribute": "wide",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get elementRef() { return "root"; }
}
