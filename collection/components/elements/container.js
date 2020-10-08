import { Component, h, Prop } from '@stencil/core';
export class Container {
  constructor() {
    this.padding = false;
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "ks-container"; }
  static get originalStyleUrls() { return {
    "$": ["container.css"]
  }; }
  static get styleUrls() { return {
    "$": ["container.css"]
  }; }
  static get properties() { return {
    "padding": {
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
      "attribute": "padding",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
}
