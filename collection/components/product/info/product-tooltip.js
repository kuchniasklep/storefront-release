import { Component, h, Listen, Prop } from '@stencil/core';
export class ProductButton {
  constructor() {
    this.active = false;
  }
  onMouseover() {
    this.active = true;
  }
  onMouseout() {
    this.active = false;
  }
  render() {
    return [
      h("slot", null),
      h("div", { class: "arrow" }),
      h("div", { class: "message" }, this.message)
    ];
  }
  static get is() { return "ks-product-tooltip"; }
  static get originalStyleUrls() { return {
    "$": ["product-tooltip.css"]
  }; }
  static get styleUrls() { return {
    "$": ["product-tooltip.css"]
  }; }
  static get properties() { return {
    "message": {
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
      "attribute": "message",
      "reflect": false
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
  static get listeners() { return [{
      "name": "mouseover",
      "method": "onMouseover",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseout",
      "method": "onMouseout",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
