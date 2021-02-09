import { Component, h, Prop, } from '@stencil/core';
export class Grid {
  constructor() {
    this.section = false;
  }
  render() {
    return h("slot", null);
  }
  static get is() { return "ks-grid"; }
  static get originalStyleUrls() { return {
    "$": ["grid.css"]
  }; }
  static get styleUrls() { return {
    "$": ["grid.css"]
  }; }
  static get properties() { return {
    "section": {
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
      "attribute": "section",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
