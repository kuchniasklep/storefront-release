import { Component, h, Prop } from '@stencil/core';
export class ProductButton {
  constructor() {
    this.large = false;
    this.medium = false;
  }
  render() {
    return h("button", null,
      h("slot", null));
  }
  static get is() { return "ks-product-button"; }
  static get originalStyleUrls() { return {
    "$": ["product-button.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-button.css"]
  }; }
  static get properties() { return {
    "large": {
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
      "attribute": "large",
      "reflect": true,
      "defaultValue": "false"
    },
    "medium": {
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
      "attribute": "medium",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
