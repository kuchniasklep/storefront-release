import { Component, h, Element, Prop } from '@stencil/core';
export class OrderPayU {
  constructor() {
    this.unique = "";
    this.text = "";
    this.image = "";
    this.color = "";
    this.hover = "";
    this.active = "";
  }
  componentWillLoad() {
    this.unique = Math.random().toString(36).replace('0.', '');
  }
  componentDidLoad() {
    this.root.style.display = "block";
  }
  render() {
    return (h("div", { class: "uk-flex uk-flex-center" },
      h("style", { innerHTML: `
                    .ks-order-summary-payment-${this.unique} {
                        background-color: ${this.color};
                        color: white;
                    }
                    .ks-order-summary-payment-${this.unique}:hover {
                        background-color: ${this.hover};
                    }
                    .ks-order-summary-payment-${this.unique}:active {
                        background-color: ${this.active};
                    }
                ` }),
      h("button", { type: "submit", class: `uk-button uk-button-pill uk-flex uk-flex-middle uk-flex-center ks-text-decorated ks-order-summary-payment-${this.unique}`, style: { fontSize: "20px", padding: "5px 20px 5px 20px" } },
        h("div", null, this.text),
        h("ks-image", { src: this.image, width: "150", height: "50", class: "uk-visible@s" }))));
  }
  static get is() { return "ks-order-summary-payment"; }
  static get properties() { return {
    "text": {
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
      "attribute": "text",
      "reflect": false,
      "defaultValue": "\"\""
    },
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
      "reflect": false,
      "defaultValue": "\"\""
    },
    "color": {
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
      "attribute": "color",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "hover": {
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
      "attribute": "hover",
      "reflect": false,
      "defaultValue": "\"\""
    },
    "active": {
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
      "attribute": "active",
      "reflect": false,
      "defaultValue": "\"\""
    }
  }; }
  static get elementRef() { return "root"; }
}
