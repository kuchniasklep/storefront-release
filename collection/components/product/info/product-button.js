import { Component, h, Prop } from '@stencil/core';
export class ProductButton {
  render() {
    if (this.icon)
      return h("ks-img2", { src: this.icon });
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
    "icon": {
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
      "attribute": "icon",
      "reflect": true
    }
  }; }
}
